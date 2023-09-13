import { styled } from "@/styles/stitches.config";

export const Header = styled('header', {
  display: 'flex',
  
  justifyContent: 'space-between'
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$8'
})

export const Profile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const Description = styled('div', {
  width: '100%',
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

export const Rate = styled('div', {
  position: 'absolute',
  top: '24px',
  right: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '$1'
})