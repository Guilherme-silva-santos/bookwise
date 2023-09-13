import { theme } from "@/styles/stitches.config";

import { Star } from "@/components/Start"

import * as Styled from './styles'

interface Props {
  size?: number;
  bookRating: number;
}


export function AvaliationStars({size, bookRating}: Props) {
  const { colors } = theme;

  return (
    <Styled.Rate>
      {[...Array(5)].map((_, index) => {
        return (
        <Star 
          key={index} 
          size={size}
          color={index + 1 <= bookRating && colors.purple100.value} 
        />
      )
      })}
    </Styled.Rate>
  )
}