import { styled } from "@/styles/stitches.config"

export const Container = styled("div", {
  flex: 1,
  width: '100%',
  display: 'flex',
  gap: '64px',
  marginBottom: '48px'
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px'
})

export const Header = styled('header', {
  marginTop: '55px',
  marginBottom: '70px',
  display: 'flex',
  alignItems: 'center',

  'h1': {
    color: '$gray100',
    textAlign: 'center'
  }
})

export const ExplorerBooks = styled('section', {
  display: 'grid',
  gap: '20px'
})

export const Search = styled('div', {
  width: '100%',
  marginBottom: '32px'
})

export const Aside = styled('aside', {
  width: '324px',
})