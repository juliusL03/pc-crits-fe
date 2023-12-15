import {HttpStatusCode} from 'axios'
import {StateCreator} from 'zustand'

import eventApi from '@/utils/apis/event'
import {getAxiosError} from '@/utils/helpers/error-handler'

import {TEventSlice} from './types'

const eventSlice: StateCreator<TEventSlice> = (set) => ({
	loadingEvent: false,
	error: null,
	message: null,
	eventSchemaOptions: [],
	getEventSchemaOptions: async (event: string) => {
		set((state) => ({...state, loadingEvent: true, eventSchemaOptions: []}))

		try {
			const {status, data: eventSchemaOptions} = await eventApi.getEventSchemaOptions(event)

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loadingEvent: false, eventSchemaOptions}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loadingEvent: false, error: errorMessage}))
		}
	}
})

export {type TEventSlice} from './types'

export default eventSlice
