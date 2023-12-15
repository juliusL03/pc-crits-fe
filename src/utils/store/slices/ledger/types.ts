import {TOmittedFields, TSliceError} from '@/models/common'
import {TAccount} from '@/models/ledger'

export enum AccountType {
	Revenue = 'revenue',
	Asset = 'asset',
	Liability = 'liability',
	Expense = 'expense'
}

export type TAccountsParams = {
	_page?: number | null
	_limit?: number | null
	type?: AccountType | null
	name_like?: string | null
	_sort?: string | null
	_order?: 'asc' | 'desc' | null
}

export type TTransactionsParams = {
	_page?: number | null
	_limit?: number | null
	type?: AccountType | null
	name_like?: string | null
	_sort?: string | null
	_order?: string | null
}

export type TCreateAccountPayload = Omit<TAccount, TOmittedFields>
export type TUpdateAccountPayload = Omit<TAccount, TOmittedFields>
export type TAccountResponse = TAccount
export type TAccountsResponse = {data: TAccount[]; total_count: number}
export type TCreateAccountResponse = TAccount

export type TLedgerSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	account: TAccount | null
	accountCreated: boolean
	accountUpdated: boolean
	accountDeleted: boolean
	accounts: TAccount[]
	totalCount: number
	createAccount: (payload: TCreateAccountPayload) => void
	deleteAccount: (id: string) => void
	deleteAccounts: (ids: string[]) => void
	getAccount: (id: string) => void
	updateAccount: (id: string, payload: TAccount) => void
	getAccounts: (payload: TAccountsParams) => void
}
