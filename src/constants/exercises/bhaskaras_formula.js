export default {
  title: 'Bhaskara\'s Formula',
  text: `
  # Bhaskara's Formula

  Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

  ## Input

  Read 3 floating-point numbers A, B and C.

  ## Output

  Print the result with 5 digits after the decimal point or the message if it is impossible to calculate. Example output: R1= 1.0, R2= 2.0.
  `,
  tests: [
    { inputs: [10.0, 20.1, 5.1], output: /R1.*=.*-0\.29788.*\,.*R2.*=.*-1\.71212/ },
    { inputs: [0.0, 20.0, 5.0], output: /Impossivel.*calcular/i },
    { inputs: [10.3, 203.0, 5.0], output: /R1.*=.*-0\.02466.*\,.*R2.*=.*-19\.68408/ },
  ]
}