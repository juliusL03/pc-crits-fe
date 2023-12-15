export type TWorkflow = {
	type: string
}

export type TTransaction = {
	_id: string
	date?: string
	description: string
	transaction_number: number
	debit_account?: string
	credit_account?: string
	workflows?: TWorkflow[]
	type: string
	amount: number
	reconciled: boolean
	deleted_at: string
	created_at: string
	updated_at: string
	workflow: TWorkflow[]
	source: string
 ext_invoice_id?: string
 ext_virtual_account_id?: string
}
                                                                                                                                                                                                                                                                                                                                                                                                                                              