import React, {lazy} from 'react'
import {clsx} from 'clsx'
import styles from './header.module.scss'
import HeadNavMenu from './Menu'
import HeadbarLogo from './Logo'

import Submenu from './Submenu'
import Search from './Search'
import CartCount from './Cart'

const Header: React.FC = () => {
	return (
   <nav className={clsx(styles.navHeader)}>
    <div className={clsx(styles.subWrapper)}>
     <div className={clsx(styles.subContent)}>
      <div className={clsx(styles.subflex)}>
       <Submenu />
      </div>
     </div>
    </div>
    <div className={clsx(styles.navWrapper)}>
     <div className={clsx(styles.navContent)}>
      <div className={clsx(styles.itemContent)}>
       <HeadbarLogo />
       <Search />
       <CartCount />
      </div>
     </div>
   </div>
	</nav>
	)
}

export default Header

