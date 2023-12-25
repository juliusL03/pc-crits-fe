import { MyAccount } from '@/views/Account/Profile'
import {NextPage} from 'next'
import {useAuth} from '@/utils/context/auth-context'
import Custom403 from '@/pages/403'


const ProfilePage: NextPage = () => {
const {authenticated} = useAuth()
	return authenticated ? <MyAccount /> : <Custom403 />
}

export default ProfilePage
