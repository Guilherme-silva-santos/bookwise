import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
  padding: '20px',

  display: 'flex',
  gap: '40px',
})

export const Content = styled('div', {
  flex: 1,
  maxWidth: '980px',
  height: '100%',
  margin: '0 auto',
  overflowX: 'hidden',
  position: 'relative'
});

export const Header = styled('header', {
  margin: '55px 0 40px 0',
  display: 'flex',
  alignItems: 'center',
  gap: "$3",

  'h1': {
    color: '$gray100'
  }
})
