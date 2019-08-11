import React from "react"
import { Link } from "gatsby"
import { Menu } from "react-feather"

import './style.scss'


export default function Layout( props ) {

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  return (

    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >

      <header className="site-header">
        <h1 className="site-title">
        <Link to={`/`}>
          TP.Co
        </Link>
        </h1>
        <button className="mobile-menu-toggle">
          <Menu />
        </button>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; { new Date().getFullYear() } Taylor Patrick Gorman</p>
      </footer>

    </div>

  )

}
