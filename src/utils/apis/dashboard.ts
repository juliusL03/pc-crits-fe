import {TDashboardResponse} from '@/utils/store/slices/dashboard/types'

import endpoints from './endpoints'

import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const getDashboard = async (): Promise<TDashboardResponse | unknown> => {
	return (await axiosInstance.get(`${endpoints.DASHBOARD}/`, {headers})).data
}

const ledgerApi = {
	getDashboard
}

export default ledgerApi
