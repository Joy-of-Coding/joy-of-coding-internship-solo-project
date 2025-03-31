import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import DetailCell from 'src/components/DetailCell'

const DetailPage = ({ id }) => {
  return (
    <>
      <nav className="bg-gray-100 p-4">
        <ul className="flex gap-4">
          <li>
            <Link to={routes.home()} className="text-blue-600 font-bold hover:text-blue-800">Home</Link>
          </li>
          <li>
            <Link to={routes.about()} className="text-blue-600 font-bold hover:text-blue-800">About</Link>
          </li>
          <li>
            <Link to={routes.posts()} className="text-blue-600 font-bold hover:text-blue-800">Manage</Link>
          </li>
          <li>
            <Link to={routes.contact()} className="text-blue-600 font-bold hover:text-blue-800 text-right">Contact</Link>
          </li>
        </ul>
      </nav>

      <Metadata title="Detail" description="Detail page" />

      <div>
        <h1>DetailPage ID: {id}</h1>
        <p>
          You can find me doing
          <code>
            <DetailCell id={id} />
          </code>
        </p>
      </div>
    </>
  )
}

export default DetailPage
