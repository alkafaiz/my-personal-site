import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stacks from "../constants/stacks"

const StackChip = ({ label }) => (
  <div
    className="py-1 px-2 mr-2 w-auto rounded text-white text-xs font-semibold"
    style={{
      backgroundColor: stacks.find(stack => stack.name === label).color,
    }}
  >
    {label}
  </div>
)

export default function ProjectCard() {
  const data = useStaticQuery(graphql`
    query {
      SIMY: file(relativePath: { eq: "SIMY-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="w-full border border-gray-500 rounded-lg overflow-hidden pb-3 mb-4 md:pb-5 lg:w-5/12 lg:mr-4 xl:w-4/12">
      <div className="w-full">
        <Img fluid={data.SIMY.childImageSharp.fluid} />
      </div>
      <h4 className="text-lg px-3 mt-3 md:px-5 md:mt-5">
        ATTENDANCE INFORMATION SYSTEM FOR INTERNATIONAL SYMPOSIUM 2019
      </h4>
      <p className="px-3 text-gray-600 md:px-5 xl:text-sm">
        Specialized native windows application built for International Symposium
        OISAA 2019 Johor Bahru Malaysia. This application has successfully
        reduced participant registering time up to 80%.
      </p>
      <div className="px-3 md:px-5 flex items-start flex-wrap">
        <StackChip label="Azure SQL" />
        <StackChip label="C#" />
      </div>
    </div>
  )
}
