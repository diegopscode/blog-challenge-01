import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ArticleContainer, ArticleContent, ArticleDate, ArticleHead, ArticleTitle, FavoriteBtn } from "./styles";

export interface ArticleProps {
  date: string;
  title: string;
  content: string;
  isFavorite?: boolean;
  toggleFavorite: (articleIndex: number) => void;
  index: number;
}

export function Article({ date, title, content, isFavorite, toggleFavorite, index }: ArticleProps) {
  return (
    <ArticleContainer>
      <ArticleHead>
        <ArticleDate>{date}</ArticleDate>
        <FavoriteBtn onClick={() => toggleFavorite(index)}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </FavoriteBtn>
      </ArticleHead>

      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>{content}</ArticleContent>

    </ArticleContainer >
  )
}