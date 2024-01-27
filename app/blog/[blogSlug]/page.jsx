import { sanityxClient } from '@/app/lib/sanity'
import { ImageUrlBuilder } from 'sanity/image-url'


async function getPostData(slug) {
  const query = `*[ _type == "post" && slug.current == "${slug}"]`
  console.log(query, "from page")
  const post = await sanityxClient.fetch(query)
  return post
}

export default async function page({params}) {

  const postData = await getPostData(params.blogSlug)
  console.log(postData, "from page")
  const { postTitle, publishedAt, body, _updatedAt, accentImage } = postData[0]
  return (
    <>
      <div>page</div>
      <img src={accentImage.asset._ref} alt={accentImage.alt} />
      <p>{postTitle}</p>
      <p>{publishedAt}</p>
      <p>{_updatedAt}</p>
      <div>
        {body.map((block) => (
          <div key={block._key}>
            <p>{block.children[0].text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
