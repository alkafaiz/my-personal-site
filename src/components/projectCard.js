import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StackChip = ({ color, label }) => (
  <div
    className="py-1 px-2 mr-2 w-auto rounded text-white text-xs font-semibold"
    style={{
      backgroundColor: color,
    }}
  >
    {label}
  </div>
)

export default function ProjectCard({
  coverFluid,
  title,
  excerpt,
  chips,
  slug,
}) {
  return (
    <div className="w-full border border-gray-500 rounded-lg overflow-hidden pb-3 md:w-5/12 mb-4 md:pb-5 md:mr-4 lg:w-5/12 xl:w-4/12">
      <Link to={`/projects/${slug}`}>
        <div className="w-full">
          <Img fluid={coverFluid} />
        </div>
        <h4 className="text-lg px-3 mt-3 md:px-5 md:mt-5">{title}</h4>
        <p className="px-3 text-gray-600 md:px-5 xl:text-sm">{excerpt}</p>
        <div className="px-3 md:px-5 flex items-start flex-wrap">
          {chips.map((stack, index) => (
            <StackChip key={index} color={stack.color} label={stack.label} />
          ))}
        </div>
      </Link>
    </div>
  )
}
