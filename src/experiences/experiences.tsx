import { Slider } from '@/slider'
import triathete from '@/assets/triathete.png'
import wedding from '@/assets/wedding.png'
import mountainBike from '@/assets/mountain-bike.png'

import * as S from './styles'

export const Experiences = () => {
  const data = [
    {
      id: 1,
      image: triathete,
      status: 'Sold out',
      rating: 5.0,
      reviewsCount: 6,
      country: 'USA',
      desc: 'Life lessons with Katie Zaferes',
      price: 136,
    },
    {
      id: 2,
      image: wedding,
      status: 'Online',
      rating: 5.0,
      reviewsCount: 30,
      country: 'USA',
      desc: 'Learn wedding photography',
      price: 125,
    },
    {
      id: 3,
      image: mountainBike,
      status: 'Online',
      rating: 4.8,
      reviewsCount: 2,
      country: 'USA',
      desc: 'Group Mountain Biking',
      price: 50,
    },
  ]

  return (
    <S.ExperiencesWrapper>
      <S.ContentWrapper>
        <S.Title>Online experiences</S.Title>

        <S.Paragraph>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</S.Paragraph>

        <Slider
          options={{
            dragFree: true,
            containScroll: 'trimSnaps',
            loop: false,
          }}
          data={data}
        />
      </S.ContentWrapper>
    </S.ExperiencesWrapper>
  )
}
