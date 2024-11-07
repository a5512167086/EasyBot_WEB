import { Hero } from '@/components/Hero'
import { StyledHomePage } from './Homepage.style'
import { FeatureOverview } from '@/components/FeatureOverview'

export const Homepage = () => {
  return (
    <StyledHomePage maxWidth="lg" disableGutters>
      <Hero />
      <FeatureOverview />
    </StyledHomePage>
  )
}
