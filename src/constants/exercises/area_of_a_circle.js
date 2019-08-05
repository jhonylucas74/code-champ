export default {
  title: 'Area of a Circle',
  text: `
  # Area of a Circle

  The formula to calculate the area of a circumference is defined as \`\`A = π . R²\`\`. Considering to this problem that \`\`π = 3.14159\`\`. Calculate the area using the formula given in the problem description.

  ## Input

  The input contains a value of floating point (double precision), that is the variable R.

  ## Output

  Present the message "A=" followed by the value of the variable, as in the example bellow, with \`\`four places after the decimal point\`\`. Use all double precision variables. Like all the problems, don't forget to print the end of line after the result, otherwise you will receive "Presentation Error".
  `,
  tests: [
    { inputs: [2.00], output: /A.*=.*12\.5664/ },
    { inputs: [100.64], output: /A.*=.*31819\.3103/ },
    { inputs: [150.00], output: /A.*=.*70685\.7750/ }
  ]
}