import {TDefaultListResponse, TDefaultResponse, TOmittedFields, TSliceError} from '@/utils/models/common'
import {EInvoiceStatus, TInvoice} from '@/utils/models/invoice'

export type TBill = TInvoice

export type TGetBillsParams = {
	_page?: number
	_limit?: number
	_sort?: string
	_order?: 'asc' | 'desc'
	status?: EInvoiceStatus
	description_like?: string
	reference_number_like?: string
}

export type TUploadBillPayload = Omit<TBill, TOmittedFields>

export type TGetBillsResponse = TDefaultListResponse<TBill>
export type TGetBillResponse = TDefaultResponse<TBill>
export type TUploadBillResponse = TBill

export type TPayBillPayload = {
	ext_invoice_id: string | undefined
	payment_amount: number
	currency: string
	payment_date: string
	payment_note: string
	virtual_account_id?: string
	bank_account_id?: string
	type?: string
}
export type TPayBillResponse = TBill

export type TBillSLice = {
	loading: boolean
	error: TSliceError
	message: string | null
	bills: TBill[] | []
	bill: TBill | null
	totalBillsCount: number
	getBills: (payload: TGetBillsParams) => void
	uploadNewBill: (payload: TUploadBillPayload[]) => void
	getBill: (id: string) => void
	payBill: (payload: TPayBillPayload) => void
	deleteBills: (ids: string[]) => void
}
