import { ActivityItem } from '@/activity-item'
import useEmblaCarousel from 'embla-carousel-react'

import * as S from './styles'

export const Experiences = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps', loop: false })

  return (
    <S.ExperiencesWrapper>
      <S.ContentWrapper>
        <S.Title>Online experiences</S.Title>

        <S.Paragraph>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</S.Paragraph>

        <S.CarouselWrapper ref={emblaRef}>
          <S.CarouselContainer>
            <S.CarouselSlide>
              <ActivityItem />
            </S.CarouselSlide>

            <S.CarouselSlide>
              <ActivityItem />
            </S.CarouselSlide>

            <S.CarouselSlide>
              <ActivityItem />
            </S.CarouselSlide>
          </S.CarouselContainer>
        </S.CarouselWrapper>
      </S.ContentWrapper>
    </S.ExperiencesWrapper>
  )
}
