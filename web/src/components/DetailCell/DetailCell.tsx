import type { FindDetailQuery, FindDetailQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindDetailQuery,
  FindDetailQueryVariables
> = gql`
  query FindDetailQuery($id: Int!) {
    detail: post(id: $id) {
      id
      task
      description
      dueDate
      category
      status
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDetailQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
export const Success = ({
  detail,
}: CellSuccessProps<FindDetailQuery, FindDetailQueryVariables>) => {
  return (
    <article
      key={detail.id}
      className="container mx-auto px-6 md:px-12 lg:px-24 bg-white shadow-md rounded-lg border border-gray-300 p-6"
    >
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-center text-gray-900">{detail.task}</h2>
      </header>
      <p className="text-gray-700">{detail.description}</p>
      <div className="mt-4 text-gray-600">
        <div><strong>Date due:</strong> {detail.dueDate}</div>
        <div><strong>Category:</strong> {detail.category}</div>
        <div><strong>Created on:</strong> {detail.createdAt}</div>
        <div><strong>Updated on:</strong> {detail.updatedAt}</div>
      </div>
    </article>
  )
}
