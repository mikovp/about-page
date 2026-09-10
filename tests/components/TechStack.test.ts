import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TechStack from '~/components/TechStack.vue'

describe('TechStack Component', () => {
  it('renders all tech items', () => {
    const techs = ['TypeScript', 'Vue.js', 'Nuxt']
    const wrapper = mount(TechStack, {
      props: { techs }
    })
    
    const items = wrapper.findAll('[role="listitem"]')
    expect(items).toHaveLength(3)
  })

  it('displays correct tech names', () => {
    const techs = ['TypeScript', 'Vue.js']
    const wrapper = mount(TechStack, {
      props: { techs }
    })
    
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Vue.js')
  })
})
