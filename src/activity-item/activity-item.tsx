import { ReactComponent as Star } from '@/assets/star.svg'
import triathete from '@/assets/triathete.png'

import * as S from './styles'

export const ActivityItem = () => {
  return (
    <S.ActivityWrapper>
      <S.ImgWrapper>
        <S.Image src={triathete} alt='Triathete' />
      </S.ImgWrapper>

      <S.InfoWrapper>
        <S.Review><Star /> 5.0 <span>(6) • USA</span></S.Review>

        <S.Desc>Life lessons with Katie Zaferes</S.Desc>

        <S.Price><strong>From $136</strong> / person</S.Price>
      </S.InfoWrapper>
    </S.ActivityWrapper>
  )
}
