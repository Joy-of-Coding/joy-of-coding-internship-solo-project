import { Metadata } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
    <header>
      <h1>
        <Link to={routes.home()}>Personal Task List</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home   </Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
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
