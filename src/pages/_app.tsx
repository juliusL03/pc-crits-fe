import type {AppProps} from 'next/app'

// import '@/styles/globals.scss'
import AppProviders from '@/utils/context'

const App = ({Component, pageProps}: AppProps) => {
	return (
		<AppProviders>
			<Component {...pageProps} />
		</AppProviders>
	)
}

export default App
