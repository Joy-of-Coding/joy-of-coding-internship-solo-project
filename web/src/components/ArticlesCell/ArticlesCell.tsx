import type { ArticlesQuery } from 'types/graphql'
import { Link, routes } from '@redwoodjs/router'
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

export const Loading = () => <div className="text-gray-500">Loading...</div>

export const Empty = () => <div className="text-gray-500">No articles found.</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="text-red-500 font-bold">Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <div className="space-y-6 p-4">
      {articles.map((article) => (
        <article key={article.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <header className="mb-2 border-b pb-2">
            <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              <Link to={routes.detail({ id: article.id })}>{article.task}</Link>
            </h2>
          </header>
          <p className="text-gray-700 mb-2">{article.description}</p>
          <div className="text-sm text-gray-500">Posted at: {article.dueDate}</div>
        </article>
      ))}
    </div>
  )
}
