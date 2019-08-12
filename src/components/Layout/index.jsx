import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { Menu } from "react-feather"

import './style.scss'


export default function Layout( props ) {

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  return (

    <Container>

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

      <footer className="site-footer">
        <p>&copy; { new Date().getFullYear() } Taylor Patrick Gorman</p>
      </footer>

    </Container>

  )

}
