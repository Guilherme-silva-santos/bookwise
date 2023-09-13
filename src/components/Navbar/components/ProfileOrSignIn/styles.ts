import { styled } from "@/styles/stitches.config";

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: "center",
  gap: '12px'
})

export const Logout = styled('button', {
  all: "unset",
  boxSizing: "border-box",
  cursor: 'pointer'
})

export const Login = styled('button', {
  all: 'unset',
  boxSizing: "border-box",
  cursor: 'pointer',
  marginTop: 'auto',

  display: 'flex',
  alignItems: "center",
  gap: '12px',
  
  color: "$gray200",
  fontWeight: 700
})