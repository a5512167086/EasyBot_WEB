interface FieldProps {
  id: string
  name: string
  label: string
  type: string
  required?: boolean
}

export type CustomDialogProps = {
  isOpen: boolean
  handleClose: () => void
  fields: FieldProps[]
  title: string
  linkText?: string
  link?: string
  onSubmit: (data: Record<string, unknown>) => void
}
