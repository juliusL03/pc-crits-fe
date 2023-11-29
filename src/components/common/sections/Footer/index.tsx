import clsx from "clsx"
import styles from './footer.module.scss'
import Inquiry from "./content/inquiry"
const Footer: React.FC = () => {
	return(
  <div className={clsx(styles.container)}>
   <div className={clsx(styles.navWrapper)}>
    <div className={clsx(styles.navContent)}>
    <Inquiry />
    <h1>Quick links</h1>
    <h1>Want to get the latest updates?</h1>
    </div>
  </div>
  <br />
  </div>
 )
}

export default Footer
