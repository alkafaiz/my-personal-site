const project = require("./src/constants/projects")
const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  const projects = project.getAll()

  projects.forEach((project, index) =>
    createNode({
      ...project,
      image: {
        name: project.featuredImg.split(".")[0],
        ext: `.${project.featuredImg.split(".")[1]}`,
        // extension: project.featuredImg.split(".")[1],
        // absolutePath: path.resolve(
        //   `${__dirname}/src/images/${project.featuredImg}`
        // ),
        absolutePath:
          "D:/faiz/files/project/alkafaiz.com/source-code/src/images/SIMY-cover.jpg",
        extension: "jpg",
      },
      id: createNodeId(`project-${index}`),
      parent: null,
      children: [],
      internal: {
        type: "project",
        content: JSON.stringify(project),
        contentDigest: createContentDigest(project),
      },
    })
  )
  return
}
