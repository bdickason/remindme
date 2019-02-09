/* input.js - Process input (from command line, text, etc) and return a message and a time

Input: `['/usrc/bin/file.js', '2d Tell Mike Booth to renew his card']`
Output:
`{
  message: 'Tell Mike Booth to renew his card',
  time: '2d'
}`
*/

export function getInput(argv) {
  // Parse user input
  const rawInput = parseArgs(argv)

  if(!rawInput) {
    return null
  } else {
    const input = parseInput(rawInput)
    return input
  }
}

export function parseArgs(argv) {
  /* Parse user input and split into array for processing
  Expected Input: ['/usr/bin/file.js', 'messages go here and stuff']
  Expected Output: ['messages go here and stuff'] (or null if empty)
  */
  // Remove app dir/name (always first paraameter)

  let input = argv.slice(2)

  // Check if user inputted anything
  if(input.length == 0 ) {
    input = null
  } else {
    // Split remaining parameters into array
    input = input[0].split(' ')
  }

  return input
}

export function parseInput(rawInput) {
  return(rawInput)
}

export default {getInput, parseArgs, parseInput}
