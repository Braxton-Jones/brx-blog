import Tagline from "@/components/Tagline/Tagline.jsx"
import BlogNav from "../components/BlogNav/BlogNav.jsx"
import Hero from "@/components/Hero/Hero.jsx"
import BlogGrid from "@/components/BlogGrid/BlogGrid.jsx"
import { sanityxClient } from "./lib/sanity.js"

async function getPosts(){
  const query = `*[_type == "post"]`
  const data = await sanityxClient.fetch(query)
  return data
}
export default async function Home() {
  const posts =  await getPosts()
  return (<>
      <BlogNav/>
      <Tagline/>
      <Hero/>
      <BlogGrid posts={posts}/>
  </>)
}
