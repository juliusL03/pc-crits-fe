/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import {HttpStatusCode} from 'axios'
import {applyEdgeChanges, applyNodeChanges, Edge, EdgeChange, Node, NodeChange} from 'reactflow'
import {StateCreator} from 'zustand'

import workflowApi from '@/utils/apis/workflow'
import {getAxiosError} from '@/utils/helpers/error-handler'
import {TNodeData} from '@/utils/models/workflow'

import {TCreateUpdateWorkflowPayload, TGetWorkflowsParams, TWorkflowSlice} from './types'

const workflowSlice: StateCreator<TWorkflowSlice> = (set, get) => ({
	loading: false,
	error: null,
	message: null,
	autoSaved: false,
	workflows: [],
	workflow: null,
	totalWorkflows: 0,
	lastExecutedParams: null,
	workflowName: '',
	activeNodeId: '',
	nodes: [],
	edges: [],
	visibleTriggerDrawer: false,
	visibleTaskDrawer: false,
	createWorkflow: async (payload: TCreateUpdateWorkflowPayload) => {
		set((state) => ({...state, loading: true, workflow: null}))

		try {
			const {status, data} = await workflowApi.createWorkflow(payload)
			const {data: workflow, message} = data

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, workflow, message}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	updateWorkflow: async (id: string, payload: TCreateUpdateWorkflowPayload) => {
		set((state) => ({...state, loading: true, workflow: null, autoSaved: true}))

		try {
			const {status, data} = await workflowApi.updateWorkflow(id, payload)
			const {data: workflow, message} = data

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, workflow, message, autoSaved: false}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage, autoSaved: false}))
		}
	},
	getWorkflows: async (params: TGetWorkflowsParams) => {
		set((state) => ({...state, loading: true, workflows: [], lastExecutedParams: params}))

		try {
			const {status, data} = await workflowApi.getWorkflows(params)

			const {data: workflows, message, total_count} = data

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, workflows, message, totalWorkflows: total_count}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	getWorkflow: async (id: string) => {
		set((state) => ({...state, loading: true, workflow: null, nodes: [], edges: []}))

		try {
			const {status, data} = await workflowApi.getWorkflow(id)
			const {data: workflow, message} = data
			const {name: workflowName, nodes, edges} = workflow

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, workflow, workflowName, nodes, edges, message}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	deleteWorkflows: async (ids: string[]) => {
		set((state) => ({...state, loading: true, workflow: null}))

		try {
			const {status, data} = await workflowApi.deleteWorkflows(ids)
			const {data: workflow, message} = data

			if (status === HttpStatusCode.Ok) {
				set((state) => ({...state, loading: false, workflow, message}))
			}
		} catch (error) {
			const errorMessage = getAxiosError(error)
			set((state) => ({...state, loading: false, error: errorMessage}))
		}
	},
	triggerSaveWorkflow: () => {
		get().updateWorkflow(get().workflow?._id as string, {
			name: get().workflowName,
			nodes: get().nodes,
			edges: get().edges
		})
	},
	setWorkflowName: (newName: string) => {
		set({workflowName: newName})
	},
	refetch: async () => {
		const lastExecutedParams = get().lastExecutedParams

		if (lastExecutedParams !== null) get().getWorkflows(lastExecutedParams)
	},
	clearWorkflowState: async () => {
		set((state) => ({...state, workflow: null}))
	},
	setActiveNodeId: (id: string) => {
		set({
			activeNodeId: id
		})
	},
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes)
		})
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges)
		})
	},
	setNodes: (nodes: Node<TNodeData>[]) => {
		set({nodes})
	},
	setEdges: (edges: Edge[]) => {
		set({edges})
	},
	setTriggerDrawerVisibility: (visible: boolean) => {
		set({
			visibleTriggerDrawer: visible
		})
	},
	setTaskDrawerVisibility: (visible: boolean) => {
		set({
			visibleTaskDrawer: visible
		})
	},

	updateNodeData: async (nodeId: string, rawNodeData: string) => {
		const newNodeData = JSON.parse(rawNodeData)

		set({
			nodes: get().nodes.map((node) => {
				return node.id === nodeId
					? {
							...node,
							data: {
								...node.data,
								...newNodeData
							}
					  }
					: node
			})
		})

		get().triggerSaveWorkflow()
	}
})

export {type TWorkflowSlice} from './types'

export default workflowSlice
