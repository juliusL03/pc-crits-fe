import {AxiosResponse} from 'axios'

import {TSliceError} from '@/utils/models/common'
import {TEventSchemaOption} from '@/utils/models/event'

export type TGetEventSchemaOptions = AxiosResponse<TEventSchemaOption[]>

export type TEventSlice = {
	loadingEvent: boolean
	error: TSliceError
	message: string | null
	eventSchemaOptions: TEventSchemaOption[]
	getEventSchemaOptions: (event: string) => void
}
