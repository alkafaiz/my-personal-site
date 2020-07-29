import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LayoutProject from "../../components/layoutProject"
import catalystDemo from "../../images/catalyst-demo.gif"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      catalyst: file(relativePath: { eq: "catalyst-cover.jpg" }) {
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
      title="CATALYST: SME-specialized POS System with Business Intelligence"
      github="https://github.com/alkafaiz/Catalyst-POS"
      section={() => (
        <>
          <div>
            <Img fluid={data.catalyst.childImageSharp.fluid} />
          </div>

          <br />

          <p className="text-sm">
            Catalyst Point-of-sales (POS) system has aim to foster the growth of
            Small and Medium Enterprise (SME) in Indonesia. This program is
            integrated with Microsoft Power Business Intelligence.
          </p>
          <p className="text-sm">
            Integrating the system with Power BI is very useful for intended
            users because it gives real data visualization of the captured
            modelled data. With this data visualization feature, users will be
            presented straight-forward information that hopefully can help
            business owners to formulate strategies to grow the business.
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
                <td>SQL Server 2014</td>
              </tr>
              <tr>
                <td>IDE</td>
                <td>Microsoft Visual Studio 2015</td>
              </tr>
              <tr>
                <td>Data Analytics Tool</td>
                <td>Microsoft Power BI</td>
              </tr>
            </tbody>
          </table>

          <br />
          <h4>Demo</h4>
          <img src={catalystDemo} alt="Catalyst app demo" />

          <br />
          <h4>System features</h4>
          <ul className="text-sm list-disc">
            <li>Concise and beautiful updated data visualization</li>
            <li>User authentication and role-based access</li>
            <li>Add, edit, delete product</li>
            <li>Add, edit, delete order</li>
            <li>Add, edit, and delete customer</li>
            <li>Generate report</li>
            <li>Auto sync and upload database to Power BI</li>
          </ul>
        </>
      )}
    />
  )
}

export default ProjectPage
