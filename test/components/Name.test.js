import assert from 'assert'
import { mount } from 'vue-test-utils'
import Name from '../../components/Name'

describe('Name', () => {
  describe('初期表示', () => {
    const nameWrapper = mount(Name)

    it('has empty name', () => {
      assert(nameWrapper.vm.name === '')
    })

    it('is invalid', () => {
      assert(nameWrapper.vm.isValid === false)
    })

    it('renders message', () => {
      assert.ok(nameWrapper.contains('p#message'))
    })

    it('applies error class', () => {
      const classes = nameWrapper.find('div').classes()
      assert.equal(classes.length, 1)
      assert.equal(classes[0], 'error')
    })

    it('applies border style', () => {
      const rootDiv = nameWrapper.find('div')
      assert.ok(rootDiv.hasStyle('border', '1px solid red'))
    })
  })

  describe('Taro', () => {
    const nameWrapper = mount(Name)

    beforeEach(() => {
      nameWrapper.vm.name = 'Taro'
    })

    it('is valid', () => {
      assert.ok(nameWrapper.vm.isValid)
    })

    it('renders name', () => {
      assert.equal(nameWrapper.find('p#name').text(), '名前: Taro')
    })

    it("doesn't show message", () => {
      assert.ok(nameWrapper.find('p#message').hasStyle('display', 'none'))
    })

    it('remove error class', () => {
      assert.equal(nameWrapper.find('div').classes().length, 0)
    })

    it('remove border style', () => {
      const rootDiv = nameWrapper.find('div')
      assert.equal(rootDiv.hasStyle('border', '1px'), false)
    })
  })
})
