import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, MenuProps, Dropdown } from 'antd';
import Link from "next/link"
import { Fragment } from "react";
import logout from './logout';

type props = {
 firstName: string | undefined
}

const Profile: React.FC<props> = ({firstName = 'newbie'}) => {

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

	return (
 <Fragment>
  {NotificationContextHolder}
   <Space size={16} wrap>
    <h3>Hi {firstName}!</h3>
    <Dropdown menu={{ items }} placement="bottom" arrow>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Dropdown>
  </Space>
 </Fragment>
	)
}

export default Profile