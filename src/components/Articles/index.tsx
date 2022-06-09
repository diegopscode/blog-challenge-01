import { ArticlesDTO } from "../../requests/Articles";
import { Article } from "../Article";
import { ArticlesContainer } from "./styles";

interface ArticlesProps {
  articles: ArticlesDTO
  toggleFavorite: (articleIndex: number) => void;
}

export function Articles({ articles, toggleFavorite }: ArticlesProps) {
  return (
    <ArticlesContainer>
      {articles.map(({ date, title, content, isFavorite }, key) => {
        return (
          <Article date={date} title={title} content={content} isFavorite={isFavorite} key={key} index={key} toggleFavorite={toggleFavorite} />
        )
      })}
    </ArticlesContainer>
  )
}