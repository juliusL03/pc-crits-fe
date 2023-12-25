import clsx from 'clsx'
import styles from './product.module.scss'
import Stock from './stock'
import headphone from '@/assets/image/headphone2.png'
import digicam from '@/assets/image/digicam.png'
import a23 from '@/assets/image/a23.png'
import mouse from '@/assets/image/mouse.png'
import { NextPage } from 'next'

const Products: NextPage = () => {
 const items = [
   {
   urlImage: a23,
   name: 'A23 PLUS NUU',
   rate: '4.1',
   price: '9,180.00'
  },
  {
   urlImage: mouse,
   name: 'MOUSE LOGITECH',
   rate: '4.1',
   price: '9,180.00'
  },
  {
   urlImage: headphone,
   name: 'HYPER X',
   rate: '4.1',
   price: '9,180.00'
  },
  {
   urlImage: digicam,
   name: 'SONY CAM',
   rate: '4.1',
   price: '9,180.00'
  }
 ]
 return(
  <div>
     <div className={clsx(styles.container)}>
    <div className={clsx(styles.title)}>
     <h2>Products</h2>
     <p onClick={() => {}} className={clsx(styles.views)}>View All</p>
    </div>
    <div className={clsx(styles.context)}>
     {items.map((item) => (
      <Stock key={item.name} urlImage={item.urlImage} name={item.name} rate={item.rate} price={item.price} />
     ))}
    </div>
    <button className={clsx(styles.viewMore)}>VIEW MORE</button>
   </div>
  </div>
 )
}

export default Products