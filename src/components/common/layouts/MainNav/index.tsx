import {Layout} from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from './mainNav.module.scss'
// import Sidebar from '@/sections/Sidebar'
// import {getTitle} from '@/utils/helpers/title'

import Container from './Container'
import Header from '../../sections/Header'
import Content from './Content'
import clsx from 'clsx'
import Footer from '../../sections/Footer'
const title = 'PC crits: Shop with rare review'

type TProps = {
	children: React.ReactNode
	// bgColor?: string
}

const MainNav: React.FC<TProps> = ({children}) => {
	const router = useRouter()
	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
   <Header />
   <Container>
				<Content>{children}</Content>
			</Container>
   <Footer />
		</Layout>
	)
}

export default MainNav
