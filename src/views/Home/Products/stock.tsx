import clsx from "clsx"
import styles from './product.module.scss'
import Image from "next/image"
import camera from '@/assets/image/camera.png'
import React from "react"

type props = {
 urlImage: any,
 name: string,
 rate: string,
 price: string
}
const Stock: React.FC<props> = ({urlImage, name, rate, price}) => {
 return(
  <div className={clsx(styles.cardWrap)}>
   <div className={clsx(styles.cardImg)}>
    <Image src={urlImage} alt={name} />
   </div>
   <div className={clsx(styles.label)}>
   <label className={clsx(styles.name)}>{name}</label>
   <label className={clsx(styles.rate)}>({rate})</label>
   <label className={clsx(styles.price)}>₱ {price}</label>
   </div>
  </div>
 )
}

export default Stock