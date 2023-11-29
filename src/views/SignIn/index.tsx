import MainNav from "@/components/common/layouts/MainNav"
import Input from "antd/es/input/Input"
import clsx from "clsx"
import { NextPage } from "next"
import styles from './signin.module.scss'
import { Button } from "antd"

const SignIn: NextPage = () => {

	return (
		<MainNav>
   <div className={clsx(styles.model)}>
    <div className={styles.logo}>
    <svg className={clsx(styles.logoImg)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
   </svg>
    <span className={clsx(styles.logoName)}>PC crits</span>
    </div>
    <h3>Please Log In</h3>
    <hr className={clsx(styles.hr)} />
    <div className={clsx(styles.form)}>
      <Input placeholder="Email" size='middle' />
      <Input placeholder="Password" size='middle'/>
     </div>
    <Button className={clsx(styles.signIn)}>Sign In</Button>
    <div className={clsx(styles.auth)}>
     <Button className={clsx(styles.google)}>GOOGLE</Button>
     <span>or</span>
     <Button className={clsx(styles.facebook)}>FACEBOOK</Button>
    </div>
   </div>
  </MainNav>
	)
}

export default SignIn
