import clsx from 'clsx'
import {Fragment,} from 'react'
import HeadNavMenu from '../Menu'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, MenuProps, Dropdown } from 'antd';

import styles from './submenu.module.scss'
import useStore from "@/utils/store";
import Link from "next/link"
import logout from './logout';

const Submenu: React.FC = () => {
 const {authenticated, user} = useStore((state) => ({
  authenticated: state.authenticated,
  user: state.user
 }))
 const name = user?.first_name ? user.first_name : 'newbie'
 const {Logout, NotificationContextHolder} = logout()

 const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
     <Link href={"/account/profile"}>
       my account
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Logout />
    ),
  },
 ];

 const LogIn = () => <a href='/signin' className={clsx(styles.textBabel)}>Log In</a>
 const LogOut = () => <div className={clsx(styles.textBabel)}>
  <label className={clsx(styles.name)}>Hi {name}!</label>
  <Dropdown menu={{ items }} placement="bottom" arrow>
 <Avatar size="small" style={{backgroundColor: '#87d068', marginBottom: 3}} icon={<UserOutlined />} />
 </Dropdown>
 </div>

	return (
		<div className={clsx(styles.container)}>
   {NotificationContextHolder}
   <div className={clsx(styles.wrapper)}>
    <div className={clsx(styles.content)}>
     <Fragment>
      <HeadNavMenu />
      {!authenticated ? <LogIn /> : <LogOut />}
     </Fragment>
    </div>
   </div>
  </div>
	)
}

export default Submenu
