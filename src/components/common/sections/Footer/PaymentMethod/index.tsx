import styles from './payment.module.scss'
import clsx from 'clsx'

const PaymentMethod: React.FC = () => {
	return (
  <div className={clsx(styles.container)}>
   <h2>Payment Method</h2>
  </div>
	)
}

export default PaymentMethod