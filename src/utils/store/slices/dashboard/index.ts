import {StateCreator} from 'zustand'

import dashboardApi from '@/apis/dashboard'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {TDashboardResponse, TDashboardSlice} from './types'

const ledgerSlice: StateCreator<TDashboardSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	dashboard: null,
	getDashboard: async () => {
		set((state) => ({...state, loading: true}))

		try {
			const dashboard = (await dashboardApi.getDashboard()) as TDashboardResponse

			if (isEmpty(dashboard)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, dashboard}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TDashboardSlice} from './types'

export default ledgerSlice
