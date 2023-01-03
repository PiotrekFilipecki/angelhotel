import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"
// import logo from "../public/logos/stradomhouselogo.png"
import LanguageContext from "./buttons/LanguageContext";
import LanguageSwitcher from "./buttons/LanguageSwitcher";

const Nav = ({ categories, pages }) => {
  const [language, setLanguage] = useState("en");
  const provider = { language, setLanguage };
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <LanguageContext.Provider value={provider}>
    <header>
      <nav className={isActive ? "sidenav" : "sidenav opened"}>
        <div className="">



        </div>
        <div className="">
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

        </div>
      </nav>
      <div className="button-wrapper">
      <button onClick={handleToggle}>menu</button>
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
