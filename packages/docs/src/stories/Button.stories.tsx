import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@gaindev-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      controls: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      controls: {
        type: 'inline-radio',
      },
    },

    disabled: {
      control: {
        type: 'boolean',
      },
    },

    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'cancel',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
