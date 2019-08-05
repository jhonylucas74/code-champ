export default {
  title: 'Consumption',
  text: `
  # Consumption

  Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

  ## Input

  The input file contains two values: one integer value X representing the total distance (in Km) and the second one is a floating point number Y  representing the spent fuel total, with a digit after the decimal point.

  ## Output

  Present a value that represents the average consumption of a car with 3 digits after the decimal point, followed by the message "km/l".
  `,
  tests: [
    { inputs: [500, 35.0], output: /14\.286.*km\/l/ },
    { inputs: [2254, 124.4], output: /18\.119.*km\/l/ },
    { inputs: [4554, 464.6], output: /9\.802.*km\/l/ },
  ]
}