import { styled } from "@/styles/stitches.config";
import { lighten } from 'polished'

export const Container = styled('button', {
  all: "unset",
  boxSizing: "border-box",
  backgroundColor: "$gray600",
  borderRadius: "10px",
  padding: "20px 24px",
  width: '372px',

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "20px",

  cursor: "pointer",
  transition: "all 200ms",

  '&:hover': {
    backgroundColor: `${lighten(0.1, '#252D4A')}`,
  }
})