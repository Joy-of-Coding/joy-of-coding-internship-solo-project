import { render } from '@redwoodjs/testing/web'

import DetailPage from './DetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailPage />)
    }).not.toThrow()
  })
})
