import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { keyframes } from '@stitches/react'
import { X } from 'phosphor-react'

export const ToastPrivider = styled(Toast.Provider, {})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: ' translateX(calc(100% + var(--viewport-padding)))',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastRoot = styled(Toast.Root, {
  '--viewport-padding': '10px',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: "'title action' 'discription action'",
  columnGap: '$4',
  alignItems: 'center',

  '&[data-state=open]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=closed]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe=move]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe=cancel]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe=end]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '5px',
  fontWeight: '$bold',
  color: '$white',
  fontSize: 'md',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'discription',
  margin: 0,
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ButtonClosed = styled(X, {
  color: '$gray200',
  width: '20px',
  height: '20px',
  position: 'absolute',
  top: '$10',
  right: '$10',
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '10px',
  width: '390px',
  maxWidth: '1000vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2146483647,
  outline: 'none',
})
