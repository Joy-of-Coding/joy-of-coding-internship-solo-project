import type { Meta, StoryObj } from '@storybook/react'

import DetailPage from './DetailPage'

const meta: Meta<typeof DetailPage> = {
  component: DetailPage,
}

export default meta

type Story = StoryObj<typeof DetailPage>

export const Primary: Story = {}
