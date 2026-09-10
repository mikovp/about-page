import { describe, it, expect } from 'vitest'
import { WORK_ITEMS, WORKFLOW_ITEMS, TECH_STACK, SOCIAL_LINKS } from '~/constants/content'

describe('Constants', () => {
  it('exports work items array', () => {
    expect(WORK_ITEMS).toBeDefined()
    expect(Array.isArray(WORK_ITEMS)).toBe(true)
    expect(WORK_ITEMS.length).toBeGreaterThan(0)
  })

  it('work items have correct structure', () => {
    WORK_ITEMS.forEach(item => {
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('desc')
      expect(typeof item.title).toBe('string')
      expect(typeof item.desc).toBe('string')
    })
  })

  it('exports workflow items array', () => {
    expect(WORKFLOW_ITEMS).toBeDefined()
    expect(Array.isArray(WORKFLOW_ITEMS)).toBe(true)
    expect(WORKFLOW_ITEMS.length).toBeGreaterThan(0)
  })

  it('exports tech stack array', () => {
    expect(TECH_STACK).toBeDefined()
    expect(Array.isArray(TECH_STACK)).toBe(true)
    expect(TECH_STACK.length).toBeGreaterThan(0)
  })

  it('social links have correct structure', () => {
    expect(SOCIAL_LINKS.github).toHaveProperty('url')
    expect(SOCIAL_LINKS.github).toHaveProperty('title')
    expect(SOCIAL_LINKS.linkedin).toHaveProperty('url')
    expect(SOCIAL_LINKS.linkedin).toHaveProperty('title')
  })
})
