import {TGetXeroIntegrationResponse, TIntegrateXeroResponse, TXero} from '@/store/slices/integration/types'

import {nowStr} from '../helpers/date'

import endpoints from './endpoints'


import {axiosInstance, getHeaders} from '.'

const headers = getHeaders()

export const integrateXero = async (payload: TXero): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.post(
			endpoints.INTEGRATIONS_XERO,
			{
				...payload,
				status: 'active',
				active_tenant: '2e0acb1e-3c6a-4a56-b532-167fb14c9a0c',
				token_set: {
					id_token:
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
					access_token:
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
					expires_in: 3600,
					token_type: 'Bearer',
					refresh_token: 'tGzv3JOkF0XG5Qx2TlKWIA',
					scope: ['email', 'profile', 'openid', 'accounting.transactions', 'offline_access']
				},
				accounts_synced: false,
				invoices_synced: false,
				customers_synced: false
			},
			{headers}
		)
	).data
}

export const syncXeroAccounts = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(endpoints.INTEGRATIONS_XERO, {accounts_synced: true, updated_at: nowStr()}, {headers})
	).data
}

export const unsyncXeroAccounts = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(
			endpoints.INTEGRATIONS_XERO,
			{accounts_synced: false, updated_at: nowStr()},
			{headers}
		)
	).data
}

export const syncXeroCounterParties = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(endpoints.INTEGRATIONS_XERO, {counter_parties_synced: true, updated_at: nowStr()}, {headers})
	).data
}

export const unsyncXeroCounterParties = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(
			endpoints.INTEGRATIONS_XERO,
			{counter_parties_synced: false, updated_at: nowStr()},
			{headers}
		)
	).data
}

export const syncXeroInvoices = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(endpoints.INTEGRATIONS_XERO, {invoices_synced: true, updated_at: nowStr()}, {headers})
	).data
}

export const syncXeroCustomers = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(endpoints.INTEGRATIONS_XERO, {customers_synced: true, updated_at: nowStr()}, {headers})
	).data
}

export const unsyncXeroInvoices = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(
			endpoints.INTEGRATIONS_XERO,
			{invoices_synced: false, updated_at: nowStr()},
			{headers}
		)
	).data
}

export const unsyncXeroCustomers = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(
			endpoints.INTEGRATIONS_XERO,
			{customers_synced: false, updated_at: nowStr()},
			{headers}
		)
	).data
}

export const getXeroIntegration = async (): Promise<TGetXeroIntegrationResponse | unknown> => {
	return (await axiosInstance.get(endpoints.INTEGRATIONS_XERO)).data
}

export const removeXeroIntegration = async (): Promise<TIntegrateXeroResponse | unknown> => {
	return (
		await axiosInstance.patch(
			endpoints.INTEGRATIONS_XERO,
			{client_id: null, ext_account_id: null, client_secret: null, status: 'inactive'},
			{headers}
		)
	).data
}

const integrationApi = {
	integrateXero,
	getXeroIntegration,
	removeXeroIntegration,
	syncXeroAccounts,
	unsyncXeroAccounts,
	syncXeroInvoices,
	unsyncXeroInvoices,
	syncXeroCustomers,
	unsyncXeroCustomers,
	syncXeroCounterParties,
	unsyncXeroCounterParties
}

export default integrationApi
