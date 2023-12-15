import {
	TAccountResponse,
	TAccountsParams,
	TCreateAccountPayload,
	TCreateAccountResponse,
	TUpdateAccountPayload
} from '@/store/slices/ledger/types'

import endpoints from './endpoints'

import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const createAccount = async (payload: TCreateAccountPayload): Promise<TCreateAccountResponse | unknown> => {
	return (await axiosInstance.post(endpoints.LEDGER_ACCOUNTS, payload, {headers})).data
}

export const updateAccount = async (
	id: string,
	payload: TUpdateAccountPayload
): Promise<TCreateAccountResponse | unknown> => {
	return (await axiosInstance.put(`${endpoints.LEDGER_ACCOUNTS}/${id}`, payload, {headers})).data
}

export const deleteAccount = async (id: string): Promise<void> => {
	return (await axiosInstance.delete(`${endpoints.LEDGER_ACCOUNTS}/${id}`, {headers})).data
}

export const deleteAccounts = async (ids: string[]): Promise<void> => {
	const promises = ids.map(async (id) => await deleteAccount(id))
	await Promise.all(promises)
}

export const getAccounts = async (params: TAccountsParams): Promise<TCreateAccountResponse | unknown> => {
	const {data, headers: _headers} = await axiosInstance.get(endpoints.LEDGER_ACCOUNTS, {params, headers})

	return {
		data,
		total_count: _headers['x-total-count'] | 0
	}
}

export const getAccount = async (id: string): Promise<TAccountResponse | unknown> => {
	return (await axiosInstance.get(`${endpoints.LEDGER_ACCOUNTS}/${id}`, {headers})).data
}

const ledgerApi = {
	createAccount,
	deleteAccount,
	deleteAccounts,
	getAccount,
	getAccounts,
	updateAccount
}

export default ledgerApi
