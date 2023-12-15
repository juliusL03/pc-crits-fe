import type {Meta, StoryObj} from '@storybook/react'

import Switch from '.'

const meta: Meta<typeof Switch> = {
	title: 'Switch',
	component: Switch,
	tags: ['autodocs'],
	argTypes: {
		label: {description: 'Label of the Switch component'},
		variant: {
			description: 'Variant of the Switch'
		},
		size: {
			description: 'Size of the Switch component'
		}
	}
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
	args: {
		label: 'Default'
	}
}

export const Primary: Story = {
	args: {
		label: 'Primary',
		checked: true
	}
}

export const Success: Story = {
	args: {
		label: 'Success',
		variant: 'success',
		checked: true
	}
}

export const Danger: Story = {
	args: {
		label: 'Danger',
		variant: 'danger',
		checked: true
	}
}

export const Warning: Story = {
	args: {
		label: 'Warning',
		variant: 'warning',
		checked: true
	}
}

export const Info: Story = {
	args: {
		label: 'Info',
		variant: 'info',
		checked: true
	}
}

export const Small: Story = {
	args: {
		label: 'Small',
		size: 'sm'
	}
}

export const Medium: Story = {
	args: {
		label: 'Medium',
		size: 'md'
	}
}

export const Large: Story = {
	args: {
		label: 'Large',
		size: 'lg'
	}
}
