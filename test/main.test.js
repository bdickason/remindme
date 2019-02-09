import test from 'ava'

import main from '../src/main.js'

test('main', t => {
  const _input = ['/bin/node', '1']

  let args = main(_input)
  t.deepEqual(['1'], args)
})
