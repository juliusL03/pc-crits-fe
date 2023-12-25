import styles from './help.module.scss'
import clsx from 'clsx'

const Help: React.FC = () => {
	return (
  <div className={clsx(styles.container)}>
   <h2>Help</h2>
   <a href='#' className={clsx(styles.name)}>Faq</a>
   <a href='#' className={clsx(styles.name)}>Shipping</a>
  </div>
	)
}

export default Help