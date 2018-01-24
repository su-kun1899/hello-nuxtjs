import { mount } from 'vue-test-utils'
import Mikan from '../../components/Mikan'

// describeなくても書ける
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3)
})

// BDDっぽく
describe('Calc', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
  })
})

describe('Mikan', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Mikan)
  })

  test('name is みかん', () => {
    expect(wrapper.vm.name).toEqual('みかん')
  })

  test('price is 100', () => {
    expect(wrapper.vm.price).toEqual(100)
  })

  test('priceWithTax is 108', () => {
    expect(wrapper.vm.priceWithTax).toEqual(108)
  })
})

describe('3 Mikans', () => {
  const count = 3
  let wrapper

  beforeEach(() => {
    wrapper = mount(Mikan)
  })

  test('calcAmount is 300', () => {
    expect(wrapper.vm.calcAmount(count)).toEqual(300)
  })

  test('calcAmountWithTax is 300', () => {
    expect(wrapper.vm.calcAmountWithTax(count)).toEqual(324)
  })
})
