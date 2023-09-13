import { keyframes, styled } from "@/styles/stitches.config";
import { ModalWrapper } from "../ModalWrapper";

export const ModalContainer = styled(ModalWrapper, {
  zIndex: 90,
});

const slideIn = keyframes({
  from: {
    transform: 'translateX(660px)',
  },
  to: {
    transform: 'translateX(0)'
  }
});

export const Card = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  
  backgroundColor: '$gray800', 
  
  maxWidth: '660px',
  width: '100%',
  height: '100vh',
  padding: '64px 48px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',

  overflowY: 'auto',

  animation: `${slideIn} 400ms ease forwards`,

  '&::-webkit-scrollbar': {
    width: '10px'
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700'
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: 999
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  },
});

export const Close = styled('div', {
  all: 'unset',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '24px',
  right: '48px',
  color: '$gray400',
  cursor: 'pointer',

  '&:hover': {
    color: '$danger'
  }
});
