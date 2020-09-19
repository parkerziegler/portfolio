# Name: ArealWeightedReaggregation.py
# Description: Perform an areal-weighted reaggregation given two input polygon vectors. Statistics and dissolve fields must be specified in parameters.
# Author: Parker Ziegler

# Import system modules.

import arcpy
import os

# Set environments and output workspace.

from arcpy import env
env.overwriteOutput = True
env.workspace = arcpy.GetParameterAsText(0)

# Set local variables to the polygon feature class with the data of interest (feature data) and the polygon feature class with the new areal units (areal units). Specify the dissolve field in the areal units feature class that will be used to aggregate the data.

feature_data = arcpy.GetParameterAsText(1)
areal_unit = arcpy.GetParameterAsText(2)
dissolve_field = arcpy.GetParameterAsText(3)

# Add a field called "Area" that specifies the area of each polygon in the polygon feature class with your data of interest (feature data). This will be used in a later step to calculate an area ratio.

arcpy.AddField_management(feature_data, "AREA_M", "DOUBLE", 10)
arcpy.CalculateField_management(feature_data, "AREA_M", '!shape.geodesicArea@squaremeters!', "PYTHON_9.3")

# Intersect the feature data polygons with the areal units polygons.

intersect_fcs = [feature_data, areal_unit]
out_fcs = arcpy.GetParameterAsText(4)
arcpy.Intersect_analysis(intersect_fcs, out_fcs)

# Now, create a field called "AREA_RATIO" that will divide the areas of the intersected polygons by the areas of the feature data polygons.

arcpy.AddField_management(out_fcs, "AREA_RATIO", "DOUBLE", 10)
arcpy.CalculateField_management(out_fcs, "AREA_RATIO", '!shape.geodesicArea@meters!/!AREA_M!', "PYTHON_9.3")

# Next, multiply this ratio by the statistic(s) of interest. This will calculate the value of the statistic(s) for each intersect polygon.

# First, create a field(s) that will hold each new statistic.

# Set local variables.
calc_fields = arcpy.GetParameterAsText(5)
fieldList = calc_fields.split(";")
fieldList.sort()
field_type = "DOUBLE"
field_length = 10

for field in fieldList:
	arcpy.AddField_management(out_fcs, field + '_awr', field_type, field_length)
	
# Now, calculate the values for all five fields using the ratio created above and populate the fields created from the previous step.

awr_fields = []
awrList = arcpy.ListFields(out_fcs, "*_awr")
for field in awrList:
	awr_fields.append(field.name)
awr_fields.sort()
i = 0
for field in awr_fields:
	arcpy.CalculateField_management(out_fcs, awr_fields[i], '' + '!' + fieldList[i] + '!' + '*!AREA_RATIO!', "PYTHON_9.3")
	i += 1

# The last step in the AWR is to dissolve our intersected features along the boundaries of the new areal units. This will reaggregate our data by these new areal units.

# Define variables.

in_features = arcpy.GetParameterAsText(4)
out_features = arcpy.GetParameterAsText(6)
field_names = []
stat_fields = arcpy.ListFields(in_features, "*_awr")
stat_fields.sort()
for field in stat_fields:
	field_names.append(field.name)
statList = [str(field) + " SUM" for field in field_names]
dissolveStats = str("; ".join(statList))

# Run the Dissolve tool.

arcpy.Dissolve_management(in_features, out_features, dissolve_field, dissolveStats)
