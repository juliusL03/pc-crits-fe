import {TGetEventSchemaOptions} from '@/utils/store/slices/event/types'

import {axiosCustomURLInstance, getHeaders} from '.'

const headers = getHeaders()

const axiosInstance = axiosCustomURLInstance(`${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}/schemas`)

const eventApi = {
	getEventSchemaOptions: async (event: string): Promise<TGetEventSchemaOptions> => {
		return axiosInstance.get(`/${event}`, {headers})
	}
}

export default eventApi
