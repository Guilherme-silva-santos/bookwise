import { styled } from "@/styles/stitches.config";
import { ModalWrapper } from "../ModalWrapper";


export const ModalContainer = styled(ModalWrapper, {
  zIndex: 100
})

export const Modal = styled('div', {
  backgroundColor: '$gray700',
  width: '516px',
  borderRadius: '12px',
  padding: '56px 72px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  position: 'relative',

  'strong': {
    marginBottom: '24px'
  }
})

export const Close = styled('div', {
  all: 'unset',
  boxSizing: 'border-box',

  position: 'absolute',
  top: '16px',
  right: '16px',

  cursor: 'pointer',
})