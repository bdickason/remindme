
const chalk = require("chalk");
import getInput from './input'

export default function main () {
  // Input: Array of parameters via command line (process.argv)
  // Example: ['/blah/blah', 'internet']

  const input = getInput(process,argv)

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
