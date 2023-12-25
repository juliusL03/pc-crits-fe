import clsx from "clsx"
import styles from './popular.module.scss'
import Image from "next/image"
import React from "react"

type props = {
 urlImage: any,
 category: string
}
const Category: React.FC<props> = ({urlImage, category}) => {
 return(
  <div className={clsx(styles.cardWrap)}>
   <div className={clsx(styles.cardImg)}>
    <Image src={urlImage} alt={category} />
   </div>
   <p className={clsx(styles.name)}>{category}</p>
  </div>
 )
}

export default Category