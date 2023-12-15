import {StateCreator} from 'zustand'

import virtualAccountApi from '@/utils/apis/virtual-account'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'
import {EVirtualAccountType} from '@/utils/models/virtual-account'

import {TGetVirtualAccountListResponse, TVirtualAccountSlice} from './types'

const virtualAccountSlice: StateCreator<TVirtualAccountSlice> = (set) => ({
	loading: false,
	virtualAccount: null,
	virtualAccounts: [],
	getVirtualAccountList: async () => {
		set((state) => ({...state, loading: true, error: null}))

		try {
			const virtualAccounts = (await virtualAccountApi.getVirtualAccountList()) as TGetVirtualAccountListResponse

			if (isEmpty(virtualAccounts)) {
				set((state) => ({...state, loading: false}))
				return
			}

			const virtualAccount = virtualAccounts.find((va) => va.type === EVirtualAccountType.Default)

			set((state) => ({...state, loading: false, virtualAccounts, virtualAccount: virtualAccount ?? null}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TVirtualAccountSlice} from './types'

export default virtualAccountSlice
