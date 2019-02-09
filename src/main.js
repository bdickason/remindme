
const chalk = require("chalk");
import getArgs from './args'

export default function main (argv) {
  // Input: Array of parameters via command line (process.argv)
  // Example: ['/blah/blah', 'internet']

  const input = getArgs(argv)

  if(input) {
    console.log(
      chalk.magenta('it works!')
    )
    return(input)
  }
  // Take Input
    // If no input - show message
    // If input:
      // Parse input for Reminder + Time
      // If no time, prompt for time
      // If time:
        // Set reminder in DB

}
