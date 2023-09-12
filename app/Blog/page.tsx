import Dashboard from './components/Dashboard'
import RelatedBlogList from './components/RelatedBlogList'
import RelatedBlog from './components/RelatedBlog'
import Marketing from "./components/Marketing"

const Blogpage = () => {
  return (
    <>
      <Dashboard />
      <RelatedBlogList />
      <RelatedBlog />
      <Marketing />
    </>
  )
}

export default Blogpage