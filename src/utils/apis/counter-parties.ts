import {
	TCounterPartiesParams,
	TCounterPartyResponse,
	TCreateCounterPartyPayload,
	TCreateCounterPartyResponse,
	TDeleteCounterPartyResponse,
	TUpdateCounterPartyPayload
} from '../store/slices/counter-party/types'

import endpoints from './endpoints'


import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const createCounterParty = async (
	payload: TCreateCounterPartyPayload
): Promise<TCreateCounterPartyResponse | unknown> => {
	return (await axiosInstance.post(endpoints.COUNTER_PARTIES, payload, {headers})).data
}

export const getCounterParty = async (id: string): Promise<TCounterPartyResponse | unknown> => {
	return (await axiosInstance.get(`${endpoints.COUNTER_PARTIES}/${id}`, {headers})).data
}

export const getCounterParties = async (params: TCounterPartiesParams): Promise<TCreateCounterPartyResponse | unknown> => {
	const {data, headers: _headers} = await axiosInstance.get(endpoints.COUNTER_PARTIES, {params, headers})

	return {
		data,
		total_count: _headers['x-total-count'] | 0
	}
}

export const updateCounterParty = async (
	id: string,
	payload: TUpdateCounterPartyPayload
): Promise<TCreateCounterPartyResponse | unknown> => {
	return (await axiosInstance.put(`${endpoints.COUNTER_PARTIES}/${id}`, payload, {headers})).data
}

export const deleteCounterParty = async (id: string): Promise<TDeleteCounterPartyResponse | unknown> => {
	return (await axiosInstance.delete(`${endpoints.COUNTER_PARTIES}/${id}`, {headers})).data
}

export const deleteCounterParties = async (ids: string[]): Promise<TDeleteCounterPartyResponse | unknown> => {
	const promises = ids.map(async (id) => await deleteCounterParty(id))
	await Promise.all(promises)
	return {success: true}
}

const CounterPartiesApi = {
	createCounterParty,
	deleteCounterParty,
	deleteCounterParties,
	getCounterParty,
	getCounterParties,
	updateCounterParty
}

export default CounterPartiesApi
