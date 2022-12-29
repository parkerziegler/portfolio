interface Place {
  label: string;
  cx: number;
  cy: number;
  x: number;
  y: number;
}

export const places: Place[] = [
  { label: 'Now – Berkeley, CA', cx: 40, cy: 255, x: 45, y: 240 },
  { label: 'Previously – Seattle, WA', cx: 100, cy: 40, x: 105, y: 25 },
  {
    label: 'Birthplace – Salt Lake City, UT',
    cx: 225,
    cy: 235,
    x: 230,
    y: 220
  },
  { label: 'School – Middlebury, VT', cx: 855, cy: 130, x: 720, y: 105 },
  { label: 'Home – Northampton, MA', cx: 870, cy: 170, x: 760, y: 205 }
];
