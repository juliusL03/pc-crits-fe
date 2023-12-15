import {StateCreator} from 'zustand'

import transactionsApi from '@/utils/apis/transaction'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {
	TCreateTransactionResponse,
	TTransactionResponse,
	TTransactionSlice,
	TTransactionsParams,
	TTransactionsResponse,
	TUpdateTransactionPayload
} from './types'

const transactionSlice: StateCreator<TTransactionSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	transaction_total_count: 0,
	transaction: null,
	transactions: [],
	transactionCreated: false,
	transactionUpdated: false,
	transactionDeleted: false,
	setTransactionCreated: (value) => {
		set((state) => ({...state, transactionCreated: value}))
	},
	setTransactionDeleted: (value) => {
		set((state) => ({...state, transactionDeleted: value}))
	},
	setTransactionUpdated: (value) => {
		set((state) => ({...state, transactionUpdated: value}))
	},
	getTransaction: async (id: string) => {
		set((state) => ({...state, loading: true}))

		try {
			const transaction = (await transactionsApi.getTransaction(id)) as TTransactionResponse

			if (isEmpty(transaction)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, transaction}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getTransactions: async (params: TTransactionsParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data: transactions, total_count: totalCount} = (await transactionsApi.getTransactions(
				params
			)) as TTransactionsResponse

			if (isEmpty(transactions)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, transactions, transaction_total_count: totalCount}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	createTransaction: async (payload) => {
		set((state) => ({...state, loading: true, transactionCreated: false}))

		try {
			const transaction = (await transactionsApi.createTransaction(payload)) as TCreateTransactionResponse

			if (isEmpty(transaction)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, transaction: transaction, transactionCreated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateTransaction: async (id: string, payload: TUpdateTransactionPayload) => {
		set((state) => ({...state, loading: true, transactionUpdated: false}))

		try {
			const transaction = (await transactionsApi.updateTransaction(id, payload)) as TTransactionResponse

			if (isEmpty(transaction)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, transaction, transactionUpdated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteTransaction: async (id: string) => {
		set((state) => ({...state, loading: true, transactionDeleted: false}))

		try {
			await transactionsApi.deleteTransaction(id)

			set((state) => ({...state, loading: false, transactionDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteTransactions: async (ids: string[]) => {
		set((state) => ({...state, loading: true, transactionDeleted: false}))

		try {
			await transactionsApi.deleteTransactions(ids)

			set((state) => ({...state, loading: false, transactionDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateReconcileTransaction: async (id: string) => {
		set((state) => ({...state, loading: true, transactionUpdated: false, transactionAlreadyUpdated: false}))
		try {
			const transaction = (await transactionsApi.getTransaction(id)) as TTransactionResponse
			const isReconciled = transaction?.reconciled

			if (!isReconciled) {
				const transaction = (await transactionsApi.updateReconcileTransaction(id)) as TTransactionResponse

				if (isEmpty(transaction)) {
					set((state) => ({...state, loading: false}))
				}

				set((state) => ({
					...state,
					loading: false,
					transaction,
					transactionUpdated: true
				}))
			} else {
				set((state) => ({
					...state,
					loading: false,
					transaction,
					transactionUpdated: false
				}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateReconcileTransactions: async (ids: string[]) => {
		set((state) => ({...state, loading: true, transactionUpdated: false}))

		try {
			const transaction = (await transactionsApi.updateReconcileTransactions(ids)) as TTransactionResponse

			if (isEmpty(transaction)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, transaction: transaction, transactionUpdated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TTransactionSlice} from './types'

export default transactionSlice
