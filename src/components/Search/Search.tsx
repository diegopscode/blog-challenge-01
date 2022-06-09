import { SearchContainer, SearchIcon, SearchInput } from "./styles";

interface SearchProps {
  onSearch: (value: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput type="search" placeholder="Pesquisar no blog" onChange={({ target }) => onSearch(target.value)} />
    </SearchContainer>
  )
}