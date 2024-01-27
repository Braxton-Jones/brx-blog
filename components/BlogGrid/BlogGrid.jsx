import Link from "next/link"
import classnames from "./bloggrid.module.scss"
export default function BlogGrid({posts}) {
  return (
    <section className={classnames.bloggrid}>
      <h2>Posts</h2>
      <div className={classnames.bloggrid__container}>
        {posts.map((post) => {
          console.log(post, "from blog map")
          return (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <article key={post._id} className={classnames.bloggrid__item}>
              <h4>{post.postTitle}</h4>
              <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", 
              {year: "numeric", month: "long", day: "numeric"})}
              </p>
            </article>
            </Link>
          )
        })}
      </div>
  
    </section>
  )
}
