import {Menu} from 'antd'
import {useCallback} from 'react'

import {Props} from './types'


const HNav: React.FC<Props> = ({router, navItems}) => {
	const getKeysFromRoute = useCallback(() => {

		if (router.pathname === '/' || router.pathname === '') return ['/']

		const components = router.pathname.split('/')
		const result: string[] = []

		for (let i = components.length; i > 0; i--) {
			result.push(components.slice(0, i).join('/'))
		}

		return result
	}, [router.pathname])

	return (
		<Menu
			defaultSelectedKeys={getKeysFromRoute()}
			defaultOpenKeys={getKeysFromRoute()}
			items={navItems}
		/>
	)
}

export default HNav
