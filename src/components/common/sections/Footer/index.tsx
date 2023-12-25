import clsx from "clsx"
import styles from './footer.module.scss'
import Logo from "./Logo"
import Product from "./Product"
import Help from "./Help"
import About from "./About"
import PaymentMethod from "./PaymentMethod"
const Footer: React.FC = () => {
	return(
  <div className={clsx(styles.container)}>
   <div className={clsx(styles.navWrapper)}>
    <div className={clsx(styles.navContent)}>
     <Logo />
     <Product />
     <Help />
     <About />
     <PaymentMethod />
    </div>
  </div>
  <div className={clsx(styles.copyright)}>
   <span>Copyright @ 2023</span>
  </div>
  </div>
 )
}

export default Footer
