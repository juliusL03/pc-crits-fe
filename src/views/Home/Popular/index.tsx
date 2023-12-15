import clsx from 'clsx'
import styles from './popular.module.scss'
import Category from './category'
import camera from '@/assets/image/camera.png'
import laptop from '@/assets/image/laptop1.png'
import headphone from '@/assets/image/heaedphone.png'
import smartphone from '@/assets/image/smartphone.png'
import watch from '@/assets/image/watch.png'
import tablet from '@/assets/image/tablet.png'
const Popular = () => {
 const categories = [
   {
   urlImage: camera,
   category: 'Camera'
  },
  {
   urlImage: laptop,
   category: 'Laptop'
  },
  {
   urlImage: headphone,
   category: 'Headphone'
  },
  {
   urlImage: smartphone,
   category: 'Smartphone'
  },
  {
   urlImage: tablet,
   category: 'Tablet'
  },
  {
   urlImage: watch,
   category: 'Smartwatches'
  }
 ]
 return(
  <div className={clsx(styles.container)}>
   <h2>Popular Categories</h2>
   <div className={clsx(styles.context)}>
    {categories.map((item) => (
     <Category urlImage={item.urlImage} category={item.category} />
    ))}
   </div>
  </div>
 )
}

export default Popular