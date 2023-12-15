import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import authSlice, {type TAuthSlice} from '@/store/slices/auth'
import customerSlice, {type TCustomerSlice} from '@/store/slices/customer'
import dashboardSlice, {type TDashboardSlice} from '@/store/slices/dashboard'
import integrationSlice, {type TIntegrationSlice} from '@/store/slices/integration'
import invoiceSlice, {type TInvoiceSlice} from '@/store/slices/invoice'
import ledgerSlice, {type TLedgerSlice} from '@/store/slices/ledger'
import paynowSlice, {type TPaynowSlice} from '@/store/slices/paynow'
import transactionSlice, {type TTransactionSlice} from '@/store/slices/transaction'
import virtualAccountSlice, {type TVirtualAccountSlice} from '@/store/slices/virtual-account'
import billSlice from '@/utils/store/slices/bill'
import {TBillSLice} from '@/utils/store/slices/bill/types'
import counterPartySlice, {type TCounterPartySlice} from '@/utils/store/slices/counter-party'
import eventSlice, {type TEventSlice} from '@/utils/store/slices/event'
import workflowSlice, {type TWorkflowSlice} from '@/utils/store/slices/workflow'

export type TUseAppStore = TAuthSlice &
	TInvoiceSlice &
	TLedgerSlice &
	TPaynowSlice &
	TWorkflowSlice &
	TEventSlice &
	TAuthSlice &
	TInvoiceSlice &
	TBillSLice &
	TLedgerSlice &
	TPaynowSlice &
	TIntegrationSlice &
	TDashboardSlice &
	TTransactionSlice &
	TCustomerSlice &
	TVirtualAccountSlice &
	TCounterPartySlice

const useStore = create<TUseAppStore>()(
	devtools((...a) => ({
		...authSlice(...a),
		...billSlice(...a),
		...invoiceSlice(...a),
		...ledgerSlice(...a),
		...paynowSlice(...a),
		...workflowSlice(...a),
		...eventSlice(...a),
		...integrationSlice(...a),
		...transactionSlice(...a),
		...dashboardSlice(...a),
		...customerSlice(...a),
		...virtualAccountSlice(...a),
		...dashboardSlice(...a),
		...customerSlice(...a),
		...virtualAccountSlice(...a),
		...counterPartySlice(...a)
	}))
)

export default useStore
