import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'


import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
    <header>
      <h1
        className="text-xl font-bold text-gray-900 text-center">Personal Task List
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

      <Metadata title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
