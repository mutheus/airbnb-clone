import { ReactComponent as Star } from '@/assets/star.svg'
import triathete from '@/assets/triathete.png'
import { useState } from 'react'

import * as S from './styles'

export const ActivityItem = () => {
  const [showLabel, setShowLabel] = useState(false)

  return (
    <S.ActivityWrapper
      onMouseOver={() => setShowLabel(true)}
      onMouseOut={() => setShowLabel(false)}
    >
      <S.ImgWrapper>
        <S.StatusLabel showLabel={showLabel}>Sold out</S.StatusLabel>

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
