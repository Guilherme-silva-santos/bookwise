import { styled } from "@/styles/stitches.config";


export const Rating = styled('p', {
  color: '$gray300',
  fontWeight: 400,
  fontSize: '$sm'
 });

export const Title = styled('p', {
  color: '$gray300',
  fontWeight: 400,
  fontSize: '$sm'
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const Row = styled('div', {
  display: 'flex',
  gap: '12px'
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.5rem',

  'h3': {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray100'
  },

  'span': {
    fontSize: '$sm',
    fontWeight: 400,
    color: '$gray400'
  },
})

export const Rate = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1'
})