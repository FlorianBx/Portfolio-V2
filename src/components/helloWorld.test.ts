import { describe, test, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/vue'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  test('increments value on click', async () => {
    render(HelloWorld)

    const button = screen.getByText('increment')

    await fireEvent.click(button)
    await fireEvent.click(button)

    const countValue = screen.getByText('24')

    expect(countValue.textContent).toBe('24')
  })
})
