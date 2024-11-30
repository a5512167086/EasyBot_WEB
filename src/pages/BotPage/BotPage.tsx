import { CustomCard } from '@/components/CustomCard'
import { StyledBotPage } from './BotPage.style'
import { Breadcrumbs, Grid2 } from '@mui/material'
import { ActionType } from '@/components/CustomCard/CustomCard.type'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@/assets/add_icon.png'
import BotIcon from '@/assets/bot_icon.png'
import { CustomDialog } from '@/components/CustomDialog'
import { useState } from 'react'
import { CustomLink } from '@/components/CustomLink'
import { PAGE_PATHS } from '@/routes'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGetBotsQuery } from '@/store/apis/botApi'
import { useAppSelector } from '@/utils/hook'

const dialogFields = [
  {
    id: 'botName',
    name: 'botName',
    label: 'botPage.botName',
    type: 'text',
    required: true
  },
  {
    id: 'channelId',
    name: 'channelId',
    label: 'botPage.channelId',
    type: 'text',
    required: true
  },
  {
    id: 'channelSecret',
    name: 'channelSecret',
    label: 'botPage.channelSecret',
    type: 'password',
    required: true
  },
  {
    id: 'channelAccessToken',
    name: 'channelAccessToken',
    label: 'botPage.channelAccessToken',
    type: 'password',
    required: true
  }
]

const botPageContent = {
  title: 'botPage.myBot',
  addBot: 'botPage.addBot',
  seeTutorial: 'botPage.seeTutorial',
  setting: 'common.setting'
}

export const BotPage = () => {
  const { botList } = useAppSelector((state) => state.bot)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  useGetBotsQuery()

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleBotSetting = () => {
    navigate(PAGE_PATHS.MODULE_LIST)
  }
  return (
    <StyledBotPage maxWidth="lg">
      <Breadcrumbs
        sx={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '20px 0' }}
      >
        <CustomLink
          link={PAGE_PATHS.BOT_LIST}
          linkText={t(botPageContent.title)}
          color="text.primary"
          aria-current="page"
        />
      </Breadcrumbs>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <CustomCard
            imgSrc={AddIcon}
            cardButton={true}
            cardButtonAction={handleDialogOpen}
            titleText={t(botPageContent.addBot)}
            actionType={ActionType.None}
          />
        </Grid2>
        {botList.map((bot) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            display="flex"
            justifyContent="center"
            key={bot.class_id}
          >
            <CustomCard
              imgSrc={BotIcon}
              enableHeaderButton={true}
              cardButton={false}
              titleText={bot.bot_name}
              actionType={ActionType.Button}
              buttonText={t(botPageContent.setting)}
              buttonIcon={<SettingsIcon />}
              buttonAction={handleBotSetting}
            />
          </Grid2>
        ))}
      </Grid2>
      <CustomDialog
        isOpen={isDialogOpen}
        handleClose={handleDialogClose}
        fields={dialogFields}
        title="botPage.addBot"
        onSubmit={(data) => {
          console.log(data)
        }}
        linkText={botPageContent.seeTutorial}
        link={PAGE_PATHS.CREATE_BOT_TURTROIAL}
      />
    </StyledBotPage>
  )
}
