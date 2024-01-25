import Tagline from "@/components/Tagline/Tagline.jsx"
import BlogNav from "../components/BlogNav/BlogNav.jsx"
import Hero from "@/components/Hero/Hero.jsx"
import BlogGrid from "@/components/BlogGrid/BlogGrid.jsx"
export default function Home() {
  return (<>
      <BlogNav/>
      <Tagline/>
      <Hero/>
      <BlogGrid/>
  </>)
}
