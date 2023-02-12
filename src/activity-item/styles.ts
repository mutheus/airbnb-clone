import styled, { css } from 'styled-components'

type ShowLabelType = {
  showLabel: boolean
}

export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  gap: 0.75em;
  max-width: 14.6666em;
  cursor: pointer;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const ImgWrapper = styled.div`
  position: relative;
`

export const StatusLabel = styled.div<ShowLabelType>`
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: #fff;
  font-size: 0.625rem;
  line-height: 1.1em;
  height: 2em;
  min-width: 6em;
  border-radius: 2px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: visibility, opacity ease 0.2s;

  ${({ showLabel }) => showLabel && css`
    visibility: visible;
    opacity: 1;
  `}
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
