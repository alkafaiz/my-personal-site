import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

export default function SubmitMessageSuccessPage() {
  return (
    <>
      <SEO title="Message sent" />
      <div className="w-full">
        <div className="border p-3 rounded-lg border-gray-400 mx-3 mt-10 text-center md:w-1/2 md:mx-auto lg:w-1/3 lg:mt-32">
          <h3>Sent!</h3>
          <p>
            Now sit back and relax. I will get back to you in a few moments.
            Good day!
          </p>
          <Link to="/" className="text-yellow-600 hover:text-yellow-400">
            Go back to main site
          </Link>
        </div>
      </div>
    </>
  )
}
