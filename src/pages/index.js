import React from "react"

import "./index.scss"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


export default function Index( props ) {

  const statements = [
    'Writing code and designing interfaces is less about building software and more about studying humans.',
    'Design isn’t just making things pretty, it’s knowing people so well that you put what they want where they expect it to be right when they need it.',
    'Start with familiar patterns, add cutting-edge trends, and end with software that gets out of the way so its user can get things done.',
  ]

  return (
  <Layout location={ props.location }>
    <SEO title="All posts" />

    <div className="statement">
    <p className="h2">
      { statements[Math.floor( Math.random() * statements.length )] }
    </p>
    </div>

  </Layout>
  )

}
