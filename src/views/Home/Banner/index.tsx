import clsx from 'clsx'
import styles from './banner.module.scss'
import Image from 'next/image'
import laptop from '@/assets/image/laptop.png'
import { useRouter } from 'next/router'

type props = {
 theme: string,
 title: string,
 subtitle: string,
 link: string
}

const Banner: React.FC<props> = ({theme, title, subtitle, link}) => {
 const router = useRouter()
 const onSubmit = () => {
  router.push(link)
 }

return (
 <div className={clsx(styles.container, styles[theme])}>
   <div className={clsx(styles.text)}>
    <p className={clsx(styles.title)}>{title}</p>
    <p className={clsx(styles.subtitle)}>{subtitle} </p>
    <button className={clsx(styles.shopNow)} onClick={onSubmit}>Shop Now</button>
   </div>
   <div>
     <Image src={laptop} alt={''}/>
   </div>
 </div>
)
}

export default Banner