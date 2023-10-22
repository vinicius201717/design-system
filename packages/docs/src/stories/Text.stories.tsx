import { Text, TextProps } from '@gaindev-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    variant: {
      options: ['sm', 'md', 'lg', 'xs', '2xl', '4xl', '4xl', '5xl', '6xl'],
      controls: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis est, aliquam eveniet necessitatibus ullam illo minima voluptatibus ipsa dolorum quae tempore beatae repellendus hic tempora quaerat harum inventore nemo quasi.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
