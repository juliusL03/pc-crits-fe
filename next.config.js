// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages:['antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker'],
 reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
 async redirects() {
		return [
			{
				source: '/pages',
				destination: '/',
				permanent: true
			}
		]
	},
 webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [{loader: '@svgr/webpack', options: {icon: true}}]
		})

		return config
	}
}

module.exports = nextConfig
