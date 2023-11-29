// import {Avatar, Dropdown, MenuProps, Typography} from 'antd'
// import {useRouter} from 'next/router'
// import {useCallback, useMemo} from 'react'

// import {useAuth} from '@/utils/context/auth-context'
// import useNotification, {ENotificationType} from '@/utils/hooks/useNotification'

// type TProps = {
// 	collapsed: boolean
// }

// const SidebarProfile: React.FC<TProps> = ({collapsed}) => {
// 	const {logout: onLogout} = useAuth()

// 	const {NotificationContextHolder, openNotification} = useNotification()
// 	const router = useRouter()

// 	const logout = useCallback(async () => {
// 		onLogout()

// 		openNotification(ENotificationType.Success, 'Logout succeeded')
// 		router.replace('/login')
// 	}, [onLogout, openNotification, router])

// 	const profileMenuItems: MenuProps['items'] = useMemo(() => {
// 		return [
// 			{
// 				key: 'logout',
// 				label: 'Logout',
// 				onClick: () => logout()
// 			}
// 		]
// 	}, [logout])

// 	return (
// 		<Dropdown menu={{items: profileMenuItems}} placement="top">
// 			<div className="flex cursor-pointer">
// 				{NotificationContextHolder}
// 				<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
// 				{!collapsed && (
// 					<div className="flex flex-col">
// 						<Typography.Text strong>Olivia Rhye</Typography.Text>
// 						<Typography.Text type="secondary">olivia@untitedui.com</Typography.Text>
// 					</div>
// 				)}
// 			</div>
// 		</Dropdown>
// 	)
// }

// export default SidebarProfile
