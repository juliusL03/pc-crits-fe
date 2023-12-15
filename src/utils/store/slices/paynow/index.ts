import {HttpStatusCode} from 'axios'
import {StateCreator} from 'zustand'

import paynowApi from '@/apis/paynow'
import {getAxiosError} from '@/utils/helpers/error-handler'

import {TGenerateQRCodeResponse, TPaynowSlice} from './types'

const paynowSlice: StateCreator<TPaynowSlice> = (set) => ({
	loading: false,
	error: null,
	message: null,
	qrCode: null,
	generateQRCode: async (payload) => {
		set((state) => ({...state, loading: true}))

		try {
			const response = (await paynowApi.generateQRCode(payload)) as TGenerateQRCodeResponse

			if (response.status === HttpStatusCode.Ok) {
				const {data: qrCode} = response
				set((state) => ({...state, loading: false, qrCode}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	}
})

export {type TPaynowSlice} from './types'

export default paynowSlice
