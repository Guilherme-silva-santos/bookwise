import { Box as BoxComponent } from "@/components/Box"
import { styled } from "@/styles/stitches.config"
import Link from 'next/link'

export const Box = styled(BoxComponent, {
  cursor: 'pointer',

  '&:hover': {
    background: '$gray600'
  }
});

export const ReviewContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  'p': {
    color: "$gray300"
  }
})

export const ReviewsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  
  width: '100%',
  minHeight: '400px',
})

export const Profile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '4px'
})


export const PublishedAt = styled('span', {
  fontSize: '$sm',
  fontWeight: 400,
  color: '$gray300',
  marginBottom: '$3'
})

export const Title = styled('h2', {
  fontSize: '$md',
  color: '$gray100',
})

export const Escritor = styled('span', {
  fontSize: '$sm',
  color: '$gray300',
  marginBottom: '4px',  
})

export const UserAvaliation = styled(Box, {
  
})