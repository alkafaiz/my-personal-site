import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "alkafaiz-cover-1.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600, maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div className="lg:w-full lg:flex lg:justify-start lg:my-16 lg:px-3">
        <div className="lg:w-1/3">
          <h2 className="title px-3">About</h2>
          {typeof window !== "undefined"
            ? window.innerWidth >= 1024 && (
                <div className="w-10/12">
                  <Img
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    className="filter-grey"
                  />
                </div>
              )
            : ""}
        </div>
        <section className="px-3 text-base leading-7 lg:w-1/2">
          <p>
            Hey! It’s Faiz. First of all, I’d like to appreciate you for taking
            time and reading this personal site. It's such a pleasure to have
            you here!
          </p>
          <p>
            A couple of words about my professional life: I am an Indonesian
            software engineer from Surabaya but working in Kuala Lumpur
            Malaysia. I graduated from university with a Bachelor Degree of
            Science in Information Technology in 2019. I have decent sense of
            how usable UI should look like, which leads me to work as Front-end
            engineer. I get fascinated by why products work, or doesnt.
          </p>
          <p>
            <span className="font-bold">Life-time student</span>
            <br />I enjoy learning, analyzing, figuring out new things. I
            allocate dedicated amount of time and effort to improve myself by
            taking online courses, reading blogs and articles, attending
            community events, or sometimes just spending all night coding.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
