
import { sanityxClient } from '@/app/lib/sanity';
import { builder } from '@/app/lib/sanity';
import classnames from "./blogpage.module.scss"
import GoBackBtn from '@/components/utility/GoBackBtn';



async function getPostData(slug) {
  const query = `*[ _type == "post" && slug.current == "${slug}"]`
  const post = await sanityxClient.fetch(query)
  return post
}

export default async function page({ params }) {
  function urlFor(source) {
    return builder.image(source).width(600).height(400).url();
  }
  const postData = await getPostData(params.blogSlug);
  const { postTitle, publishedAt, body, _updatedAt, accentImage } = postData[0];
  const imgsrc = urlFor(accentImage);
  const publishedDate = new Date(publishedAt).toLocaleDateString();
  const updatedDate = new Date(_updatedAt).toLocaleDateString();

  return (
    <>
    <header>
      <GoBackBtn/>
    </header>
    <section className={classnames.blogpage}>
      <img src={imgsrc} alt={accentImage.alt} className={classnames.heroImage}/>
      <div className={classnames.blogpage__container}>
        <h2>{postTitle}</h2>
        <div className={classnames.blogpage__info}>
          <p>Published: <span>{publishedDate}</span></p>
          <p>Last Updated: <span>{updatedDate}</span></p>
        </div>
        <div className={classnames.blogpage__content}>
        {body.map((block) => (
          <div key={block._key}>
            <p>{block.children[0].text}</p>
          </div>
        ))}
      </div>
      </div>

     

      <div className={classnames.blogpage__footer}></div>
    </section>
    </>
  );
}
