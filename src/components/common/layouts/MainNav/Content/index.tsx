import {Layout} from 'antd'
import React, {ReactNode} from 'react'
import styles from './content.module.scss'
import clsx from 'clsx'

type TProps = {
	children: ReactNode
}

const Content: React.FC<TProps> = ({children}) => {
	return <div className={clsx(styles.container)}>{children}</div>
}

export default Content
