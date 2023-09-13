import { styled } from "@/styles/stitches.config";
import { ComponentProps, ElementType } from "react";


export const Box = styled('div', {
  position: 'relative',
  width: '100%',

  padding: '$5',
  borderRadius: '8px',
  backgroundColor: '$gray700',

  display: 'flex',
  gap: '$5',
  marginBottom: '1rem',

  transition: 'background 200ms',
  
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    padding: {
      sm: {
        padding: '$5',

      },
      md: {
        padding: '$6',
      }
    }
  },
});

export type ButtonProps = ComponentProps<typeof Box> & {
  as?: ElementType
}

Box.displayName = 'Box'
