import React, {lazy, useState} from 'react'
import {clsx} from 'clsx'
import styles from './header.module.scss'
import HeadbarLogo from './Logo'

import Submenu from './Submenu'
import Search from './Search'
import CartCount from './Cart'
import BurgerMenu from './burgerMenu'
import BurgerItemMenu from './burgerItems'

const Header: React.FC = () => {
 const [mobileMenu, setMobileMenu] = useState(false)
 const onBurger = () => {
  setMobileMenu(!mobileMenu)
 }

	return (
   <nav className={clsx(styles.navHeader, mobileMenu && styles['navHeight'])}>
    <div className={clsx(styles.subWrapper)}>
     <div className={clsx(styles.subContent)}>
      <div className={clsx(styles.subflex)}>
       <Submenu />
      </div>
     </div>
    </div>
    <div className={clsx(styles.navWrapper)}>
     <div className={clsx(styles.navContent)}>
       <HeadbarLogo />
       <Search />
       <CartCount />
       <div className={clsx(styles.humberger)}>
        <BurgerMenu onClick={onBurger} />
       </div>
     </div>
   </div>
   <div className={clsx(!mobileMenu && styles.hide, mobileMenu && styles.mobileMenu)}>
    <BurgerItemMenu />
   </div>
	</nav>
	)
}

export default Header

