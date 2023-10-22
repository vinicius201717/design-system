import { TooltipProps, Tooltip,} from '@gaindev-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        variant: 'primary',
        disabled: true,
      },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}