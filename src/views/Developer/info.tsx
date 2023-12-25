import clsx from "clsx"
import styles from './developer.module.scss'

const Info: React.FC = ()=> {
 return (
  <div className={clsx(styles.containers)}>
   <h2>Developer</h2>
   <div className={clsx(styles.paragraph)}>
   <p>
    Hi There! I’m Julius Legaspi, a Software Engineer. 
    7 years in the IT industry doing web apps and mobile apps
    using React.js, Next.js, Node.js, React Native, etc.
   </p>
   <p>
   I love to create e-commerce, fin-tech, CMS, reservation,
   integration, etc. that enhance my skill and deliver 
   a good app to the customer/client.
   </p>
   <p>
   My goal is to become a senior software engineer in 
   the future.
   </p>
   <p>
   This App is my working portfolio, it still needs to 
   be done but you can play around.
   </p>
   </div>
   <br />
   <div className={clsx(styles.accomplishment)}>
    <span className={clsx(styles.accomplish)}>Accomplishment in this project</span>
    <ul>
     <li className={clsx(styles.bold)}>Landing Page (static)
      <ul>
        <li>banner</li>
        <li>popular category</li>
        <li>new arrivals</li>
        <li>products</li>
      </ul>
     </li>
    </ul>
    <ul>
     <li className={clsx(styles.bold)}>Authentication (database not yet)
      <ul>
        <li>login</li>
        <li>sign-up</li>
        <li>logout</li>
      </ul>
     </li>
    </ul>
    <ul>
     <li className={clsx(styles.bold)}>Layout
      <ul>
        <li>header</li>
        <li>content</li>
        <li>footer</li>
      </ul>
     </li>
    </ul>
   </div>
   <div className={clsx(styles.accomplishment)}>
    <span className={clsx(styles.inProgress)}>In progess</span>
    <ul>
     <li className={clsx(styles.bold)}>Review Page (static)
      <ul>
        <li>product description</li>
        <li>product image</li>
        <li>checkout forms</li>
      </ul>
     </li>
    </ul>
    <ul>
     <li className={clsx(styles.bold)}>My account/profile
      <ul>
        <li>edit account</li>
        <li>order action event</li>
      </ul>
     </li>
    </ul>
    <ul>
     <li className={clsx(styles.bold)}>integration
      <ul>
        <li>sync to Xero Acc.</li>
        <li>sync to Stripe</li>
      </ul>
     </li>
    </ul>
   </div>
   <br />
   <br />
   <br />
  </div>
 )
}

export default Info