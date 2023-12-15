import {
	TCreateTransactionPayload,
	TCreateTransactionResponse,
	TDeleteTransactionResponse,
	TTransactionResponse,
	TTransactionsParams,
	TUpdateTransactionPayload
} from '../store/slices/transaction/types'

import endpoints from './endpoints'


import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const createTransaction = async (
	payload: TCreateTransactionPayload
): Promise<TCreateTransactionResponse | unknown> => {
	return (await axiosInstance.post(endpoints.TRANSACTIONS, payload, {headers})).data
}

export const getTransaction = async (id: string): Promise<TTransactionResponse | unknown> => {
	return (await axiosInstance.get(`${endpoints.TRANSACTIONS}/${id}`, {headers})).data
}

export const getTransactions = async (params: TTransactionsParams): Promise<TCreateTransactionResponse | unknown> => {
	const {data, headers: _headers} = await axiosInstance.get(endpoints.TRANSACTIONS, {params, headers})
	data.total_count = _headers['x-total-count'] | 0

	return {
		data,
		total_count: _headers['x-total-count'] | 0
	}
}

export const updateTransaction = async (
	id: string,
	payload: TUpdateTransactionPayload
): Promise<TCreateTransactionResponse | unknown> => {
	return (await axiosInstance.patch(`${endpoints.TRANSACTIONS}/${id}`, payload, {headers})).data
}

export const updateReconcileTransaction = async (id: string): Promise<TCreateTransactionResponse | unknown> => {
	return (await axiosInstance.patch(`${endpoints.TRANSACTIONS}/${id}`, {reconciled: true}, {headers})).data
}

export const updateReconcileTransactions = async (ids: string[]): Promise<TCreateTransactionResponse | unknown> => {
	const promises = ids.map((id) => updateReconcileTransaction(id))
	await Promise.all(promises)
	return {success: true}
}

export const deleteTransaction = async (id: string): Promise<TDeleteTransactionResponse | unknown> => {
	return (await axiosInstance.delete(`${endpoints.TRANSACTIONS}/${id}`, {headers})).data
}

export const deleteTransactions = async (ids: string[]): Promise<TDeleteTransactionResponse | unknown> => {
	const promises = ids.map(async (id) => await deleteTransaction(id))
	await Promise.all(promises)
	return {success: true}
}

const transactionsApi = {
	createTransaction,
	deleteTransactions,
	deleteTransaction,
	getTransaction,
	getTransactions,
	updateTransaction,
	updateReconcileTransaction,
	updateReconcileTransactions
}

export default transactionsApi
