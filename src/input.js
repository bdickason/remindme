/* input.js - Process input (from command line, text, etc) and return a message and a time

Expected Format:
./remindme 2d Tell Mike Booth to renew his card */

export default function getInput(argv) {

  // Remove app dir/name (always first paraameter)
  let input = argv.slice(1)

  // Check if user inputted anything
  if(input.length > 0) {
    // Split remaining parameters into array
    input = input[0].split(' ')


  }



  // Iteraet through array until we find a time
  // Store time + store remainder as message

  return input  // Remove app dir/name
}
