import {TDashboard} from '@/models/dashboard'
import {TSliceError} from '@/utils/models/common'

export type TDashboardResponse = TDashboard

export type TDashboardSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	dashboard: TDashboard | null
	getDashboard: () => void
}
