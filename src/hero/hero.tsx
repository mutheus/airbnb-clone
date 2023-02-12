import heroImg from '@/assets/hero-image.png'

import * as S from './styles'

export const Hero = () => (
  <S.Wrapper>
    <S.HeroImage src={heroImg} alt='Grid layout with photos' />
  </S.Wrapper>
)
