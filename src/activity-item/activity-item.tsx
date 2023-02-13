import { ReactComponent as Star } from '@/assets/star.svg'
import { ActivityType } from '@/slider'
import { useState } from 'react'

import * as S from './styles'

export const ActivityItem = ({
  image,
  status,
  rating,
  reviewsCount,
  country,
  desc,
  price,
}: ActivityType) => {
  const [showLabel, setShowLabel] = useState(false)

  return (
    <S.ActivityWrapper
      onMouseOver={() => setShowLabel(true)}
      onMouseOut={() => setShowLabel(false)}
    >
      <S.ImgWrapper>
        <S.StatusLabel showLabel={showLabel}>{status}</S.StatusLabel>

        <S.Image src={image} alt={desc} />
      </S.ImgWrapper>

      <S.InfoWrapper>
        <S.Review><Star /> {rating} <span>({reviewsCount}) • {country}</span></S.Review>

        <S.Desc>{desc}</S.Desc>

        <S.Price><strong>From ${price}</strong> / person</S.Price>
      </S.InfoWrapper>
    </S.ActivityWrapper>
  )
}
