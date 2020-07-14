import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

const navItems = [
  { label: "Home", url: "/" },
  { label: "Uses", url: "/uses" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
]

const AlkafaizIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.077725 12.8898C0.109168 12.8333 0.144323 12.7789 0.18296 12.727C1.14063 11.5751 2.32655 10.6338 3.66609 9.9622C4.78655 9.40141 5.9359 8.96021 7.22556 8.96227C11.7899 8.96227 16.3523 8.9499 20.9166 8.96227C22.5509 8.96227 24.0985 8.65095 25.5161 7.83039C26.6548 7.20039 27.6354 6.32021 28.3839 5.25626C29.1324 4.1923 29.6293 2.97238 29.837 1.68854C29.936 1.14425 29.9463 0.583465 30 0H29.6389C23.0111 0 16.3832 0 9.75536 0C8.4657 0 7.18429 0.012366 5.95447 0.465943C2.67562 1.68235 0.717398 4.02446 0.106613 7.4634C0.0336301 7.95199 -0.000181727 8.44562 0.00550257 8.93959C-0.00687821 10.2405 0.00550257 11.5435 0.00550257 12.8445L0.077725 12.8898ZM20.8341 12.5311C17.3138 12.5311 13.7936 12.5311 10.2733 12.5311C9.36466 12.5038 8.4552 12.5293 7.54952 12.6074C6.12218 12.7861 4.76564 13.3316 3.61243 14.1908C0.806125 16.2092 -0.584647 19.9141 0.244865 23.2623C0.655998 25.004 1.59317 26.5773 2.92935 27.7689C4.26553 28.9605 5.9361 29.7127 7.7146 29.9237C8.0592 29.967 8.40999 29.9753 8.77522 30V29.6536C8.77522 27.0146 8.77522 24.3763 8.77522 21.7387C8.77522 21.5449 8.80823 21.4666 9.02902 21.4686C10.0608 21.4831 11.1069 21.4686 12.1469 21.4789C14.1382 21.4996 15.9726 21.0295 17.5924 19.8296C18.8201 18.9311 19.7946 17.7308 20.4214 16.3453C20.9669 15.1497 21.2288 13.8444 21.1869 12.5311H20.8341Z"
      fill="black"
    />
  </svg>
)

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const handleClick = () => {
    setShowMenu(prev => !prev)
  }

  useEffect(() => {
    function handleResize(event) {
      if (window.innerWidth >= 1024) setIsDesktop(true)
      else setIsDesktop(false)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("scroll", handleResize)
  }, [])

  return (
    <header
      style={{ maxWidth: 1540, margin: "auto" }}
      className="px-3 mx-auto flex items-center justify-between flex-wrap p-6 lg:px-5 lg:py-6 xl:px-10 xl:mt-5"
    >
      <div className="flex items-center">
        <AlkafaizIcon />
        <span className="ml-3 text-2xl font-bold">ALKAFAIZ.</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-black hover:text-white hover:border-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* {!isDesktop && ( */}
      <Fade
        right
        when={showMenu || isDesktop}
        duration={500}
        // unmountOnExit={true}
        // mountOnEnter={true}
      >
        <div className="bg-black fixed right-0 top-0 h-full w-3/4 z-10 lg:bg-white lg:relative lg:flex lg:items-center lg:w-auto">
          <div className="p-6 text-right flex flex-col items-end lg:flex-grow lg:flex-row lg:p-0">
            <button className="border-none lg:hidden" onClick={handleClick}>
              <svg
                className="mb-5"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 21.21 21.21"
              >
                <title>Close</title>
                <path
                  d="M12.73,10.61l8.48,8.48-2.12,2.12-8.48-8.48L2.12,21.21,0,19.09l8.49-8.48L0,2.12,2.12,0l8.49,8.49L19.09,0l2.12,2.12Z"
                  style={{ fill: "#fff" }}
                />
              </svg>
            </button>
            {navItems.map((nav, index) => (
              <Link
                key={index}
                to={nav.url}
                className={`text-2xl block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white lg:text-gray-800 lg:text-base lg:hover:text-yellow-400 ${
                  navItems.length !== index - 1 ? "lg:mr-5" : ""
                } `}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      </Fade>
      {/* )} */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
