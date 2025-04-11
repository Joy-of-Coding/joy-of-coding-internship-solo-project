import { Link, routes } from '@redwoodjs/router'

import PostsCell from 'src/components/Post/PostsCell'

const PostsPage = () => {
  return (
    <>
  <header>
  <h1
    className="text-xl font-bold text-gray-900 text-center">
  </h1>
  <nav className="bg-gray-100 p-4">
    <ul className="flex gap-4">
      <li>
        <Link to={routes.home()} className="text-blue-600 font-bold hover:text-blue-800">Home   </Link>
      </li>
      <li>
        <Link to={routes.about()}className="text-blue-600 font-bold hover:text-blue-800"> About</Link>
      </li>
      <li>
        <Link to={routes.posts()} className="text-blue-600 font-bold hover:text-blue-800">Manage   </Link>
      </li>
      <li>
          <Link to={routes.contact()} className="text-blue-600 font-bold hover:text-blue-800 text-right">Contact</Link>
        </li>
    </ul>
  </nav>
</header>
<PostsCell />
</>
  )
}

export default PostsPage
