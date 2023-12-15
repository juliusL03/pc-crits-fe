import {TGetVirtualAccountListResponse} from '../store/slices/virtual-account/types'

import endpoints from './endpoints'


import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

const virtualAccountApi = {
	getVirtualAccountList: async (): Promise<TGetVirtualAccountListResponse> => {
		return (await axiosInstance.get(endpoints.VIRTUAL_ACCOUNT, {headers})).data
	}
}

export default virtualAccountApi
