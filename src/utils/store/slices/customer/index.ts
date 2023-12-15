import {StateCreator} from 'zustand'

import customersApi from '@/utils/apis/customer'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {
	TCreateCustomerResponse,
	TCustomerResponse,
	TCustomerSlice,
	TCustomersParams,
	TCustomersResponse,
	TUpdateCustomerPayload
} from './types'

const customerSlice: StateCreator<TCustomerSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	totalCustomerCount: 0,
	customer: null,
	customers: [],
	customerCreated: false,
	customerUpdated: false,
	customerDeleted: false,
	customerAlreadyUpdated: false,
	customerSynced: false,
	customerUnsynced: false,
	getCustomer: async (id: string) => {
		set((state) => ({...state, loading: true}))

		try {
			const customer = (await customersApi.getCustomer(id)) as TCustomerResponse

			if (isEmpty(customer)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, customer}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getCustomers: async (params: TCustomersParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data: customers, total_count: totalCustomerCount} = (await customersApi.getCustomers(
				params
			)) as TCustomersResponse

			if (isEmpty(customers)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, customers, totalCustomerCount}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	createCustomer: async (payload) => {
		set((state) => ({...state, loading: true, customerCreated: false}))

		try {
			const customer = (await customersApi.createCustomer(payload)) as TCreateCustomerResponse

			if (isEmpty(customer)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, customer: customer, customerCreated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateCustomer: async (id: string, payload: TUpdateCustomerPayload) => {
		set((state) => ({...state, loading: true, customerUpdated: false}))

		try {
			const customer = (await customersApi.updateCustomer(id, payload)) as TCustomerResponse

			if (isEmpty(customer)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, customer, customerUpdated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteCustomer: async (id: string) => {
		set((state) => ({...state, loading: true, customerDeleted: false}))

		try {
			await customersApi.deleteCustomer(id)

			set((state) => ({...state, loading: false, customerDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteCustomers: async (ids: string[]) => {
		set((state) => ({...state, loading: true, customerDeleted: false}))

		try {
			await customersApi.deleteCustomers(ids)

			set((state) => ({...state, loading: false, customerDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	setCustomerCreated: (value: boolean) => {
		set((state) => ({...state, customerCreated: value}))
	},
	setCustomerDeleted: (value: boolean) => {
		set((state) => ({...state, customerDeleted: value}))
	},
	setCustomerUpdated: (value: boolean) => {
		set((state) => ({...state, customerUpdated: value}))
	}
})

export {type TCustomerSlice} from './types'

export default customerSlice
