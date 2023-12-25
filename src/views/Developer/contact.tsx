import clsx from "clsx"
import styles from './developer.module.scss'

const Contact = () => {
 return (
  <div className={clsx(styles.contact)}>
   <h1>Contact me at:</h1>
   <div>
    <h4>Email:</h4>
    <h5 className={clsx(styles.label)}>
     juliuslegaspi2014@gmail.com
    </h5>
   </div>
   <div>
    <h4>Linkedin:</h4>
    <h5 className={clsx(styles.label)}>
     <a href="https://www.linkedin.com/in/julius-legaspi-13b546117/">
     www.linkedin.com/in/julius-legaspi-13b546117/
     </a>
    </h5>
   </div>
   <div>
    <h4>Jobstreet:</h4>
    <h5 className={clsx(styles.label)}>
     <a href="https://www.jobstreet.com.ph/profile/julius-legaspi-tB5Krsjxhq">
     www.jobstreet.com.ph/profile/julius-legaspi-tB5Krsjxhq
     </a>
    </h5>
   </div>
  </div>
 )
}

export default Contact