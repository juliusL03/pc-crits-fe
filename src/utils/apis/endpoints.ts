const endpoints = {
	INVOICE: '/invoices',
	INVOICES: '/invoices',
	INVOICES_CREATE: '/invoice/create',
	INVOICES_UPDATE: '/invoice/update',
	INVOICE_DATA: (id: string) => `/invoice/${id}/data`,
	INVOICE_PAY: (id: string | undefined) => `/invoice/${id}/pay`,

	BILL: '/invoices',
	BILLS: '/invoices?type=payable',

	LEDGER_ACCOUNTS: '/ledger/accounts',
	LEDGER_ACCOUNTS_CREATE: '/ledger/accounts/create',
	LEDGER_TRANSACTIONS: '/ledger/transactions',
	LEDGER_TRANSACTIONS_CREATE: '/ledger/transactions/create',

	PAYNOW_QR_CODE_GENERATE: '/paynow/qrcodes/generate',

	USER_AUTHENTICATE: '/user/authenticate',
	USER_SIGNUP: '/user/signup',
	USER_ME: '/user/me',
	USER_LOGOUT: '/user/logout',

	WORKFLOW: '/workflow',
	WORKFLOW_ACTIONS: '/actions',
	WORKFLOW_SCHEMAS: '/schemas',

	DASHBOARD: '/dashboard',

	INTEGRATIONS_XERO: '/integrations/xero',

	TRANSACTIONS: '/transactions',
	TRANSACTIONS_CREATE: '/transactions/create',
	TRANSACTIONS_RECONCILED: '/transactions/reconciled',

	VIRTUAL_ACCOUNT: '/virtual_accounts',

	CUSTOMER: '/customer',
	CUSTOMERS: '/customers',
	CUSTOMERS_CREATE: '/customers/create',

	COUNTER_PARTIES: '/counter_parties',
	VIRTUAL_ACCOUNTS: '/virtual-accounts'
}

export default endpoints
