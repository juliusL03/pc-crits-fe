import type {Meta, StoryObj} from '@storybook/react'

import {selectOptions} from '@/elements/__fixtures__/options'

import Select from '.'

const meta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		label: {description: 'Label of the Select component'},
		options: {
			description: 'Option list with array of <br /> { label: string, value: string | number}'
		},
		size: {
			description: 'Size of the Select component'
		},
		rounded: {
			description: 'Specify if the Select component shape is rounded'
		}
	}
}

export default meta
type Story = StoryObj<typeof Select>

const placeholder = 'Select option'

export const Default: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder
	}
}

export const Rounded: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder,
		rounded: true
	}
}

export const Small: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder,
		size: 'sm'
	}
}

export const Medium: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder,
		size: 'md'
	}
}

export const Large: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder,
		size: 'lg'
	}
}

export const Error: Story = {
	args: {
		options: selectOptions,
		label: 'Country',
		placeholder,
		invalid: true
	}
}
