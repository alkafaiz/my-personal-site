import React from "react"
import SEO from "./seo"

const LayoutProject = ({ title, github, section, image }) => (
  <>
    <SEO title={title} image={image} />

    <div className="p-5 w-auto m-0 lg:w-2/3 mx-auto lg:py-16">
      <header className="lg:w-3/12 lg:float-left lg:fixed">
        <h3>{title}</h3>
        <div className="text-sm">
          <p>A Project</p>
          <p>
            <a className="text-yellow-600 hover:text-yellow-700" href={github}>
              View the Project on GitHub
              <br />{" "}
              <small className="text-gray-600">{`${
                github.split("https://github.com/")[1]
              }`}</small>
            </a>
          </p>
        </div>
      </header>
      <section className="py-5 mb-6 border-t border-b lg:border-0 lg:mb-0 lg:w-7/12 lg:float-right lg:pt-0 lg:pb-8">
        {section()}
      </section>
      <footer
        className=" lg:w-3/12 lg:float-left lg:fixed text-sm"
        style={{ bottom: 50 }}
      >
        <p>
          This project is maintained by{" "}
          <a
            href="http://github.com/alkafaiz"
            className="text-yellow-600 hover:text-yellow-700"
          >
            Faiz Alkautsar
          </a>
        </p>
        <p>
          <small>
            Hosted on Netlify &mdash; Theme by{" "}
            <a
              href="https://github.com/orderedlist"
              className="text-yellow-600 hover:text-yellow-700"
            >
              orderedlist
            </a>
          </small>
        </p>
      </footer>
    </div>
  </>
)

export default LayoutProject
