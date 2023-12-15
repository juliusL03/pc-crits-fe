import type {Meta, StoryObj} from '@storybook/react'

import {selectOptions} from '@/elements/__fixtures__/options'

import Radio from '.'

const meta: Meta<typeof Radio> = {
	title: 'Radio',
	component: Radio,
	tags: ['autodocs'],
	argTypes: {
		options: {
			description: 'Specifies the Radio options with array of <br /> { label: string, value: string | number}'
		},
		variant: {
			description: 'Specify the Radio variant'
		},
		status: {
			description: 'Specify Radio status'
		}
	}
}

export default meta
type Story = StoryObj<typeof Radio>

export const Primary: Story = {
	args: {
		options: selectOptions,
		label: 'Country'
	}
}

export const Success: Story = {
	args: {
		options: selectOptions,
		variant: 'success'
	}
}

export const Danger: Story = {
	args: {
		options: selectOptions,
		variant: 'danger'
	}
}

export const Warning: Story = {
	args: {
		options: selectOptions,
		variant: 'warning'
	}
}

export const Info: Story = {
	args: {
		options: selectOptions,
		variant: 'info'
	}
}
