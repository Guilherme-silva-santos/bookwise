import { styled } from "@/styles/stitches.config";

export const Hero = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  padding: '24px 32px',
  borderRadius: '10px',
  backgroundColor: '$gray700',
})

export const HeroHeader = styled('div', {
  display: 'flex',
  gap: '32px',
});

export const HeroDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const Ratio = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  'span': {
    fontSize: '$xs',
    color: '$gray400',
  }
})


export const HeroFooter = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '52px',
  
  padding: '24px 0',
  marginTop: '$10',
  borderTop: '1px solid #252D4A',
});

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  'div': {
    width: '100%',
    margin: '0 auto',
  },

  'strong': {
    color: '$gray200',
    fontSize: '$md',
    marginBottom: '812px'
  },

  'p': {
    color: '$gray300',
    fontSize: '$sm',
    marginTop: '4px'
  }
});

export const Title = styled('h2', {
  fontSize: '$md',
  color: '$gray100',
  marginBottom: '4px'
});

export const Escritor = styled('span', {
  fontSize: '$sm',
  color: '$gray300',
  marginBottom: '4px',  
});