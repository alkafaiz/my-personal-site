import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="lg:w-full lg:flex lg:justify-start lg:my-16 lg:px-3">
        <div className="lg:w-1/3">
          <h2 className="title px-3">Contact</h2>
        </div>
        <section className="px-3 text-base leading-7 lg:w-1/2">
          <p>Let's connect! I'd love getting to know you.</p>

          {[
            {
              url: "https://www.linkedin.com/in/alkafaiz/",
              icon: faLinkedinIn,
            },
            { url: "https://twitter.com/Alkafaiz", icon: faTwitter },
            { url: "https://www.instagram.com/alkafaiz/", icon: faInstagram },
            { url: "https://github.com/alkafaiz", icon: faGithub },
            { url: "https://dev.to/alkafaiz", icon: faDev },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="mr-4"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hover:text-yellow-400 transition duration-300 ease-in-out"
                icon={social.icon}
                size="2x"
              />
            </a>
          ))}
          <p className="mt-4">
            Or else you want to leave me ideas to collaborate, or simply want to
            say hello, please do so!
          </p>
          <form
            className="md:w-2/3"
            name="contact"
            method="POST"
            data-netlify="true"
            action="/submit-message-success"
          >
            <input
              name="email"
              className="border border-gray-400 w-full p-2 rounded-lg"
              type="email"
              placeholder="Your email"
              required
            ></input>
            <textarea
              name="message"
              className="border border-gray-400 w-full p-2 rounded-lg my-3"
              type="text"
              placeholder="What do you have in mind?"
              required
            ></textarea>
            <button
              className="bg-black hover:bg-yellow-400 hover:text-black transition duration-500 ease-in-out rounded w-full text-white p-1 md:w-auto md:px-4 "
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage
