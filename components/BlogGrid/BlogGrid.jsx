import Link from "next/link"
import { builder } from '@/app/lib/sanity';
import classnames from "./bloggrid.module.scss"
export default function BlogGrid({posts}) {
  function urlFor(source) {
    return builder.image(source).width(600).height(400).url();
  }
  return (
    <section className={classnames.bloggrid}>
      <h2>Posts</h2>
      <div className={classnames.bloggrid__container}>
        {posts.map((post) => {
          const {
            summary,
            accentImage,
            _type,
            body,
            slug,
            publishedAt,
            _createdAt,
            _rev,
            postTitle,
            _id,
            _updatedAt
          } = post;
          const type = "";
          
          return (
            <Link key={_id} href={`/blog/${slug.current}`} className={classnames.bloggrid__item} >
            <article 
            key={_id} 
            className={classnames.bloggrid__item__card}
            
            >
              <div 
                className={classnames.bloggrid__item__card_top}
                style={{
                  backgroundImage: `url(${urlFor(accentImage)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {type === "project" ? <p className={classnames.status}>Status</p> : null}
              </div>
              <div className={classnames.bloggrid__item__card_bottom}>
                <h3>{postTitle}</h3>
                <p>{summary}</p>
                <div className={classnames.bloggrid__item__card_bottom__info}>
                  <p>Published: <span>{new Date(publishedAt).toLocaleDateString()}</span></p>
                  <p>Last Updated: <span>{new Date(_updatedAt).toLocaleDateString()}</span></p>
                </div>
              </div>       
            </article>
            </Link>
          )
        })}
      </div>
  
    </section>
  )
}

{/* {new Date(post._createdAt).toLocaleDateString("en-US", 
              {year: "numeric", month: "long", day: "numeric"})} */}