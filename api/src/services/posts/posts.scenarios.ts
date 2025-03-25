import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        task: 'String',
        description: 'String',
        category: 'String',
        status: 'String',
        updatedAt: '2025-03-12T04:50:14.716Z',
      },
    },
    two: {
      data: {
        task: 'String',
        description: 'String',
        category: 'String',
        status: 'String',
        updatedAt: '2025-03-12T04:50:14.716Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
