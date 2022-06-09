import { styled } from "@stitches/react";

export const ArticleContainer = styled("article", {
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: '0px 0px 10px 0px #13131F0D',
  padding: "25px"
})

export const ArticleDate = styled("span", {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
  color: '#717171',
})

export const FavoriteBtn = styled("button", {
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  "& > svg": {
    fontSize: "25px",
    color: "#574AE8"
  }
})

export const ArticleHead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "22px"
})

export const ArticleTitle = styled("h2", {
  fontWeight: '400',
  fontSize: '26px',
  lineHeight: '32px',
  color: "#1A202C",
  marginBottom: "8px"
})

export const ArticleContent = styled("p", {
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '32px',
  color: '#717171',
})