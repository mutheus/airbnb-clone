import styled from 'styled-components'

export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  gap: 0.75em;
  max-width: 14.6666em;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const ImgWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  border-radius: 0.5625em;
`

export const Review = styled.p`
  display: flex;
  gap: 2px;
  align-items: center;

  span {
    color: #918E9B;
  }
`

export const Desc = styled.p``

export const Price = styled.p`
  strong {
    font-weight: 600;
  }
`
