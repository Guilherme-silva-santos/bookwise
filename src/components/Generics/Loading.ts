import { styled, keyframes } from "@/styles/stitches.config";

const s3 = keyframes({
  '100%': {
    transform: 'rotate(1turn)'
  }
})

export const Loading = styled('div', {
  width: '50px',
  height:'50px',
  borderRadius:'50%',
  border: '8px solid',
  borderColor: '$gray500',
  borderRightColor: '$purple100',
  animation: `${s3} 1s infinite linear`,
  margin: '50px auto'
});
