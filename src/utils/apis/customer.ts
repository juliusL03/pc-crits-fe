import {
	TCreateCustomerPayload,
	TCreateCustomerResponse,
	TCustomerResponse,
	TCustomersParams,
	TDeleteCustomerResponse,
	TUpdateCustomerPayload
} from '../store/slices/customer/types'

import endpoints from './endpoints'


import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const createCustomer = async (
	payload: TCreateCustomerPayload
): Promise<TCreateCustomerResponse | unknown> => {
	return (await axiosInstance.post(endpoints.CUSTOMERS, payload, {headers})).data
}

export const getCustomer = async (id: string): Promise<TCustomerResponse | unknown> => {
	return (await axiosInstance.get(`${endpoints.CUSTOMERS}/${id}`, {headers})).data
}

export const getCustomers = async (params: TCustomersParams): Promise<TCreateCustomerResponse | unknown> => {
	const {data, headers: _headers} = await axiosInstance.get(endpoints.CUSTOMERS, {params, headers})

	return {
		data,
		total_count: _headers['x-total-count'] | 0
	}
}

export const updateCustomer = async (
	id: string,
	payload: TUpdateCustomerPayload
): Promise<TCreateCustomerResponse | unknown> => {
	return (await axiosInstance.put(`${endpoints.CUSTOMERS}/${id}`, payload, {headers})).data
}

export const deleteCustomer = async (id: string): Promise<TDeleteCustomerResponse | unknown> => {
	return (await axiosInstance.delete(`${endpoints.CUSTOMERS}/${id}`, {headers})).data
}

export const deleteCustomers = async (ids: string[]): Promise<TDeleteCustomerResponse | unknown> => {
	const promises = ids.map(async (id) => await deleteCustomer(id))
	await Promise.all(promises)
	return {success: true}
}

const customersApi = {
	createCustomer,
	deleteCustomers,
	deleteCustomer,
	getCustomer,
	getCustomers,
	updateCustomer
}

export default customersApi
