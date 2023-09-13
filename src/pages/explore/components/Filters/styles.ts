import { styled } from "@/styles/stitches.config"

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '48px'
})

export const Filter = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  borderRadius: 999,
  border: '1.5px solid $purple100',
  color: '$purple100',
  padding: '4px 16px',
  
  cursor: 'pointer',
  transition: 'all 200ms',

  '&:hover': {
    backgroundColor: '$purple200',
    borderColor: '$purple200',
    color: '$gray100'
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$purple200',
        borderColor: '$purple200',
        color: '$gray100'
      },
      false: {
        backgroundColor: 'transparent'
      }
    }
  }
})
