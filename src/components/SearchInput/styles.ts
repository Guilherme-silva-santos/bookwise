import { styled } from "@/styles/stitches.config";

export const SearchContainer = styled('label', {
  width: '100%',
  display: 'flex',
  gap: '$2',
  border: '2px solid $gray500',
  backgroundColor: '$gray800',
  borderRadius: '4px',
  padding: '14px 20px',

  transition: 'all 200ms ease',

  '&:focus-within': {
    boxShadow: '0px 0px 0px 5px rgba(48, 63, 115, .3)'
  }
})

export const Input = styled('input', {
  outline: 'none',
  background: 'transparent',
  border: 'none',
  width: '100%',
  color: '$gray400',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center'
})