import { Search } from "../Search/Search";
import { Container } from "../Container";
import { Header, Navbar, NavLink } from "./styles";

interface HeaderProps {
  onSearch: (articleTitle: string) => void;
}

export function HeaderApp({ onSearch }: HeaderProps) {
  return (
    <Header>
      <Container>
        <Navbar>
          <NavLink>Codelândia</NavLink>
          <NavLink>blog</NavLink>
        </Navbar>
        <Search onSearch={onSearch} />
      </Container>
    </Header>
  )
}