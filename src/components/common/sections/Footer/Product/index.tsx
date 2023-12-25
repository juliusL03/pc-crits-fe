import styles from './product.module.scss'
import clsx from 'clsx'

const Product: React.FC = () => {
	return (
  <div className={clsx(styles.container)}>
   <h2>Product</h2>
   <a href='#' className={clsx(styles.name)}>Laptop</a>
   <a href='#' className={clsx(styles.name)}>Camera</a>
   <a href='#' className={clsx(styles.name)}>Smartphone</a>
   <a href='#' className={clsx(styles.name)}>Heaadaphone</a>
   <a href='#' className={clsx(styles.name)}>Tablet</a>
   <a href='#' className={clsx(styles.name)}>Smartwatches</a>
  </div>
	)
}

export default Product