import {
	TCreateInvoicePayload,
	TCreateInvoiceResponse,
	TGetInvoiceDataResponse,
	TGetInvoiceListParams,
	TGetInvoiceListResponse,
	TGetInvoiceResponse,
	TInvoicePayPayload,
	TUpdateInvoicePayload,
	TUpdateInvoiceResponse
} from '@/store/slices/invoice/types'

import {toISOStringSGT} from '../helpers/date'

import endpoints from './endpoints'

import {axiosCustomURLInstance,  axiosInstance, getHeaders} from '.'

const headers = getHeaders()
const axiosCustom = axiosCustomURLInstance(`${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}/v1/services`)

export const createInvoice = async (payload: TCreateInvoicePayload): Promise<TCreateInvoiceResponse> => {
	return await axiosCustom.post(endpoints.INVOICES_CREATE, payload, {headers})
}

export const payInvoice = async (payload: TInvoicePayPayload): Promise<TCreateInvoiceResponse | unknown> => {
	await axiosInstance.post(
		endpoints.TRANSACTIONS,
		{
			date: toISOStringSGT(new Date()),
			description: payload?.payment_note,
			transaction_number: 23234,
			debit_account: '',
			credit_account: '',
			workflows: [{type: 'yellow'}, {type: 'green'}],
			type: 'inward',
			amount: parseFloat(payload?.payment_amount.toString()),
			reconciled: true,
			deleted_at: '',
			created_at: toISOStringSGT(new Date()),
			updated_at: toISOStringSGT(new Date()),
			workflow: [{type: 'yellow'}, {type: 'green'}],
			source: 'virtual account',
			ext_invoice_id: payload?.ext_invoice_id,
			ext_virtual_account_id: payload?.virtual_account_id
		},
		{headers}
	)

	return (await axiosInstance.patch(`${endpoints.INVOICE}/${payload?.ext_invoice_id}`, {status: 'paid'}, {headers}))
		.data
}

export const getInvoice = async (id: string): Promise<TGetInvoiceResponse> => {
	return (await axiosCustom.get(`${endpoints.INVOICE}/${id}`, {headers})).data
}

export const getInvoiceData = async (id: string): Promise<TGetInvoiceDataResponse> => {
	return (await axiosInstance.get(`${endpoints.INVOICE}/${id}`, {headers})).data
}

export const getInvoiceList = async (params: TGetInvoiceListParams): Promise<TGetInvoiceListResponse> => {
	return (await axiosCustom.get(endpoints.INVOICE, {params, headers})).data
}

export const updateInvoice = async (
	id: string,
	payload: TUpdateInvoicePayload
): Promise<TUpdateInvoiceResponse> => {
	return (await axiosCustom.patch(`${endpoints.INVOICES_UPDATE}/${id}`, payload, {headers})).data
}

export const deleteInvoice = async (id: string): Promise<unknown> => {
	return (await axiosCustom.delete(`${endpoints.INVOICE}/${id}`, {headers})).data
}

export const deleteInvoices = async (ids: string[]): Promise<unknown> => {
	const promises = ids.map(async (id) => await deleteInvoice(id))
	await Promise.all(promises)
	return {success: true}
}

const invoiceApi = {
	createInvoice,
	deleteInvoice,
	deleteInvoices,
	getInvoice,
	getInvoiceData,
	updateInvoice,
	payInvoice,
	getInvoiceList
}

export default invoiceApi
