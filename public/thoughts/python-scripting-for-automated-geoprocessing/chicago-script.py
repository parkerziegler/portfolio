# NAME: AWR_Script
# Description: Run an areal-weighted reaggregation (AWR) on crime data and racial Census data for the city of Chicago given a .csv file of crimes, a shapefile for Census block groups, and a shapefile for CPD police beats.
# Author: Parker Ziegler
# Preparatory Steps
# Create a .mxd file to hold your map (i.e. "Chicago_Arrest_Map.mxd")
# Create a .csv file of the point data you're interested in. In this case, I used data showing the locations of arrests for crack cocaine possession in Chicago, courtesy of the Chicago Data Portal.
# You'll need to acquire shapefiles of the City of Chicago police beats as well as Census data. These can be accessed via the Chicago Data Portal and census.gov, respectively.
# Place all files and their metadata into your workspace folder.
# Import system modules.
import arcpy
import os
# Set environment workspace, enable file overwrite.
from arcpy import env
env.workspace = r"W:/GG700/Chicago_Arrests"
env.overwriteOutput = True
print "Env is set to Chicago_Arrests."
# Create a file geodatabase to store your data
out_folder_path = r"W:/GG700/Chicago_Arrests"
out_name = "Chicago_Arrest_Data.gdb"
arcpy.CreateFileGDB_management(out_folder_path, out_name)
print "Geodatabase created."
# Before starting analysis, we need to clean up our Census layer. In order to run the SelectLayerByLocation tool we first have to create a layer file from our Census shapefile.

arcpy.MakeFeatureLayer_management("block_groups.shp", "block_groups_lyr")
print "Census layer created."
# Perform a select by location on the Census data to get only the blocks groups that intersect the CPD police beats.

arcpy.SelectLayerByLocation_management("block_groups_lyr", "INTERSECT", "police_beats.shp")
print "Intersecting features selected."
# Write these block groups to a new shapefile.
arcpy.CopyFeatures_management("block_groups_lyr", "chicago_blk_grps.shp")
print "Features copied to shapefile."
# Display the Crack_XYData.csv as points and write a point feature class.
 
# Set variables.

in_table = "Crack_XYData.csv"
x_coords = "Longitude"
y_coords = "Latitude"
out_layer = "crack_as_points"
saved_layer = "crack_as_points.lyr"
sr = arcpy.SpatialReference("WGS 1984")

# Make the XY Event Layer

arcpy.MakeXYEventLayer_management(in_table, x_coords, y_coords, out_layer, sr)
print "XY Event Layer created."

# Create an output layer file (.lyr) file.

arcpy.SaveToLayerFile_management(out_layer, saved_layer)
print "Layer file created."

# Copy the layer file to a shapefile (.shp).
arcpy.CopyFeatures_management(saved_layer, "crack_as_points.shp")
print "Shapefile successfully created."

# Move your "crack_as_points.shp", your "police_beats.shp", and your "chicago_blk_grps.shp" into your file geodatabase.

in_features = ["crack_as_points.shp", "police_beats.shp", "chicago_blk_grps.shp"]
out_gdb = r"W:/GG700/Chicago_Arrests/Chicago_Arrest_Data.gdb"
arcpy.FeatureClassToGeodatabase_conversion(in_features, out_gdb)
print "Shapefiles have been converted to feature classes in the geodatabase."

# Now, get all your feature classes into the same spatial reference.
env.workspace = out_gdb
infcList = arcpy.ListFeatureClasses()
infcList.sort()
outfcList = ["chicago_blk_grps_project","crack_as_points_project", "police_beats_project"]
outCS = arcpy.SpatialReference("NAD 1983 UTM Zone 16N")
i = 0
for infc in infcList:
	arcpy.Project_management(infcList[i], outfcList[i], outCS)
	i += 1

print "All layers are in the same coordinate system."

# By now, your three features classes should be in the same coordinate system. Now, perform a spatial join to get the number of crimes in each police beat.

# Join "crack_as_points_project" (points) to "police_beats_project" (polygons).
# Define variables.
target_features = "police_beats_project"
join_features = "crack_as_points_project"
outfc = "police_beats_crack_joined"
# Run the Spatial Join tool.

arcpy.SpatialJoin_analysis(target_features, join_features, outfc)
print "Crack points have been joined to police beats."
# Performing a spatial join will automatically create a field labeled "Join_Count"; use this field, as well as area information from your police beats feature class, to create a new field that gives arrests / sq. km.
# Add fields for police beat geometry and crime density.

arcpy.AddField_management("police_beats_crack_joined", "area_beats", "FLOAT", 9)
arcpy.AddField_management("police_beats_crack_joined", "arrest_dns", "FLOAT", 9)
print "Two fields have been added."
# Calculate geometry, use this value to calculate a crime density for each police beat.
arcpy.CalculateField_management("police_beats_crack_joined", "area_beats", '!shape.geodesicArea@squarekilometers!', "PYTHON_9.3")
arcpy.CalculateField_management("police_beats_crack_joined", "arrest_dns", 'float(!Join_Count!)/float(!area_beats!)', "PYTHON_9.3")
print "Crime density field has been calculated."
# Write this joined value to a new feature class, as joins are stored only in memory.
arcpy.CopyFeatures_management("police_beats_crack_joined", "arrest_density")
print "Arrest Density feature class written to geodatabase."

# You have now successfully created the choropleth layer representing arrest density for possession of crack cocaine by CPD police beat. The next part of the workflow involves performing an areal weighted reaggregation on our Census data to obtain the number of people living in each police beat by race.
# Calculate the area of each Census block group.
arcpy.AddField_management("chicago_blk_grps_project", "a_blk_grps", "DOUBLE", 10)
arcpy.CalculateField_management("chicago_blk_grps_project", "a_blk_grps", '!shape.geodesicArea@squarekilometers!', "PYTHON_9.3")
print "Area of each block group calculated."
# Intersect the Census block groups with the police beats.

in_features = ["chicago_blk_grps_project", "police_beats_project"]
out_features = "blk_grps_beats_intersect"
arcpy.Intersect_analysis(in_features, out_features)
print "Intersect completed."
# Now, create a field that will divide the areas of the intersected features by the areas of the Census block groups.

arcpy.AddField_management(out_features, "area_ratio", "DOUBLE", 10)
arcpy.CalculateField_management(out_features, "area_ratio", '!shape.geodesicArea@squarekilometers!/!a_blk_grps!', "PYTHON_9.3")
print "Area ratio calculated."

# Next, multiply this ratio by the number of Black, White, Hispanic, Asian, and Multiple Race people in each Census block group. This will give us the number of people of each race in each intersect feature.

# Add five fields, one for each race.
fieldList = ["black_pop", "white_pop", "hisp_pop", "asian_pop", "mult_pop"]
field_type = "DOUBLE"
field_length = 10
for field in fieldList:
	arcpy.AddField_management(out_features, field, field_type, field_length)	
print "All fields for racial data added."
# Calculate the values for all five fields using the ratio created above and the Census data included from the intersect.
calcList = ["BLACK", "WHITE", "HISPANIC", "ASIAN", "MULT_RACE"]
i = 0
for field in fieldList:
	arcpy.CalculateField_management(out_features, fieldList[i], '' + '!' + calcList[i] + '!' + '*!area_ratio!', "PYTHON_9.3")
	i += 1
print "All fields for racial data calculated."
# The last step in the AWR is to dissolve our intersected features along the boundaries of the police beats. This will reaggregate our racial data by police beats, which we will represent using a dot density.

# Define variables. 
in_features = "blk_grps_beats_intersect"
out_features = "race_by_beats"
dissolve_field = "BEAT_NUM"
stats_fields = "black_pop SUM; white_pop SUM; hisp_pop SUM; asian_pop SUM; mult_pop SUM"
# Run the Dissolve tool.

arcpy.Dissolve_management(in_features, out_features, dissolve_field, stats_fields)print "Dissolve completed."

# The script is now complete. The final map should be composed of two layers – "arrest_density" (a choropleth density of arrests for possession of crack cocaine) and "race_by_beats" (a dot density representation of the racial make up of Chicago). You may also want to add a base map depending on your purposes.
# Use the symbology GUI to change the symbology and set boundaries as you wish. I recommend doing most of your design work in Adobe Illustrator.