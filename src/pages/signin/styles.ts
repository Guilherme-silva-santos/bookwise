import { styled } from "@/styles/stitches.config";


export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundColor: "$gray800",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '2rem',
  padding: "20px"
})

export const Banner = styled("div", {
  width: "598px",
  height: "100%",
  backgroundImage: "url(/images/hero.png)",
  backgroundSize: "cover",
  borderRadius: '10px',

  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

export const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  '.group': {
    display: "flex",
    flexDirection: "column",
    gap: '1rem',

    '.header': {
      marginBottom: '24px'
    }
  },

  
})