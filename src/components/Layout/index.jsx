import React from "react"
import { Link } from "gatsby"
import { Menu } from "react-feather"

import './style.scss'
import { rhythm, scale } from "../../utils/typography"
import Header from "../../components/Header"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >

        <Header />
        <main>{children}</main>

        <footer>
          <p>&copy; { new Date().getFullYear() } Taylor Patrick Gorman</p>
        </footer>

      </div>
    )
  }
}

export default Layout
