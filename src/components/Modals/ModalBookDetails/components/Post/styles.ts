import { styled } from '@/styles/stitches.config';

export const TextContainer = styled('div', {
  width: '100',
  position: 'relative'
})

export const TextArea = styled('textarea', {
  width: '100%',
  resize: 'none',
  height: '164px',
  backgroundColor: '$gray800',
  border: '2px solid $gray500',
  borderRadius: '4px',
  outline: 'none',
  color: '$gray400',
  padding: '14px 20px',

  '&:focus': {
    boxShadow: '0px 0px 0px 5px rgba(48, 63, 115, .3)'
  }
});

export const AmountWords = styled('span', {
  position: 'absolute',
  bottom: 15,
  right: 12,

  fontSize: '$xs',
  color: '#7C7C8A'
});

export const Footer = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '8px'
});

export const Button = styled('button', {
  outline: 'none',
  border: 'none',

  width: '40px',
  height: '40px',
  borderRadius: '4px',
  backgroundColor: '$gray600',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  transition: 'all 200ms',

  '&:focus, &:hover': {
    boxShadow: '0px 0px 0px 3px rgba(48, 63, 115, .3)',
    backgroundColor: '$gray500'
  },

  '&:disabled': {
    opacity: .4,
    cursor: 'not-allowed'
  }

})

interface Props {

}

export const Teste = styled('div', {
  width: '100%',
  height: '16px',
  position: 'absolute'
  // background: 'red',

})