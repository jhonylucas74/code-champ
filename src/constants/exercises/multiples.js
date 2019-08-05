export default {
  title: 'Multiples',
  text: `
  # Multiples

  Read two nteger values (A and B). After, the program should print the message \`\`"Sao Multiplos"\`\` (are multiples) or \`\`"Nao sao Multiplos"\`\` (aren’t multiples), corresponding to the read values.

  ## Input

  The input has two integer numbers.

  ## Output

  Print the relative message to the input as stated above.
  `,
  tests: [
    { inputs: [6, 24], output: /Sao.*Multiplos/i },
    { inputs: [6, 25], output: /Nao.*sao.*Multiplos/i },
    { inputs: [7, 95], output: /Nao.*sao.*Multiplos/i },
  ]
}