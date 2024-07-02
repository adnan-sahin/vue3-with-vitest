import axios from 'axios'
import PostCard from '../PostCard.vue'

import { mount, flushPromises } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'

const mockPost = {
  userId: 1,
  id: 1,
  title: 'Post title test',
  body: 'Post body test'
}

describe('PostCard Component', () => {
  test('can fetch and display a post', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockPost })

    const wrapper = mount(PostCard)

    expect(wrapper.html()).toContain('Loading...')

    await flushPromises()

    // new
    // expect(wrapper.find('[data-testid="post-title"]').text()).toBe(mockPost.title)

    // expect(wrapper.find('[data-testid="post-body"]').text()).toBe(mockPost.body)
  })
  test('can display an error message if fetching a post fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error occurred'))

    const wrapper = mount(PostCard)

    expect(wrapper.html()).toContain('Loading...')

    await flushPromises()

    // expect(wrapper.find('[data-testid="error-message"]').text()).toBe('Error occurred')
  })
})
