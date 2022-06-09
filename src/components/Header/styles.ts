import { styled } from '@stitches/react';

export const Header = styled("header", {
  background: "linear-gradient(270deg, #3EA1DB 0%, #574AE8 100%)",
  padding: "40px 0"
})

export const Navbar = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "70px",
})

export const NavLink = styled("a", {
  fontsize: "24px",
  lineHeight: "30px",
  fontWeight: "400",
  color: "white"
})