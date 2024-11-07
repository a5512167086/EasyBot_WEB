import Divider from '@mui/material/Divider'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { CustomDrawerProps } from './Drawer.type'
import { StyledDrawer } from './Drawer.style'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageChanger } from '../LanguageChanger'

export const CustomDrawer = ({
  navItems,
  isOpen,
  handleDrawerToggle
}: CustomDrawerProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleNavigation = (link: string) => {
    navigate(link)
  }

  return (
    <StyledDrawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
    >
      <Box onClick={handleDrawerToggle} className="drawer__box">
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={t(item.text)}>
              <ListItemButton
                className="drawer__listButton"
                onClick={() => {
                  handleNavigation(item.link)
                }}
              >
                <ListItemText primary={t(item.text)} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Box className="drawer__languageChangerBox">
              <LanguageChanger />
            </Box>
          </ListItem>
        </List>
      </Box>
    </StyledDrawer>
  )
}
