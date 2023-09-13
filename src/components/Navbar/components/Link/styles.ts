import { styled } from "@/styles/stitches.config";
import NextLink from "next/link";

export const LinkContainer = styled(NextLink, {
  display: "flex",
  alignItems: "center",
  gap: "12px",

  fontWeight: 700,
  fontSize: '1rem',
  color: '$gray400',

  marginBottom: '24px',
  position: 'relative',

  variants: {
    active: {
      true: {
        color: '$gray100',

        '&:before': {
          content: '',
          width: '4px',
          height: '24px',
          borderRadius: 999,
          background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
          position: 'absolute',
          top: '0',
          left: '-16px'
        }
      }
    }
  }
})
