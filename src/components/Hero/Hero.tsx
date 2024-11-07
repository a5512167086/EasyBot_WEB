import HeroBackground from '@/assets/bot_img.jpg'
import { StyledHero } from './Hero.style'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const heroContent = {
  title: 'homePage.hero.title',
  subtitle: 'homePage.hero.subtitle',
  description: 'homePage.hero.description'
}

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero maxWidth="md">
      <div className="hero__card">
        <img className="hero__img" src={HeroBackground} alt="" loading="lazy" />
      </div>
      <div className="hero__textBox">
        <Typography variant="h6" className="hero__title">
          {t(heroContent.title)}
          <br />
          {t(heroContent.subtitle)}
        </Typography>
        <Typography variant="h6" className="hero__description">
          {t(heroContent.description)}
        </Typography>
      </div>
    </StyledHero>
  )
}
