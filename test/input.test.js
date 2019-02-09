import test from 'ava'

import getInput from '../src/input.js'


test('Input: Empty Input', t => {
  const argv = ['/bin/node']
  const _input = []

  let input = getInput(argv)
  t.deepEqual(_input, input)
})

test('Input: No Message/Time Set', t => {
  const argv = ['/bin/node', '1']
  const _input = ['1']

  let input = getInput(argv)
  t.deepEqual(_input, input)
})

test('Input: Message set but no time', t => {
  const argv = ['/bin/node', 'Booth get a new corporate card']
  const _input = ['Booth', 'get', 'a', 'new', 'corporate', 'card']

  let input = getInput(argv)
  t.deepEqual(_input, input)
})

// test('Input: Message sent correctly')
// }



// empty Input

// specific command line options
