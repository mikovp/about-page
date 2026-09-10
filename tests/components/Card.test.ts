import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '~/components/Card.vue'

describe('Card Component', () => {
  it('renders title correctly', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test Title',
        items: [],
        type: 'default'
      }
    })
    
    expect(wrapper.find('h2').text()).toBe('Test Title')
  })

  it('renders list items when type is list', () => {
    const items = ['Item 1', 'Item 2', 'Item 3']
    const wrapper = mount(Card, {
      props: {
        title: 'Test',
        items,
        type: 'list'
      }
    })
    
    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(3)
    expect(listItems[0]?.text()).toBe('Item 1')
  })

  it('renders slot content when type is not list', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test',
        items: [],
        type: 'default'
      },
      slots: {
        default: '<div class="custom-content">Custom Content</div>'
      }
    })
    
    expect(wrapper.find('.custom-content').exists()).toBe(true)
  })

  it('applies delay class when provided', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test',
        items: [],
        delay: 'delay-100'
      }
    })
    
    expect(wrapper.find('article').classes()).toContain('delay-100')
  })
})
