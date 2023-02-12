import { ReactComponent as Logo } from '@/assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeroWrapper>
      <S.ContentWrapper>
        <S.LogoWrapper href='/' title='Airbnb'>
          <Logo />
        </S.LogoWrapper>
      </S.ContentWrapper>
    </S.HeroWrapper>
  )
}
