import {Link, routes} from '@redwoodjs/router'
import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      task
      description
      dueDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <header>
            <h2><Link to={routes.detail({id: article.id})}>{article.task}</Link></h2>
          </header>
          <p>{article.description}</p>
          <div>Posted at: {article.dueDate}</div>
        </article>
        //return <li key={item.id}>{JSON.stringify(item)}</li
      ))}
    </>
  )
}
