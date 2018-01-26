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
      // const message = nameWrapper.find('p#message')
      // assert.equal(message.html(), 'hogehoge')
    })
  })
})
