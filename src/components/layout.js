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
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
import "./layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false /* eslint-disable import/first */

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
      <div
        style={{
          maxWidth: 1540,
          margin: "auto",
        }}
      >
        <main>{children}</main>

        <footer className="my-6 text-sm px-3 lg:px-6 xl:px-10 mt-auto">
          <hr />
          <p className="mb-1">
            Made with <FontAwesomeIcon color="#f7b538" icon={faHeart} /> &
            <span>
              <Link
                className="text-yellow-600 hover:text-yellow-700"
                to="/uses"
              >
                &nbsp;various tech
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
