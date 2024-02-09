import Link from "next/link"
import classnames from "./hero.module.scss"
import Image from "next/image"
export default function Hero() {
  return (
    <section className={classnames.hero}>
        <div className={classnames.hero_headshot}>
            <img
                src="/headshot.png" 
                alt="Hero Image" 
                width={600} 
                height={600}/>
        </div>
        <div className={classnames.hero_text}>
  <p>
    {`Hey, I'm Braxton Jones, a full-stack web developer who thrives at the intersection of functionality and creativity.`}
  </p>
  <p>
    {`Currently, I'm working on my latest project, AgileQuest, a personal task management tool that integrates features  gaming mechanics such as battle passes, loot boxes, and dynamic daily and weekly challenges.`}
  </p>
  <p>
    {`Besides coding , I love reading, I'm a melophile, and i'm currently intersested in Human-Computer Interaction.`}
  </p>
</div>
   
    </section>
  )
}
