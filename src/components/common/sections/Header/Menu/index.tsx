import clsx from "clsx"
import styles from './menu.module.scss'
import Menu from "@/components/common/elements/Menu"
import {menuItems} from "./item-list"
const HeadNavMenu: React.FC = () => {

	return (
  <Menu itemsMenu={menuItems} />
	)
}

export default HeadNavMenu
