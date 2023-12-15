import styles from './logo.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '@/assets/image/new-pccrits-logo-100.png'

const HeadbarLogo: React.FC = () => {
	return (
  <a href='/' className={clsx(styles.logo)}>
   <Image src={logo} alt="PcCrits"/>
  </a>
	)
}

export default HeadbarLogo