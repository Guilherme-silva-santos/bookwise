import { styled } from "@/styles/stitches.config";

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '40px',

  'div': {
    width: '100%',
    margin: '0 auto',
  },

  'strong': {
    color: '$gray200',
    fontSize: '$md'
  },

  'p': {
    color: '$gray300',
    fontSize: '$sm'
  }
})