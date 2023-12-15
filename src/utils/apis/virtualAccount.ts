import {TGetVirtualAccountListResponse} from '../store/slices/virtual-account/types'

import endpoints from './endpoints'

import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const getVirtualAccount = async (id: string | undefined): Promise<TGetVirtualAccountListResponse> => {
	return (await axiosInstance.get(`${endpoints.VIRTUAL_ACCOUNTS}/${id}`, {headers})).data
}

const virtualAccountApi = {
	getVirtualAccount
}

export default virtualAccountApi
