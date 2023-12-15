import {StateCreator} from 'zustand'
import {HttpStatusCode} from 'axios'

import billApi from '@/apis/bill'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {TBill, TBillSLice, TGetBillsParams, TPayBillPayload, TUploadBillPayload} from './types'

const billSlice: StateCreator<TBillSLice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	bills: [],
	bill: null,
	totalBillsCount: 0,
	getBills: async (params: TGetBillsParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const response = await billApi.getBills(params)

			if (response.status === HttpStatusCode.Ok) {
				const {data: bills, headers} = response
				const totalBillsCount = parseInt(headers['x-total-count'])
				set((state) => ({...state, loading: false, bills: bills as TBill[], totalBillsCount}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getBill: async (id: string) => {
		set((state) => ({...state, loading: true}))

		try {
			const response = await billApi.getBill(id)

			if (response.status === HttpStatusCode.Ok) {
				const {data: bill} = response
				set((state) => ({...state, loading: false, bill}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	uploadNewBill: async (payloads: TUploadBillPayload[]) => {
		set((state) => ({...state, loading: true}))

		try {
			/* 
				TODO: should pass array of payloads instead of looping
			 	but since it's not possible on json-server this should be the solution for now
			*/
			const bills = await Promise.all(payloads.map((payload) => billApi.uploadNewBill(payload)))

			if (isEmpty(bills)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				bills: [...state.bills, ...bills],
				totalBillsCount: state.totalBillsCount + 1
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	payBill: async (payload: TPayBillPayload) => {
		set((state) => ({...state, loading: true}))

		try {
			const bill = await billApi.payBill(payload)

			if (isEmpty(bill)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({
				...state,
				loading: false,
				bills: [...state.bills.filter((e) => e._id !== payload.ext_invoice_id), {...bill}]
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteBills: async (ids: string[]) => {
		set((state) => ({...state, loading: true}))

		try {
			await Promise.all(ids.map((id) => billApi.deleteBills(id)))

			set((state) => ({
				...state,
				loading: false,
				bills: [...state.bills.filter((e) => !ids.includes(e._id))],
				totalBillsCount: [...state.bills.filter((e) => !ids.includes(e._id))].length
			}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export default billSlice
