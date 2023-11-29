import {Edge, Node} from 'reactflow'

export enum TNodeType {
	Trigger = 'trigger',
	Task = 'task',
	Placeholder = 'placeholder',
	End = 'end'
}

export enum TEdgeType {
	Placeholder = 'placeholder',
	Workflow = 'workflow'
}

export enum TNodeDataType {
	Task = 'task',
	Trigger = 'trigger',
	Placeholder = 'placeholder'
}

export enum TDelayType {
	DelayFor = 'delay-for',
	EndOf = 'end-of',
	Custom = 'custom'
}

export enum TEventType {
	Event = 'event',
	Schedule = 'schedule'
}

export enum TConditionType {
	All = 'all',
	Any = 'any'
}

export enum TWorkflowStatus {
	All = 'all',
	Active = 'active',
	InActive = 'inactive',
	Draft = 'draft'
}

type TPayment = {
	transfer_type: string
	counter_party: string
	schedule: string
	amount: string
}

export type TEmailConfig = {
	email: {
		from: string
		to: string
		subject: string
		content: string
	}
}

type TLLMInputOutput = {
	data_type: string
	value: string
}

export type TLLMConfig = {
	llm: {
		input: TLLMInputOutput[]
		output: TLLMInputOutput[]
		task_prompts: string
	}
}

type TStringOperator = 'known' | 'unknown' | 'equal' | 'notEqual' | 'matches' | 'notMatches'
type TNumericOperator = 'equal' | 'notEqual' | 'lessThan' | 'lessThanInclusive' | 'greaterThan' | 'greaterThanInclusive'
type TArrayOperator = 'in' | 'notIn' | 'contains' | 'doesNotContain'

type TOperator = TStringOperator | TNumericOperator | TArrayOperator

export type TCondition = {
	fact: string
	operator: TOperator
	value: string | number
}

type TBranchCondition = {
	name: string
	branch_node_id: string
	condition_type: TConditionType
	condition: TCondition[]
}

export type TConditionalConfig = {
	conditional: {
		branches: TBranchCondition[]
		fallback_node_id: string
	}
}

export type TApprovalConfig = {
	approval: {
		condition_type: TConditionType
		approvers: string[]
	}
}

type TDelayFor = {
	days: string
	hours: string
	minutes: string
}

export type TDelayConfig = {
	delay: {type: TDelayType; delay_for: TDelayFor; end_of: string; custom: string}
}

export type TTaskConfiguration = TEmailConfig | TLLMConfig | TConditionalConfig | TApprovalConfig | TDelayConfig

export type TLogo = {
	path: string
	alt: string
}

export type TTags = {
	label: string
	color: string
}

type TCommonNodeData = {
	title: string
	description: string
	logo?: TLogo | null
	tags?: TTags[] | null
	parentNodeId?: string
}

export type TTask = {
	order_no?: number
	type: TNodeDataType.Task
	channel?: string
	action?: string
	source?: string
	payment?: TPayment
	configuration?: TTaskConfiguration | null
} & TCommonNodeData

type TTriggerEvent = {
	name: string
	filter_invoice?: boolean
	condition_type?: TConditionType
	condition?: TCondition[]
}

type TTriggerSchedule = {
	date_time: string
}

export enum TCycle {
	Days = 'days',
	Weeks = 'weeks',
	Months = 'months',
	Years = 'years'
}

export enum TEndsOn {
	Never = 'never',
	Recurring = 'recurring',
	OnDate = 'on_date'
}

type TRepetition = {
	repeat: boolean
	cycle: TCycle
	occurence: number
	ends_on: TEndsOn
	count: number
	date_time: string
}

export type TTrigger = {
	order_no?: number
	type: TNodeDataType.Trigger
	event_type?: TEventType
	repetition?: TRepetition
	schedule?: TTriggerSchedule
	source?: string
	event?: TTriggerEvent
} & TCommonNodeData

export type TPlaceHolder = {
	order_no?: number
	type: TNodeDataType.Placeholder
}

export type TNodeData = TTrigger | TTask | TPlaceHolder

export type TWorkflow = {
	_id: string
	name: string
	status?: TWorkflowStatus
	nodes: Node<TNodeData | null>[]
	edges: Edge[]
	deleted_at: string
	created_at: string
	updated_at: string
}
