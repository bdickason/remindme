/* remindme.js - Simple reminders as a service

Usage: `./remindme 2d Tell Mike Booth to renew his card`
*/

const chalk = require("chalk");
import {getInput} from './input'

export default function main () {
  // Input: Array of parameters via command line (process.argv)
  // Example: ['/blah/blah', 'internet']

  const input = getInput(process.argv)

  if(input) {
    console.log(
      chalk.magenta('Ok brah, reminding you to: ' + input)
    )
  } else {
    console.log(
      chalk.cyan('You didn\'t input anything, yo')
    )
  }

  // Iterate through array until we find a time
  // Store time + store remainder as message

  // Take Input
    // If no input - show message
    // If input:
      // Parse input for Reminder + Time
      // If no time, prompt for time
      // If time:
        // Set reminder in DB

}
