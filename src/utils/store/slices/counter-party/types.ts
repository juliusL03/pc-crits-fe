import {TOmittedFields, TSliceError} from '@/models/common'
import {TCounterParty} from '@/utils/models/counter-party'

export type TCounterPartiesParams = {
	_page?: number | null
	_limit?: number | null
	name_like?: string | null
	email_like?: string | null
	_sort?: string | null
	_order?: string | null
}

export type TCreateCounterPartyPayload = Omit<TCounterParty, TOmittedFields>
export type TUpdateCounterPartyPayload = Omit<TCounterParty, TOmittedFields>
export type TCounterPartyResponse = TCounterParty
export type TCounterPartiesResponse = {data: TCounterParty[]; total_count: number}
export type TCreateCounterPartyResponse = TCounterParty
export type TDeleteCounterPartyResponse = TCounterParty

export type TCounterPartySlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	CounterParty: TCounterParty | null
	CounterPartyCreated: boolean
	CounterPartyUpdated: boolean
	CounterPartyDeleted: boolean
	CounterPartyAlreadyUpdated: boolean
	CounterParties: TCounterParty[]
	totalCounterPartyCount: number
	createCounterParty: (payload: TCreateCounterPartyPayload) => void
	deleteCounterParty: (id: string) => void
	deleteCounterParties: (ids: string[]) => void
	getCounterParty: (id: string) => void
	updateCounterParty: (id: string, payload: TUpdateCounterPartyPayload) => void
	getCounterParties: (payload: TCounterPartiesParams) => void
	setCounterPartyCreated: (value: boolean) => void
	setCounterPartyUpdated: (value: boolean) => void
	setCounterPartyDeleted: (value: boolean) => void
}
