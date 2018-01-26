import assert from 'assert'
import { mount } from 'vue-test-utils'
import Name from '../../components/Name'

describe('Name', () => {
  let nameWrapper

  beforeEach(() => {
    nameWrapper = mount(Name)
  })

  describe('初期表示', () => {
    it('has empty name', () => {
      assert(nameWrapper.vm.name === '')
    })

    it('is invalid', () => {
      assert(nameWrapper.vm.isValid === false)
    })

    it('renders message', () => {
      assert.ok(nameWrapper.contains('p#message'))
    })
  })

  describe('Taro', () => {
    beforeEach(() => {
      nameWrapper.vm.name = 'Taro'
    })

    it('renders name', () => {
      assert.equal(nameWrapper.find('p#name').text(), '名前: Taro')
    })

    it("doesn't render message", () => {
      assert(nameWrapper.contains('p#message') !== false)
    })
  })
})
