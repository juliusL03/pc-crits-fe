import type {Meta, StoryObj} from '@storybook/react'

import Datepicker from '.'

const meta: Meta<typeof Datepicker> = {
	title: 'Datepicker',
	component: Datepicker,
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
		},
		status: {
			description: 'Status of the Input component'
		},
		message: {
			description: 'Specify the status message'
		}
	}
}

export default meta
type Story = StoryObj<typeof Datepicker>

export const DatepickerInput: Story = {
	args: {
		label: 'Select Date'
	}
}

export const DatepickerInputSmall: Story = {
	args: {
		label: 'Input',
		size: 'sm'
	}
}

export const DatepickerInputMedium: Story = {
	args: {
		label: 'Input'
	}
}

export const DatepickerInputLarge: Story = {
	args: {
		label: 'Input',
		size: 'lg'
	}
}

export const RoundedDatepicker: Story = {
	args: {
		label: 'Input',
		rounded: true
	}
}
