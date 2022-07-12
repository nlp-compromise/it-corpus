import test from 'tape'
import corpus from '../src/index.js'
import hash from './_hash.js'

let all = corpus.all()

test('smoke-test', function (t) {
  t.ok(all.length > 99990, 'total-sum')

  let dupes = []
  let already = {}
  all.forEach(a => {
    let str = a[1]
    let h = hash(str)
    if (already[h]) {
      dupes.push(str)
    }
    already[h] = true
  })
  if (dupes.length) {
    console.log(dupes)
  }
  t.equal(dupes.length, 0, 'no-dupes')
  t.end()
})


test('length-test', function (t) {
  all.forEach(a => {
    let str = a[0]
    if (str.length < 5) {
      // t.fail('min-length - \'' + str + '\'')
    } else if (str.length > 800) {
      t.fail('max-length - \'' + str + '\'')
    } else {
      t.pass(true)
    }

  })
  t.end()
})