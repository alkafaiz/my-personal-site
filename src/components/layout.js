/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "typeface-poppins"

import Header from "./header"
import "./layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ maxWidth: 1540, margin: "auto" }}>
        <main>{children}</main>
        <hr />
        <footer className="my-6 text-sm px-3 lg:px-6 xl:px-10">
          <p className="mb-1">
            Made with <FontAwesomeIcon color="#f7b538" icon={faHeart} /> &
            <span>
              <Link className="font-bold" to="/">
                various tech
              </Link>
            </span>{" "}
            in Jakarta, Indonesia
          </p>
          © Faiz Alkautsar {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
