import Button from "@/components/common/elements/Button"
import styles from './auth.module.scss'
import { redirect } from "next/navigation"
import Link from "next/link"
const Auth: React.FC = () => {
 const link = () => {
  redirect('/signup')
 }
	return (
  <div className={styles.auth}>
    <Link href={"/signin"}><Button>Sign In</Button></Link>
    <Link href={"/signup"}><Button variant="orange">Sign up</Button></Link>
  </div>
	)
}

export default Auth