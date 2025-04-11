import type {
  DeletePostMutation,
  DeletePostMutationVariables,
  FindPosts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Post/PostsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_POST_MUTATION: TypedDocumentNode<
  DeletePostMutation,
  DeletePostMutationVariables
> = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostsList = ({
  posts,
  onSort,
  sortField,
  sortOrder,
}: FindPosts & {
  onSort?: (field: string) => void
  sortField?: string
  sortOrder?: 'asc' | 'desc'
}) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }
  const renderSortableHeader = (label: string, field: string) => (
    <th
      className="cursor-pointer text-blue-700 hover:underline"
      onClick={() => onSort?.(field)}
    >
      {label}{' '}
      {sortField === field && (sortOrder === 'asc' ? '▲' : '▼')}
    </th>
  )

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead className="text-blue-600 hover:underline">
          <tr className="text-blue-700">
            <th>Id</th>
            {renderSortableHeader('Task', 'task')}
            <th>Description</th>
            {renderSortableHeader('Due date', 'dueDate')}
            {renderSortableHeader('Category', 'category')}
            {renderSortableHeader('Status', 'status')}
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{truncate(post.id)}</td>
              <td>{truncate(post.task)}</td>
              <td>{truncate(post.description)}</td>
              <td>{timeTag(post.dueDate)}</td>
              <td>{truncate(post.category)}</td>
              <td>{truncate(post.status)}</td>
              <td>{timeTag(post.createdAt)}</td>
              <td>{timeTag(post.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete post ' + post.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsList
