import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LayoutProject from "../../components/layoutProject"

const ProjectPage = () => {
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
    <LayoutProject
      title="Attendance Information System for OISAA International Symposium Malaysia 2019"
      github="https://github.com/alkafaiz/SIMY19Checkin"
      image={data.SIMY.childImageSharp.fluid}
      section={() => (
        <>
          <div>
            <Img fluid={data.SIMY.childImageSharp.fluid} />
          </div>

          <br />

          <p className="text-sm">
            A software project for 11th OISAA International Symposium Malaysia
            2019. This native windows application has a main purpose to help
            Liason Officers and Public Relation team to store, manage, and
            monitor participants data across team members. It has two
            interfaces; admin portal; and participant self-checkin. An
            executable program can be installed in multiple device and it is
            connected to Azure SQL database.
          </p>
          <p className="text-sm">
            This system has helped the team to identify participants with
            unsettled problem and successfully reduced registering time up to 80
            percent.
          </p>
          <br />

          <h4>Tech stacks</h4>

          <table>
            <tbody className="text-sm">
              <tr>
                <th>Stack</th>
                <th>Name</th>
              </tr>
              <tr>
                <td>Framework</td>
                <td>.NET framework 4.5</td>
              </tr>
              <tr>
                <td>Programming Language</td>
                <td>C#</td>
              </tr>
              <tr>
                <td>Database</td>
                <td>Azure SQL</td>
              </tr>
              <tr>
                <td>IDE</td>
                <td>Microsoft Visual Studio 2015</td>
              </tr>
            </tbody>
          </table>

          <br />
          <h4>System features</h4>
          <ul className="text-sm list-disc">
            <li>User authentication and role-based access</li>
            <li>Import participant data from excel sheet and CSV file</li>
            <li>Search participant by name, university</li>
            <li>Portal and Check-in interface</li>
            <li>Generate report</li>
            <li>Create agenda session</li>
            <li>Admin can revoke session access</li>
          </ul>
        </>
      )}
    />
  )
}

export default ProjectPage
