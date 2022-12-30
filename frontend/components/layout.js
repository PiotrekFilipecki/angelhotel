import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div className="page-wrapper">
    <Nav categories={categories} />
    {children}
  </div>
)

export default Layout
