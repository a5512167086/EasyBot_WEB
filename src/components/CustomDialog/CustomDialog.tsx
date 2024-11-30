import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { CustomDialogProps } from './CustomDialog.type'
import { StyledDialog } from './CustomDialog.style'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { CustomLoader } from '../CustomLoader'
import { Box } from '@mui/material'
import { CustomLink } from '../CustomLink'

const dialogContent = {
  cancel: 'common.cancel',
  done: 'common.done'
}

export const CustomDialog = ({
  isOpen,
  handleClose,
  fields,
  title,
  onSubmit,
  linkText,
  link
}: CustomDialogProps) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries())
    await onSubmit(formJson)
    setLoading(false)
    handleClose()
  }

  return (
    <StyledDialog
      maxWidth="xs"
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit
      }}
    >
      <DialogTitle textAlign="center" variant="h5">
        {t(title)}
      </DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <TextField
            key={field.id}
            required={field.required}
            margin="dense"
            id={field.id}
            name={field.name}
            label={t(field.label)}
            type={field.type}
            fullWidth
            variant="outlined"
          />
        ))}
      </DialogContent>
      <DialogActions className="dialog__actionBox">
        <Box>
          {linkText && link && (
            <CustomLink linkText={t(linkText)} link={link} />
          )}
        </Box>
        <Box>
          <Button onClick={handleClose} variant="contained" color="primary">
            {t(dialogContent.cancel)}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={loading}
            className="dialog__actionButton"
          >
            {loading ? <CustomLoader size={24} /> : t(dialogContent.done)}
          </Button>
        </Box>
      </DialogActions>
    </StyledDialog>
  )
}
