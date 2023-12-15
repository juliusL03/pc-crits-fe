import {StateCreator} from 'zustand'

import ledgerApi from '@/apis/ledger'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {
	TAccountResponse,
	TAccountsParams,
	TAccountsResponse,
	TCreateAccountResponse,
	TLedgerSlice,
	TUpdateAccountPayload
} from './types'

const ledgerSlice: StateCreator<TLedgerSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	totalCount: 0,
	accountCreated: false,
	accountUpdated: false,
	accountDeleted: false,
	account: null,
	accounts: [],
	createAccount: async (payload) => {
		set((state) => ({...state, loading: true, accountCreated: false}))

		try {
			const account = (await ledgerApi.createAccount(payload)) as TCreateAccountResponse

			if (isEmpty(account)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, account: account, accountCreated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteAccount: async (id: string) => {
		set((state) => ({...state, loading: true, accountDeleted: false}))

		try {
			await ledgerApi.deleteAccount(id)

			set((state) => ({...state, loading: false, accountDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteAccounts: async (ids: string[]) => {
		set((state) => ({...state, loading: true, accountDeleted: false}))

		try {
			await ledgerApi.deleteAccounts(ids)

			set((state) => ({...state, loading: false, accountDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getAccount: async (id: string) => {
		set((state) => ({...state, loading: true}))

		try {
			const account = (await ledgerApi.getAccount(id)) as TAccountResponse

			if (isEmpty(account)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, account}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateAccount: async (id: string, payload: TUpdateAccountPayload) => {
		set((state) => ({...state, loading: true, accountUpdated: false}))

		try {
			const account = (await ledgerApi.updateAccount(id, payload)) as TAccountResponse

			if (isEmpty(account)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, account, accountUpdated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getAccounts: async (params: TAccountsParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data: accounts, total_count: totalCount} = (await ledgerApi.getAccounts(params)) as TAccountsResponse

			if (isEmpty(accounts)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, accounts, totalCount}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TLedgerSlice} from './types'

export default ledgerSlice
