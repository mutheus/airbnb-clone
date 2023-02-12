import { ActivityItem } from '@/activity-item'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import * as S from './styles'

export type ActivityType = {
  id: number,
  image: string,
  status: string,
  rating: number,
  reviewsCount: number,
  country: string,
  desc: string,
  price: number,
}

type SliderProps = {
  options: EmblaOptionsType
  data: ActivityType[]
}

export const Slider = ({ data, options }: SliderProps) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <S.SliderWrapper ref={emblaRef}>
      <S.SliderContainer>
        {data.map((item) => (
          <S.SliderSlide key={item.id}>
            <ActivityItem {...item} />
          </S.SliderSlide>
        ))}
      </S.SliderContainer>
    </S.SliderWrapper>
  )
}
