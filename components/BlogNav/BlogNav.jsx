import Link from 'next/link'
import classnames from './blognav.module.scss'

export default function BlogNav() {
 return (
    <div className={classnames.blog_nav}>
        <Link href={"https://portfolio.braxtonjones.dev/"} className={classnames.blog_nav_name}>Braxton Jones</Link>
        <div className={classnames.blog_nav_views}>
            <Link href="#" className={classnames.blog_nav_selectedRoute}>Home</Link>
            <Link href="#">List</Link>
        </div>
    </div>
 )
}
