import {
	TCreateUpdateWorkflowPayload,
	TGetWorkflowResponse,
	TGetWorkflowsParams,
	TGetWorkflowsResponse
} from '@/store/slices/workflow/types'

import endpoints from './endpoints'

import {axiosCustomURLInstance, getHeaders} from '.'

const headers = getHeaders()

const axiosInstance = axiosCustomURLInstance(`${process.env.NEXT_PUBLIC_GATEWAY_BASE_URL}/services`)

const workflowApi = {
	createWorkflow: async (payload: TCreateUpdateWorkflowPayload): Promise<TGetWorkflowResponse> => {
		return axiosInstance.post(endpoints.WORKFLOW, payload, {headers})
	},
	updateWorkflow: async (id: string, payload: TCreateUpdateWorkflowPayload): Promise<TGetWorkflowResponse> => {
		return axiosInstance.patch(`${endpoints.WORKFLOW}/${id}`, payload, {headers})
	},
	getWorkflows: async (params: TGetWorkflowsParams): Promise<TGetWorkflowsResponse> => {
		return axiosInstance.get(endpoints.WORKFLOW, {params, headers})
	},
	getWorkflow: async (id: string): Promise<TGetWorkflowResponse> => {
		return axiosInstance.get(`${endpoints.WORKFLOW}/${id}`, {headers})
	},
	deleteWorkflows: async (ids: string[]): Promise<TGetWorkflowResponse> => {
		return axiosInstance.delete(endpoints.WORKFLOW, {headers, data: {ids}})
	}
}

export default workflowApi
