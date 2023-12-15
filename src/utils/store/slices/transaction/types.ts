import {TDefaultResponse, TOmittedFields, TSliceError} from '@/models/common'
import {TTransaction} from '@/utils/models/transaction'

export enum TransactionType {
	Revenue = 'revenue',
	Asset = 'asset',
	Liability = 'liability',
	Expense = 'expense'
}

export type TTransactionsParams = {
	_page?: number | null
	_limit?: number | null
	type?: TransactionType | null
	name_like?: string | null
	_sort?: string | null
	_order?: string | null
}

export type TCreateTransactionPayload = Omit<TTransaction, TOmittedFields>
export type TUpdateTransactionPayload = Omit<TTransaction, TOmittedFields>
export type TTransactionResponse = TTransaction
export type TTransactionsResponse = {data: TTransaction[]; total_count: number}
export type TCreateTransactionResponse = TTransaction
export type TDeleteTransactionResponse = TDefaultResponse<TTransaction>

export type TTransactionSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	transaction: TTransaction | null
	transactionCreated: boolean
	transactionUpdated: boolean
	transactionDeleted: boolean
	transactions: TTransaction[]
	transaction_total_count: number
	createTransaction: (payload: TCreateTransactionPayload) => void
	deleteTransaction: (id: string) => void
	deleteTransactions: (ids: string[]) => void
	getTransaction: (id: string) => void
	updateTransaction: (id: string, payload: TTransaction) => void
	getTransactions: (payload: TTransactionsParams) => void
	updateReconcileTransaction: (id: string) => void
	updateReconcileTransactions: (ids: string[]) => void
	setTransactionCreated: (value: boolean) => void
	setTransactionDeleted: (value: boolean) => void
	setTransactionUpdated: (value: boolean) => void
}
