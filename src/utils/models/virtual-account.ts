export enum EVirtualAccountType {
	Custom = 'custom',
	Default = 'default',
	Temporary = 'temporary'
}

export type TVirtualAccountType = EVirtualAccountType

export type TVirtualAccount = {
	available_balance: number | undefined
	_id: string
	type: TVirtualAccountType
	linked_to: string
	account_number: string
	amount: number
	currency: string
	description: string
	expiration: string | null
	deleted_at: string
	created_at: string
	updated_at: string
}
