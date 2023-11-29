import {TAccount} from './ledger'
import {TQRCode} from './paynow'

export type TInvoiceDataParts = {
	ledger_source_account: TAccount
	issuer: any
	recipient: any
	ledger_destination_account: TAccount
	paynow_qrcode: TQRCode
}

export type TLineItem = {
	_id?: string
	description: string
	price: number
	ext_product_product_id?: string
}

export type TRecipient = {
	name: string
	email: string
	phone: string
	company_name: string
	company_address_line_1: string
	company_address_line_2: string
	company_address_state: string
	company_address_zip: string
	company_address_country: string
}

export type TIssuer = {
	company_name: string
	company_logo: string
	company_address_line_1: string
	company_address_line_2: string
	company_address_state: string
	company_address_zip: string
	company_address_country: string
}

export enum EInvoiceStatus {
	Paid = 'paid',
	Unpaid = 'unpaid',
	Cancelled = 'cancelled'
}

export enum EInvoiceType {
	Receivable = 'receivable',
	Payable = 'payable'
}

export type TInvoice = {
	_id: string
	name: string
	type: EInvoiceType
	note: string
	discount: number
	reference_number: number
	description: string
	total_amount: number
	ext_org_id?: string
	ext_paynow_qrcode_id?: string
	ext_ledger_source_account_id?: string
	ext_ledger_destination_account_id?: string
	line_items: TLineItem[]
	ext_customer_id: string
	customer: TRecipient
	ext_account_id: string
	status: EInvoiceStatus
	enable_stripe_payment: boolean
	enable_paynow_payment: boolean
	deleted_at: string
	created_at: string
	expired_at: string
	updated_at: string
	ext_virtual_account_id?: string
}

export type TInvoiceData = TInvoice & TInvoiceDataParts
