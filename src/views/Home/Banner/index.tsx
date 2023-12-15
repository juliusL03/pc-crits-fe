import clsx from 'clsx'
import styles from './banner.module.scss'
import Image from 'next/image'
import laptop from '@/assets/image/laptop.png'
const Banner = () => {
return (
 <div className={clsx(styles.container)}>
   <div className={clsx(styles.text)}>
    <p className={clsx(styles.title)}>Introducing the New Acer Laptop Series</p>
    <p className={clsx(styles.subtitle)}>unmatched performance in a sleek design. </p>
    <button className={clsx(styles.shopNow)}>Shop Now</button>
   </div>
   <div>
     <Image src={laptop} alt={'laptop'} />
   </div>
 </div>
)
}

export default Banner