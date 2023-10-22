import { Toast, ToastProps} from '@gaindev-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        variant: 'primary',
        disabled: true,
      },
      argTypes: {    
        onClick: {
          action: 'click',
        },
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}