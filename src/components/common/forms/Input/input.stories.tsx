import type {Meta, StoryObj} from '@storybook/react'

import {FieldTypes} from '@/forms/types'

import Input from '.'

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		label: {
			description: 'Label of the Input component'
		},
		size: {
			description: 'Size of the Input component'
		},
		rounded: {
			description: 'Specify if the Input component shape is rounded'
		}
	}
}

export default meta
type Story = StoryObj<typeof Input>

export const InputText: Story = {
	args: {
		label: 'Input'
	}
}

export const InputPassword: Story = {
	args: {
		label: 'Input Password',
		type: FieldTypes.PASSWORD
	}
}

export const InputNumber: Story = {
	args: {
		label: 'Input Password',
		type: FieldTypes.NUMBER
	}
}

export const InputSmall: Story = {
	args: {
		label: 'Input',
		size: 'sm'
	}
}

export const InputMedium: Story = {
	args: {
		label: 'Input'
	}
}

export const InputLarge: Story = {
	args: {
		label: 'Input',
		size: 'lg'
	}
}

export const RoundedInput: Story = {
	args: {
		label: 'Input',
		rounded: true
	}
}

export const InputError: Story = {
	args: {
		label: 'Input',
		placeholder: 'Error Input',
		invalid: true
	}
}
