import React, { ComponentProps } from 'react'
import * as TooltipProvider from '@radix-ui/react-tooltip'
import { PlusIcon } from '@radix-ui/react-icons'
import { IconButton, TooltipArrow, TooltipContent } from './styles'

export const Tooltip = () => {
  return (
    <TooltipProvider.Provider>
      <TooltipProvider.Root>
        <TooltipProvider.Trigger asChild>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </TooltipProvider.Trigger>
        <TooltipProvider.Portal>
          <TooltipContent sideOffset={5}>
            21 de Outubro - Indisponível
            <TooltipArrow />
          </TooltipContent>
        </TooltipProvider.Portal>
      </TooltipProvider.Root>
    </TooltipProvider.Provider>
  )
}

export type TooltipProps = ComponentProps<typeof TooltipProvider.Root>
