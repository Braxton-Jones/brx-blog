import Link from "next/link"
import classnames from "./hero.module.scss"
import Image from "next/image"
export default function Hero() {
  return (
    <section className={classnames.hero}>
        <div className={classnames.hero_headshot}>
            <Image 
                src="/headshot.png" 
                alt="Hero Image" 
                width={250} 
                height={350}/>
        </div>
        <div className={classnames.hero_text}>
  <p>
    {`Hey, I'm Braxton Jones, a full-stack web developer who  at the intersection of functionality and creativity.`}
  </p>
  <p>
    {`Currently, I'm working on my latest project, ${<Link href="#" className={classnames.project_name}>soloprojdev</Link>}, where I'm making a project management system for solo creatives.`}
  </p>
  <p>
    {`Besides coding , I love reading, I'm a melophile, and i'm currently intersested in Human-Computer Interaction.`}
  </p>
</div>
   
    </section>
  )
}
