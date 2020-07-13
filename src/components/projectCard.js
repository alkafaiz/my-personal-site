import React from "react"

const StackChip = ({ label }) => (
  <div className="py-1 px-2 mr-2 w-auto rounded bg-blue-200">{label}</div>
)

export default function ProjectCard() {
  return (
    <div className="w-full border border-gray-500 rounded-lg p-3">
      <div></div>
      <h4 className="text-lg">
        ATTENDANCE INFORMATION SYSTEM FOR INTERNATIONAL SYMPOSIUM 2019
      </h4>
      <p>
        Specialized native windows application built for International Symposium
        OISAA 2019 Johor Bahru Malaysia. This application has successfully
        reduced participant registering time up to 80%.
      </p>
      <div className="flex items-start flex-wrap">
        <StackChip label="Azure SQL" />
        <StackChip label="C#" />
      </div>
    </div>
  )
}
