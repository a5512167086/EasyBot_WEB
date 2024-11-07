import { Select, SelectProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  color: theme.palette.common.white,
  '& .MuiSelect-icon': {
    fill: theme.palette.common.white
  },
  [theme.breakpoints.down('sm')]: {
    color: theme.palette.common.black,
    '& .MuiSelect-icon': {
      fill: theme.palette.common.black
    }
  }
}))
