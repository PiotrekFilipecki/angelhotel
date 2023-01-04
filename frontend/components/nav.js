import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"
// import logo from "../public/logos/stradomhouselogo.png"
import LanguageContext from "./buttons/LanguageContext";
import LanguageSwitcher from "./buttons/LanguageSwitcher";
import { Squash as Hamburger } from 'hamburger-react'

const Nav = ({ categories, pages }) => {
  const [language, setLanguage] = useState("en");
  const provider = { language, setLanguage };
  const [isActive, setActive] = useState(true);
  const [isOpen, setOpen] = useState(false)
  const [navDisplayed, setDisplay] = useState(true)

  const handleToggle = () => {
    setActive(!isActive);
    setTimeout(
      setDisplay(!navDisplayed)

    ,2000)
  };
  return (
    <LanguageContext.Provider value={provider}>
    <header>
      <nav className={isActive ? "sidenav" : "sidenav opened"}>
      <div className={navDisplayed ? "sidenav-inner" : "sidenav-inner displayed"}>
          {/* <ul className="">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul> */}
          <div className="upperlink-wrapper">
            <Link className="upper-link" href="/">
              bedrooms & loft
            </Link>
          </div>
          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              eat & drink
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                gaia restaurant
              </Link>
              <Link className="inner-link" href="/">
                john dory restaurant
              </Link>
              <Link className="inner-link" href="/">
                hedwig&apos;s bar (club)
              </Link>
              <Link className="upper-link" href="/">
                cellar
              </Link>
            </div>
          </div>

          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              sól wellness
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                spa
              </Link>
              <Link className="inner-link" href="/">
                fitness
              </Link>
            </div>
          </div>

          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              work & celebrate
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                spaces
              </Link>
              <Link className="inner-link" href="/">
                make enquiry
              </Link>
            </div>
          </div>

          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              discover
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                calendar
              </Link>
              <Link className="inner-link" href="/">
                city guide
              </Link>
              <Link className="inner-link" href="/">
                experiences
              </Link>
            </div>
          </div>

          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              special
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                packages
              </Link>
            </div>
          </div>

          <div className="upperlink-wrapper">
            <Link className="upper-link" href="/">
              gallery
            </Link>
          </div>

          <div className="upperlink-wrapper withSubnav">
            <Link className="upper-link" href="/">
              memberships
            </Link>
            <div className="innerlink-wrapper">
              <Link className="inner-link" href="/">
                apply
              </Link>
            </div>
          </div>

        </div>
      </nav>
      <div className="button-wrapper">
      <Hamburger className="hamburger" onToggle={toggled => {
  if (toggled) {
     handleToggle()
  } else {
    handleToggle()
  }
}} />
      
      
      </div>
      
      <Link  href="/">
                <Image
                width={220}
                height={66}

      style={{
        maxWidth: '100%',
        height: 'auto',
        
      }}
      src="/logos/stradomhouselogo.png"
                  />
              </Link>
              <div className="right-nav">
                <LanguageSwitcher />
                <Link className="reserve-button" href="/">
                  reserve
                </Link>
              </div>
    </header>
    </LanguageContext.Provider>

    
  )
}

export default Nav
