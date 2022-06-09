import { styled } from "@stitches/react";

import { MdSearch } from "react-icons/md";

export const SearchContainer = styled('div', {
  position: 'relative',
})

export const SearchInput = styled(`input`, {
  width: '100%',
  height: `65px`,
  fontSize: "18px",
  lineHeight: "22px",
  color: "white",
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '5px',
  border: "1px solid transparent",
  padding: "20px 20px 20px 64px",
  outline: "none",
  "&::placeholder": {
    color: "rgba(255,255,255,.5)"
  }
})

export const SearchIcon = styled(MdSearch, {
  position: 'absolute',
  left: "17px",
  top: "17px",
  fontSize: "30px",
  color: "white"
})
