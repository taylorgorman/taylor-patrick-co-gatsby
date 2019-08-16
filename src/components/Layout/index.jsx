import React from "react"
import { Link } from "gatsby"
import { Menu } from "react-feather"

import './style.scss'


function cssWindowHeight() {
  console.log('cssWindowHeight()')
  if ( typeof window !== 'undefined' && typeof document !== 'undefined' )
    document.documentElement.style.setProperty('--windowInnerHeight', `${window.innerHeight}px`);
}
cssWindowHeight()

export default function Layout( props ) {

  return (

  <div className="layout">

    <header className="site-header">
      <div>
        <h1 className="site-title">
        <Link to={`/`}>
          TP.Co
        </Link>
        </h1>
      </div>
      <nav className="site-nav">
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <button className="mobile-menu-toggle hidden-md-up">
        <Menu />
      </button>
    </header>

    <main>

      <div className="site-content">
        { props.children }
      </div>

      <footer className="site-footer">
        &copy; { new Date().getFullYear() } Taylor Patrick Gorman
      </footer>

    </main>

  </div>

  )

}
