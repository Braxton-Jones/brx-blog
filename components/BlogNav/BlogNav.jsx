import Link from 'next/link'
import classnames from './blognav.module.scss'
import Image from 'next/image'
export default function BlogNav() {
    return (
       <div className={classnames.blog_nav}>
           <Link href={"https://portfolio.braxtonjones.dev/"} className={classnames.blog_nav_name}>Braxton Jones</Link>
           <div className={classnames.blog_nav_links}>
                <Link href={"https://portfolio.braxtonjones.dev/"}>
                    <Image
                    src={"/portfolio.png"}
                    width={25}
                    height={25}
                    alt='portfolio icon'
                    >
                    </Image>
                </Link>
                <Link href={"https://github.com/Braxton-Jones"}>
                    <Image
                    src={"/github.png"}
                    width={25}
                    height={25}
                    alt='github icon'
                    >
                    </Image>
                </Link>
               
           </div>
       </div>
    )
   }
   
   
