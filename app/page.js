import Tagline from "@/components/Tagline/Tagline.jsx"
import BlogNav from "../components/BlogNav/BlogNav.jsx"
import Hero from "@/components/Hero/Hero.jsx"
import BlogGrid from "@/components/BlogGrid/BlogGrid.jsx"
import { sanityxClient } from "./lib/sanity.js"
import classname from "./layout.module.scss"

async function getPosts(){
  const query = `*[_type == "post"]`
  const data = await sanityxClient.fetch(query)
  return data
}
export default async function Home() {
  const posts =  await getPosts()
  console.log(posts.length)
  return (<>
  <main className={classname.main}>
      <BlogNav/>
      <Tagline/>
      <Hero/>
      <BlogGrid posts={posts}/>
  </main>
  </>)
}
