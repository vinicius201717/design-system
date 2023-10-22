import * as React from 'react'
import { ComponentProps } from 'react'

import {
  ToastPrivider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewPort,
  ButtonClosed,
} from './styles'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  as?: React.ElementType
}

export const Toast = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <ToastPrivider swipeDirection="right">
      <Button
        className="Button large violet"
        onClick={() => {
          setOpen(true)
        }}
      >
        Add to calendar
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription>descrição qualquer pra ter conteudo</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <ButtonClosed
            onClick={() => {
              setOpen(false)
            }}
          />
        </ToastAction>
      </ToastRoot>
      <ToastViewPort />
    </ToastPrivider>
  )
}
