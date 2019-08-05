export default {
  title: 'Lowest Number and Position',
  text: `
  # Lowest Number and Position

  Write a program that reads a number N. This N is the size of a array X[N]. Next, read each of the numbers of X, find the smallest element of this array and its position within the array, printing this information.

  ## Input

  The first line of input contains one integer N (1 < N <1000), indicating the number of elements that should be read to an array X[N] of integer numbers. The second row contains each of the N values, separated by a space.

  ## Output

  Displays the message “Menor valor:” followed by a space and the lowest number read in the input. Then displays the message “Posicao:” followed by a space and the array position in which the lowest number is, remembering that the array starts at the zero position.
  Example: \`\`Menor valor: -5 Posicao: 4\`\`
  `,
  tests: [
    { inputs: [10, '1 2 3 4 -5 6 7 8 9 10'], output: /Menor.*valor:.*-5.*Posicao:.*4/i },
    { inputs: [7, '6 8 1 20 6 7 4'], output: /Menor.*valor:.*1.*Posicao:.*2/i },
    { inputs: [3, '2 7 4'], output: /Menor.*valor:.*2.*Posicao:.*0/i },
  ]
}