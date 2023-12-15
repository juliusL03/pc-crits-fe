import {FieldTypes, TField} from '@/forms/types'

export const loginFields: TField[] = [
 {
		type: FieldTypes.TEXT,
		name: 'first_name',
		placeholder: '',
		label: 'First Name',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 'auto'
	},
 {
		type: FieldTypes.TEXT,
		name: 'last_name',
		placeholder: '',
		label: 'Last Name',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.EMAIL,
		name: 'email',
		placeholder: '',
		label: 'Email',
		required: true,
		labelWidth: 10,
		layout: 'vertical',
		inputWidth: 'auto'
	},
	{
		type: FieldTypes.PASSWORD,
		name: 'password',
		placeholder: '',
		label: 'Password',
		required: true,
		layout: 'vertical',
		labelWidth: 10,
		inputWidth: 'auto'
	},
 {
		type: FieldTypes.PASSWORD,
		name: 'confirm_password',
		placeholder: '',
		label: 'Confirm Password',
		required: true,
		layout: 'vertical',
		labelWidth: 10,
		inputWidth: 'auto'
	}
]
