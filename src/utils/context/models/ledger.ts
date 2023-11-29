export type TAccount = {
	_id: string
	name: string
	type: string
	description: string
	total_debit: number
	total_credit: number
	balance: number
	deleted_at?: string
	created_at?: string
	updated_at?: string
}
