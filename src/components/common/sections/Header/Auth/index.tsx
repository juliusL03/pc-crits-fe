import Button from "@/components/common/elements/Button"
import {Space } from 'antd';
import Link from "next/link"
import { Fragment } from "react";

const Auth: React.FC = () => {
	return (
 <Fragment>
   <Space size={16} wrap>
    <Link href={"/signin"}><Button>Sign In</Button></Link>
    <Link href={"/signup"}><Button variant="orange">Sign up</Button></Link>
  </Space>
 </Fragment>
	)
}

export default Auth