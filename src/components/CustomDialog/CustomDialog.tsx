import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { CustomDialogProps } from './CustomDialog.type'
import { CustomLink } from '../CustomLink'
import { Box } from '@mui/material'
import { StyledDialog } from './CustomDialog.style'
import { useTranslation } from 'react-i18next'

const dialogContent = {
  addBot: 'botPage.addBot',
  botName: 'botPage.botName',
  channelId: 'botPage.channelId',
  channelAccessToken: 'botPage.channelAccessToken',
  channelSecret: 'botPage.channelSecret',
  seeTutorial: 'botPage.seeTutorial',
  cancel: 'common.cancel',
  done: 'common.done'
}

export const CustomDialog = ({ isOpen, handleClose }: CustomDialogProps) => {
  const { t } = useTranslation()
  return (
    <>
      <StyledDialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition={false}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            console.log(formJson)
            handleClose()
          }
        }}
      >
        <DialogTitle textAlign="center" variant="h5">
          {t(dialogContent.addBot)}
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="botName"
            name="botName"
            label={t(dialogContent.botName)}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelId"
            name="channelId"
            label={t(dialogContent.channelId)}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelSecret"
            name="channelSecret"
            label={t(dialogContent.channelSecret)}
            type="password"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelAccessToken"
            name="channelAccessToken"
            label={t(dialogContent.channelAccessToken)}
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions className="dialog__actionBox">
          <Box>
            <CustomLink linkText={t(dialogContent.seeTutorial)} link={''} />
          </Box>
          <Box>
            <Button onClick={handleClose} variant="contained" color="primary">
              {t(dialogContent.cancel)}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="dialog__actionButton"
            >
              {t(dialogContent.done)}
            </Button>
          </Box>
        </DialogActions>
      </StyledDialog>
    </>
  )
}
