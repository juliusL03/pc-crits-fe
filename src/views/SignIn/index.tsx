import MainNav from "@/components/common/layouts/MainNav"
import Image from 'next/image'
import clsx from "clsx"
import { NextPage } from "next"
import styles from './signin.module.scss'
import { Button } from "antd"
import logo from '@/assets/image/new-pccrits-logo-155.png'
import useLogic from './useLogic'

const SignIn: NextPage = () => {
 const {submit, Form, NotificationContextHolder} = useLogic()

	return (
		<MainNav>
   {NotificationContextHolder}
   <div className={clsx(styles.model)}>
    <div className={styles.logo}>
    <Image src={logo} alt="PcCrits"/>
    </div>
    <h3>Please Log In</h3>
    <hr className={clsx(styles.hr)} />
    <Form />
    <Button className={clsx(styles.signIn)} onClick={submit}>Sign In</Button>
    <div className={clsx(styles.auth)}>
     <Button className={clsx(styles.google)}>GOOGLE</Button>
     <span>or</span>
     <Button className={clsx(styles.facebook)}>FACEBOOK</Button>
    </div>
    <a href="/signup">register</a>
   </div>
  </MainNav>
	)
}

export default SignIn
