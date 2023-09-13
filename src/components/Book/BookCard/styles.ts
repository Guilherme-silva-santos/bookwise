import { styled } from "@/styles/stitches.config";

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const PublishedAt = styled('span', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray300',
  marginBottom: '$3'
})

export const Title = styled('h2', {
  fontSize: '$md',
  fontWeight: 700,
  color: '$gray100',
})

export const Author = styled('span', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray400',
  marginBottom: '$3'
})

export const About = styled('p', {
  marginTop: 'auto',
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray300'
})

export const Avaliation = styled('div', {
  position: 'absolute',
  top: '24px',
  right: '24px',
})