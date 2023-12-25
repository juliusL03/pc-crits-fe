import {Layout} from 'antd'
import Head from 'next/head'
import Container from './Container'
import Header from '../../sections/Header'
import Content from './Content'
import Footer from '../../sections/Footer'
const title = 'PC crits: Shop with rare review'

type TProps = {
	children: React.ReactNode
}

const MainNav: React.FC<TProps> = ({children}) => {
	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
   <Container>
   <Header />
				<Content>{children}</Content>
    <Footer />
			</Container>
		</Layout>
	)
}

export default MainNav
