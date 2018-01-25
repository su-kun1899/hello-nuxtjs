import assert from 'assert'
import { mount } from 'vue-test-utils'
import Mikan from '../../components/Mikan'

// describeなくても書ける
test('adds 1 + 2 to equal 3', () => {
  assert(1 + 2 === 3)
})

// BDDっぽく
describe('Calc', () => {
  it('adds 1 + 2 to equal 3', () => {
    assert(1 + 2 === 3)
  })
})

describe('Mikan', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Mikan)
  })

  test('name is みかん', () => {
    assert(wrapper.vm.name === 'みかん')
  })

  test('price is 100', () => {
    assert(wrapper.vm.price === 100)
  })

  test('priceWithTax is 108', () => {
    assert(wrapper.vm.priceWithTax === 108)
  })
})

describe('3 Mikans', () => {
  const count = 3
  let wrapper

  beforeEach(() => {
    wrapper = mount(Mikan)
  })

  test('calcAmount is 300', () => {
    assert(wrapper.vm.calcAmount(count) === 300)
  })

  test('calcAmountWithTax is 300', () => {
    assert(wrapper.vm.calcAmountWithTax(count) === 324)
  })
})
