import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const UsesPage = () => {
  function stackShareInitialize() {
    var embeds = document.querySelectorAll("[data-stack-embed='true']")

    for (var i = 0, embed; (embed = embeds[i]); i++) {
      if (embed != undefined) {
        var element = document.createElement("iframe")
        var div = document.createElement("div")
        var theme = embed.getAttribute("data-theme")
        var layers = embed.getAttribute("data-layers")
        var hrefSplit = embed.href.split("/")
        var embedCode = hrefSplit[5]

        div.setAttribute("class", "embed-container")
        div.style = " overflow: hidden; position: relative;"
        element.async = 1
        element.src = embed.href + "?theme=" + theme + "&layers=" + layers
        element.width = "100%"
        element.height = 0
        element.style.border = 0
        element.setAttribute("data-embed-code", embedCode)
        element.style = "border-width: 0; position: inherit;"
        div.appendChild(element)
        embed.parentNode.insertBefore(div, embed)

        embed.style.display = "none"
      }
    }

    function receiveHeight(event) {
      if (event.data["origin"] == "stackshare") {
        var embedCode = event.data["embedCode"]

        var embeds = document.querySelectorAll("[data-stack-embed='true']")
        for (var i = 0, embed; (embed = embeds[i]); i++) {
          var url = embed.href
          var strings = url.split("/")
          if (strings[5] == embedCode) {
            var iframe = document.querySelectorAll(
              "iframe[data-embed-code='" + embedCode + "']"
            )[0]
            iframe.height = event.data["embedHeight"]
          }
        }
      }
    }

    if (window.addEventListener) {
      window.addEventListener("message", receiveHeight, false)
    } else {
      window.attachEvent("onmessage", receiveHeight)
    }
  }

  useEffect(() => {
    stackShareInitialize()
  }, [])

  return (
    <Layout>
      <SEO title="Uses" />

      <div className="lg:w-full lg:flex lg:justify-start lg:my-16 lg:px-3">
        <div className="lg:w-1/3">
          <h2 className="title px-3">Uses</h2>
        </div>
        <section className="px-3 text-base leading-7 lg:w-1/2">
          <p>
            These are the stacks and tools that help me in turning good-looking
            wireframe into fully functional product. I may prefer some stacks
            over the other, but having a try on something new wont hurt right?
          </p>
          <p>
            For the moment, my go-to stacks is React and Firebase. I find React
            is very important to be in my toolbox as a Front-End Developer.
            Plus, It is very popular in the community and alot of new
            technologies are integrated or backed by React (Eg. Gatsby; this one
            is also my favorite, in fact now you're on Gatsby site).
          </p>
          <p>
            These are the rest of the stacks and tools that I'm familiar with.
          </p>
          <a
            frameborder="0"
            data-theme="light"
            data-layers="1,2,3,4"
            data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/046be8553d225a7ec8b3cfe972eb32"
          ></a>
        </section>
      </div>
    </Layout>
  )
}

export default UsesPage
