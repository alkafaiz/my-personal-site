import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectCard from "../components/projectCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "alkafaiz-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="leading-tight lg:mt-4 px-3 lg:px-6 xl:px-0">
        Hello! I’m Faiz Alkautsar <br /> I’m software developer based in Kuala
        Lumpur, Malaysia. I love CSS and front-end web development!
      </h1>
      <div className="px-3 lg:px-6 xl:px-0">
        {[
          { url: "https://www.linkedin.com/in/alkafaiz/", icon: faLinkedinIn },
          { url: "https://twitter.com/Alkafaiz", icon: faTwitter },
          { url: "https://www.instagram.com/alkafaiz/", icon: faInstagram },
          { url: "https://github.com/alkafaiz", icon: faGithub },
          { url: "https://dev.to/alkafaiz", icon: faDev },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="mr-4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        ))}
      </div>
      <div className="hidden">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <section className="mt-6 px-3 text-lg leading-8 lg:px-6 xl:px-0">
        <p>A true-born Indonesian</p>
        <p>
          Hello there! I'm a software engineer who is passionate about turning
          raw idea into beautiful, interactive, working product. I recently
          graduated from Asia Pacific University of Technology and Innovation
          majoring in Information Technology and Business Information Systems.
          I’m now pursuing career as Front-End Web Developer in Kuala Lumpur,
          Malaysia. My day-to-day stacks at work include CSS/SCSS, React, and
          Gatsby. However, I like to explore more cool stacks and tools that
          help me to build stuff.
        </p>
      </section>
      <h2 className="title flex items-center px-3 lg:px-6 xl:px-0">Projects</h2>
      <section className="p-3 lg:flex lg:flex-wrap lg:px-6 xl:px-0 xl:flex-no-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
