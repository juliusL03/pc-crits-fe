import Link from 'next/link'
import {clsx} from 'clsx'
import styles from './header.module.scss'
import HeadNavMenu from './Menu'
import HeadbarLogo from './Logo'
import Auth from './Auth'

const Header: React.FC = () => {
	return (
   <nav className={clsx(styles.navHeader)}>
   <div className={clsx(styles.navWrapper)}>
    <div className={clsx(styles.navContent)}>
    <HeadbarLogo />
    <HeadNavMenu />
    <Auth />
    </div>
  </div>
	</nav>
	)
}

export default Header

