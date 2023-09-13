import { styled } from "@/styles/stitches.config";

export const UserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'center',
  borderLeft: '1px solid #181C2A',

})

export const Name = styled('h2', {})

export const Since = styled('span', {
  color: '$gray400'
})

export const Split = styled('div', {
  background: '$gradient-vertical',
  height: '4px',
  width: '32px',
  borderRadius: 999,
  margin: '32px auto'
})

export const InfoContainer = styled('div', {
  padding: '0 56px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'center',
});
