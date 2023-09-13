import { styled } from "@stitches/react";
import Link from "next/link";

export const SectionHeader = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",

  'button': {
    all: 'unset',
    border: "none"
  }
})

export const SectionHeaderLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  
  fontWeight: 700,
  fontSize: "$sm",
  color: '$purple100'
})