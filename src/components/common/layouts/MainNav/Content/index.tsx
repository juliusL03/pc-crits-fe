import {Layout} from 'antd'
import React, {ReactNode} from 'react'

type TProps = {
	children: ReactNode
}

const {Content: AntContent} = Layout
const Content: React.FC<TProps> = ({children}) => {
	return <AntContent className="overflow-hidden">{children}</AntContent>
}

export default Content
