import {TOmittedFields, TSliceError} from '@/models/common'
import {TCustomer} from '@/utils/models/customer'

export type TCustomersParams = {
	_page?: number | null
	_limit?: number | null
	name_like?: string | null
	email_like?: string | null
	_sort?: string | null
	_order?: string | null
}

export type TCreateCustomerPayload = Omit<TCustomer, TOmittedFields>
export type TUpdateCustomerPayload = Omit<TCustomer, TOmittedFields>
export type TCustomerResponse = TCustomer
export type TCustomersResponse = {data: TCustomer[]; total_count: number}
export type TCreateCustomerResponse = TCustomer
export type TDeleteCustomerResponse = TCustomer

export type TCustomerSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	customer: TCustomer | null
	customerCreated: boolean
	customerUpdated: boolean
	customerDeleted: boolean
	customerAlreadyUpdated: boolean
	customers: TCustomer[]
	totalCustomerCount: number
	createCustomer: (payload: TCreateCustomerPayload) => void
	deleteCustomer: (id: string) => void
	deleteCustomers: (ids: string[]) => void
	getCustomer: (id: string) => void
	updateCustomer: (id: string, payload: TUpdateCustomerPayload) => void
	getCustomers: (payload: TCustomersParams) => void
	setCustomerCreated: (value: boolean) => void
	setCustomerUpdated: (value: boolean) => void
	setCustomerDeleted: (value: boolean) => void
}
