import MainNav from "@/components/common/layouts/MainNav"
import Image from 'next/image'
// import Input from "antd/es/input/Input"
import clsx from "clsx"
import { NextPage } from "next"
import styles from './signup.module.scss'
import { Button } from "antd"
// import { useState } from "react"
import useLogic from './useLogic'


import logo from '@/assets/image/new-pccrits-logo-155.png'

const SignUp: NextPage = () => {
 const {submit, Form, NotificationContextHolder} = useLogic()

	return (
		<MainNav>
   {NotificationContextHolder}
   <div className={clsx(styles.model)}>
    <div className={styles.logo}>
    <Image src={logo} alt="PcCrits"/>
    </div>
    <h3>Create your Account</h3>
    <hr className={clsx(styles.hr)} />
      <Form />
    <Button className={clsx(styles.signUp)} onClick={submit}>Sign Up</Button>
    <div className={clsx(styles.auth)}>
     <Button className={clsx(styles.google)}>GOOGLE</Button>
     <span>or</span>
     <Button className={clsx(styles.facebook)}>FACEBOOK</Button>
    </div>
   </div>
  </MainNav>
	)
}

export default SignUp
