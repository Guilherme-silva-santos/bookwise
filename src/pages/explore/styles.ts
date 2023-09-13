import { SearchInput } from "@/components/SearchInput"
import { styled } from "@/styles/stitches.config"

export const Container = styled("div", {
  flex: 1,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  marginBottom: '48px'
})

export const Search = styled('div', {
  width: '433px',
  position: 'absolute',
  top: '51px',
  right: 0,
})

export const Header = styled('header', {
  marginTop: '55px',
  marginBottom: '70px',
  display: 'flex',
  alignItems: 'center',
  gap: "$3",

  'h1': {
    color: '$gray100'
  }
})

export const ExplorerBooks = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px'
})