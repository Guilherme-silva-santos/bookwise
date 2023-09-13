import * as Styled from './styles'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof Styled.Image> & {}

export function Avatar({...rest}: Props) {
  return (
    <Styled.Container>
      <Styled.Image
        {...rest}
      />
    </Styled.Container>
  )
}