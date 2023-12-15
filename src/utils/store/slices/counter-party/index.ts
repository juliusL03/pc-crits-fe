import {StateCreator} from 'zustand'

import CounterPartiesApi from '@/utils/apis/counter-parties'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {isEmpty} from '@/utils/helpers/object'

import {
	TCounterPartiesParams,
	TCounterPartiesResponse,
	TCounterPartyResponse,
	TCounterPartySlice,
	TCreateCounterPartyResponse,
	TUpdateCounterPartyPayload
} from './types'

const counterPartySlice: StateCreator<TCounterPartySlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	totalCounterPartyCount: 0,
	CounterParty: null,
	CounterParties: [],
	CounterPartyCreated: false,
	CounterPartyUpdated: false,
	CounterPartyDeleted: false,
	CounterPartyAlreadyUpdated: false,
	CounterPartySynced: false,
	CounterPartyUnsynced: false,
	getCounterParty: async (id: string) => {
		set((state) => ({...state, loading: true}))

		try {
			const CounterParty = (await CounterPartiesApi.getCounterParty(id)) as TCounterPartyResponse

			if (isEmpty(CounterParty)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, CounterParty}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getCounterParties: async (params: TCounterPartiesParams) => {
		set((state) => ({...state, loading: true}))

		try {
			const {data: CounterParties, total_count: totalCounterPartyCount} = (await CounterPartiesApi.getCounterParties(
				params
			)) as TCounterPartiesResponse

			if (isEmpty(CounterParties)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, CounterParties, totalCounterPartyCount}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	createCounterParty: async (payload) => {
		set((state) => ({...state, loading: true, CounterPartyCreated: false}))

		try {
			const CounterParty = (await CounterPartiesApi.createCounterParty(payload)) as TCreateCounterPartyResponse

			if (isEmpty(CounterParty)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, CounterParty: CounterParty, CounterPartyCreated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateCounterParty: async (id: string, payload: TUpdateCounterPartyPayload) => {
		set((state) => ({...state, loading: true, CounterPartyUpdated: false}))

		try {
			const CounterParty = (await CounterPartiesApi.updateCounterParty(id, payload)) as TCounterPartyResponse

			if (isEmpty(CounterParty)) {
				set((state) => ({...state, loading: false}))
			}

			set((state) => ({...state, loading: false, CounterParty, CounterPartyUpdated: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteCounterParty: async (id: string) => {
		set((state) => ({...state, loading: true, CounterPartyDeleted: false}))

		try {
			await CounterPartiesApi.deleteCounterParty(id)

			set((state) => ({...state, loading: false, CounterPartyDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteCounterParties: async (ids: string[]) => {
		set((state) => ({...state, loading: true, CounterPartyDeleted: false}))

		try {
			await CounterPartiesApi.deleteCounterParties(ids)

			set((state) => ({...state, loading: false, CounterPartyDeleted: true}))
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	setCounterPartyCreated: (value: boolean) => {
		set((state) => ({...state, CounterPartyCreated: value}))
	},
	setCounterPartyDeleted: (value: boolean) => {
		set((state) => ({...state, CounterPartyDeleted: value}))
	},
	setCounterPartyUpdated: (value: boolean) => {
		set((state) => ({...state, CounterPartyUpdated: value}))
	}
})

export {type TCounterPartySlice} from './types'

export default counterPartySlice
