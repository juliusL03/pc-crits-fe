import {TVirtualAccount} from '@/utils/models/virtual-account'

export type TGetVirtualAccountListResponse = TVirtualAccount[]

export type TVirtualAccountSlice = {
	loading: boolean
	virtualAccount: TVirtualAccount | null
	virtualAccounts: TVirtualAccount[]
	getVirtualAccountList: () => void
}
