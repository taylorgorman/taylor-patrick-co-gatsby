import React from "react"
import { Link } from "gatsby"
import { Menu } from "react-feather"


export default function Header() {

  return (

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

  )

}
