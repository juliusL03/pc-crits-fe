import MainNav from "@/components/common/layouts/MainNav"
import { NextPage } from "next"
import styles from './profile.module.scss'
import clsx from "clsx"
import SideBar from "@/components/common/elements/SideBar"
import { menuItems, menuItemsOther } from "./sideBar-items"
import { Badge, Checkbox } from "antd"
import MyOrder from "./order"

const Display: NextPage = () => {

	return (
  <MainNav>
   <div className={clsx(styles.container)}>
    <div className={clsx(styles.content)}>
     <div className={clsx(styles.greets)}>
      <span>Hello, Julius Legaspi</span>
      <Badge count='Verified Account' style={{ backgroundColor: "#52c41a" }}/>
      <SideBar itemsMenu={menuItems} />
      <SideBar itemsMenu={menuItemsOther} />
     </div>
     <div className={clsx(styles.view)}>
     <span className={clsx(styles.title)}>Manage My Account</span>
     <div className={clsx(styles.separator)}>
      <div className={clsx(styles.profile)}>
      <span className={clsx(styles.black)}>Personal Profile</span>
      <span>Julius Legaspi</span>
      <span>ju***************@gmail.com</span>
      <Checkbox>Receive marketing SMS</Checkbox>
      <Checkbox>Receive marketing email</Checkbox>
      </div>
      <div className={clsx(styles.address)}>
       <div className={clsx(styles.shipping)}>
        <span className={clsx(styles.black, styles.spaceBottom)}>Address Book</span>
        <div className={clsx(styles.ship)}>
         <span className={clsx(styles.gray)}>DEFAULT SHIPPING ADDRESS</span>
         <span className={clsx(styles.black, styles.spaceBottom, styles.spaceTop)}>Julius Legaspi</span>
         <span className={clsx(styles.smallText)}>R.castillo Street Alley 10 South San Juan Brgy Centro</span>
         <span className={clsx(styles.smallText)}>Davao Del Sur - Davao - Agdao</span>
         <span className={clsx(styles.smallText)}>(+63) 09978225514</span>
        </div>
       </div>
       <div className={clsx(styles.billing)}>
        <br />
        <div className={clsx(styles.ship)}>
         <span className={clsx(styles.gray)}>DEFAULT BILLING ADDRESS</span>
         <span className={clsx(styles.black, styles.spaceBottom, styles.spaceTop)}>Julius Legaspi</span>
         <span className={clsx(styles.smallText)}>R.castillo Street Alley 10 South San Juan Brgy Centro</span>
         <span className={clsx(styles.smallText)}>Davao Del Sur - Davao - Agdao</span>
         <span className={clsx(styles.smallText)}>(+63) 09978225514</span>
        </div>
       </div>
      </div>
     </div>
     <div className={clsx(styles.myOrder)}>
      <span className={clsx(styles.orderLabel)}>Recent Orders</span>
      <MyOrder />
     </div> 
     </div>
    </div>
    <br />
  </div>
  </MainNav>
	)
}

export default Display
