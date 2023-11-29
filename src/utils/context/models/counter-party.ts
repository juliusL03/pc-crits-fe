type TBankDetails = {
 bank_account_branch: string
 bank_account_swift: string
 bank_account_name: string
 bank_account_no: string
}

export type TCounterParty = {
	_id: string
	name: string
	email: string
	company_name: string
	company_logo?: string
	company_address_line_1: string
	company_address_line_2?: string
	company_address_state?: string
	company_address_zip: number
	company_address_country: string
 company_registration_number: number
 billing_address_country: string
 billing_address_state: string
 billing_address_zip: number
 billing_address_line_1: string
 billing_address_line_2: string
 billing_bank_account: TBankDetails
	deleted_at: string
	created_at: string
	updated_at: string
}
