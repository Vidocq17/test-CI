import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  test('Hello World', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Hello World')
  })
})
