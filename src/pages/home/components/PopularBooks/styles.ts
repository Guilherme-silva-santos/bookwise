import { styled } from "@/styles/stitches.config";

export const LibraryContainer = styled('section', {
  width: '100%',
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const Header = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",

  'strong': {
    fontWeight: 400,
    fontSize: "$sm",
  },

  'a': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: "$sm",
    color: '$purple100'
  }
})