import React from 'react'

export interface ControllerContextType {
  groupName?: string
  helperTextId: string
  errorMessageId: string
  isInvalid: boolean
  isRequired?: boolean
}

export const ControllerContext = React.createContext<ControllerContextType>({
  helperTextId: '',
  errorMessageId: '',
  isInvalid: false,
  isRequired: false
})
