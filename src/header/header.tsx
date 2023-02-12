import { ReactComponent as Logo } from '@/assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LogoWrapper href='/' title='Airbnb'>
          <Logo />
        </S.LogoWrapper>
      </S.ContentWrapper>
    </S.Container>
  )
}
