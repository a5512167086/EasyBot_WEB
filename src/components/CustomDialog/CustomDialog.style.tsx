import { Dialog, styled } from '@mui/material'

export const StyledDialog = styled(Dialog)(() => ({
  '& .dialog__actionBox': {
    padding: '0 24px 24px 24px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& .dialog__actionButton': {
    marginLeft: '10px'
  }
}))
