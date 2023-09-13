import { styled } from "@/styles/stitches.config";

export const ModalWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(0,0,0,.5)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})