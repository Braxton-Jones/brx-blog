import classnames from "./hero.module.scss"
import Image from "next/image"
export default function Hero() {
  return (
    <section className={classnames.hero}>
        <div className={classnames.hero_headshot}>
            <Image 
                src="/headshot.png" 
                alt="Hero Image" 
                width={350} 
                height={450}/>
        </div>
        <div className={classnames.hero_text}>
        <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>

  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>

  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
        
        </div>    
    </section>
  )
}
