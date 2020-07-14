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
  // const resultData = await result.json().then(res => res.planModals)
  // resultData.forEach(plan =>
  //   createNode({
  //     ...plan,
  //     id: createNodeId(`${PLAN_NODE_TYPE}-${plan.id}`),
  //     parent: null,
  //     children: [],
  //     internal: {
  //       type: PLAN_NODE_TYPE,
  //       content: JSON.stringify(plan),
  //       contentDigest: createContentDigest(plan),
  //     },
  //   })
  // )
  // return
}
