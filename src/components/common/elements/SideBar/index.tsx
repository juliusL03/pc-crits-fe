import { clsx } from "clsx"
import styles from './sidebar.module.scss'
import {Props} from "./types"

const SideBar: React.FC<Props> = ({itemsMenu}) => {
 const {name, options} = itemsMenu
return (
 <div className={clsx(styles.menu)}>
  <a href={name.link} className={styles.title}>{name.name}</a>
  {options.map(item => (
   <a href={item.link} className={clsx(styles.link)}>{item.label}</a>
  ))}
 </div>
)
}

  export default SideBar