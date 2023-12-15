import {TGenerateQRCodePayload, TGenerateQRCodeResponse} from '@/store/slices/paynow/types'

import endpoints from './endpoints'

import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const generateQRCode = async (payload: TGenerateQRCodePayload): Promise<TGenerateQRCodeResponse | unknown> => {
	return (await axiosInstance.post(endpoints.PAYNOW_QR_CODE_GENERATE, payload, {headers})).data
}

const payNowApi = {
	generateQRCode
}

export default payNowApi
