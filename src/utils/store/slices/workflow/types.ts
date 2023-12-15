import {AxiosResponse} from 'axios'
import {Edge, EdgeChange, Node, NodeChange} from 'reactflow'

import {TDefaultListResponseData, TDefaultResponseData, TOmittedFields, TSliceError} from '@/utils/models/common'
import {TNodeData, TWorkflow, TWorkflowStatus} from '@/utils/models/workflow'

export type TGetWorkflowsParams = {
	_page?: number
	_limit?: number
	_sort?: string
	_order?: 'asc' | 'desc'
	status?: TWorkflowStatus
}

export type TCreateUpdateWorkflowPayload = Omit<TWorkflow, TOmittedFields>
export type TGetWorkflowsResponse = AxiosResponse<TDefaultListResponseData<TWorkflow>>
export type TGetWorkflowResponse = AxiosResponse<TDefaultResponseData<TWorkflow>>

export type TWorkflowSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	autoSaved: boolean
	workflows: TWorkflow[]
	workflow: TWorkflow | null
	totalWorkflows: number
	lastExecutedParams: TGetWorkflowsParams | null
	workflowName: string
	activeNodeId: string
	nodes: Node[]
	edges: Edge[]
	visibleTriggerDrawer: boolean
	visibleTaskDrawer: boolean
	createWorkflow: (payload: TCreateUpdateWorkflowPayload) => void
	updateWorkflow: (id: string, payload: TCreateUpdateWorkflowPayload) => void
	getWorkflows: (params: TGetWorkflowsParams) => void
	getWorkflow: (id: string) => void
	deleteWorkflows: (ids: string[]) => void
	setWorkflowName: (newName: string) => void
	clearWorkflowState: () => void
	onNodesChange: (changes: NodeChange[]) => void
	onEdgesChange: (changes: EdgeChange[]) => void
	setNodes: (nodes: Node<TNodeData>[]) => void
	setEdges: (edges: Edge[]) => void
	setActiveNodeId: (id: string) => void
	setTriggerDrawerVisibility: (visible: boolean) => void
	setTaskDrawerVisibility: (visible: boolean) => void
	updateNodeData: (nodeId: string, rawNodeData: string) => void
	refetch: () => void
	triggerSaveWorkflow: () => void
}
