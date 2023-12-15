import {
	TGetBillResponse,
	TGetBillsParams,
	TGetBillsResponse,
	TPayBillPayload,
	TPayBillResponse,
	TUploadBillPayload,
	TUploadBillResponse
} from '../store/slices/bill/types'
import {toISOStringSGT} from '../helpers/date'

import endpoints from './endpoints'

import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

const billApi = {
	getBills: async (params: TGetBillsParams): Promise<TGetBillsResponse> => {
		return axiosInstance.get(endpoints.BILLS, {params, headers})
	},
	getBill: async (id: string): Promise<TGetBillResponse> => {
		return axiosInstance.get(`${endpoints.BILL}/${id}`, {headers})
	},
	uploadNewBill: async (payload: TUploadBillPayload): Promise<TUploadBillResponse> => {
		return (await axiosInstance.post(`${endpoints.BILL}`, payload)).data
	},
	payBill: async (payload: TPayBillPayload): Promise<TPayBillResponse> => {
		const lastRecord =  (await axiosInstance.get(endpoints.INVOICES, {headers})).data
		const newTransactionNUmber = lastRecord?.slice(-1)[0].transaction_number + 1
		
		await axiosInstance.post(
			endpoints.TRANSACTIONS,
			{
				date: toISOStringSGT(new Date()),
				description: payload?.payment_note,
				transaction_number: newTransactionNUmber,
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
		const virtualAccount = (await axiosInstance.get(`${endpoints.VIRTUAL_ACCOUNT}/${payload?.virtual_account_id}`, {headers})).data

		await axiosInstance.patch(`${endpoints.VIRTUAL_ACCOUNT}/${payload.virtual_account_id}`, {amount: virtualAccount.amount -  parseFloat(payload?.payment_amount?.toString())})
  
		return (await axiosInstance.patch(`${endpoints.BILL}/${payload.ext_invoice_id}`, {status: 'paid'})).data
	},
	deleteBills: async (id: string) => {
		return (await axiosInstance.delete(`${endpoints.BILL}/${id}`, {headers})).data
	}
}

export default billApi
