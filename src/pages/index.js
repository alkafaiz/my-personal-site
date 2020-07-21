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
      <h1 className="mx-auto leading-tight px-3 lg:mt-4 lg:px-6 xl:px-10 xl:mt-8">
        Hello! I’m Faiz Alkautsar <br /> I’m software engineer based in Kuala
        Lumpur, Malaysia. I love CSS and front-end web development!
      </h1>
      <div className="px-3 lg:px-6 xl:px-10">
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
      <div className="my-6 md:my-10 lg:my-16 flex">
        <div className="hidden lg:block w-1/2">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <section className="mt-6 px-3 text-base leading-7 lg:px-6 lg:px-0 lg:w-1/2 lg:pl-12 lg:pr-20 xl:pr-40">
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
      </div>
      <h2 className="title flex items-center px-3 lg:px-6 xl:px-10">
        Projects
      </h2>
      <section className="p-3 lg:flex lg:flex-wrap lg:px-6 xl:px-10 xl:flex-no-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>

      <p className="px-3 text-center lg:my-32">
        Interested in collaborating?{" "}
        <span>
          {window.innerWidth <= 768 && <br />}
          <Link className="font-bold" to="/contact/">
            Send me a message
          </Link>
        </span>
      </p>
      <br />
    </Layout>
  )
}

export default IndexPage
