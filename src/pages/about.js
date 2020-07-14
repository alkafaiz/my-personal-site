import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="px-3">About me</h1>
      <section className="px-3 text-base leading-7">
        <p>
          Hey! It’s Faiz. First of all, I’d like to appreciate you for taking
          time and reading this personal site. It's such a pleasure to have you
          here!
        </p>
        <p>
          A couple of words about my professional life: I am an Indonesian
          software engineer from Surabaya but working in Kuala Lumpur Malaysia.
          I graduated from university with a Bachelor Degree of Science in
          Information Technology in 2019. At university, I realized how
          empowering technology can be in so many aspects in ourlives. That
          triggered me to explore the posibilities of technology product to
          solving real world problem. In early 2019, I was entrusted to co-lead
          <span className="text-yellow-600">
            <a
              href="https://www.goodnewsfromindonesia.id/2019/07/20/simposium-ppi-dunia"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;11th OISAA International Symposium
            </a>
          </span>
          , and that was one example of how I integrated technology to solve
          specific problem that we were facing.
        </p>
        <p>
          <span className="font-bold">Life-time student</span>
          <br />I enjoy learning, analyzing, figuring out new things. I allocate
          dedicated amount of time and effort to improve myself by taking online
          courses, reading blogs and articles, attending community events, or
          sometimes just spending all night coding.
        </p>
        <p>
          Almost forgot! Apart from techy thingy, I also love books!
          Specifically classic novels.
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage