import { ReactNode } from 'react'

export enum ActionType {
  None = 'NONE',
  Button = 'BUTTON',
  Switch = 'SWITCH'
}

export type CustomCardProps = {
  imgSrc?: string
  enableHeaderButton?: boolean
  cardButton: boolean
  cardButtonAction?: () => void
  titleText?: string
  descriptionText?: string
  actionType: ActionType
  buttonText?: string
  buttonIcon?: ReactNode
  buttonAction?: () => void
}
