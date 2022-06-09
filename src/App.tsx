import { useState, useEffect } from "react"

import { HeaderApp } from "./components/Header"
import { Articles } from "./components/Articles"

import { fetchArticles, ArticlesDTO } from "./requests/Articles";

function App() {
  const [articleList, setArticleList] = useState<ArticlesDTO>([])
  const [articleSource, setArticleSource] = useState<ArticlesDTO>([])

  useEffect(() => {
    const articlesData = fetchArticles();
    const articlesFormatted = articlesData.map((article) => {
      return { ...article, date: new Date(article.date).toLocaleDateString() }
    })
    setArticleList([...articlesFormatted])
    setArticleSource([...articlesFormatted])
  }, [])

  function searchArticle(articleTitle: string) {
    const articleFound = articleSource.filter(({ title }) => title.indexOf(articleTitle) === 0)

    if (articleFound) {
      setArticleList([...articleFound])
    }
  }

  function toggleFavorite(articleIndex: number) {
    if (articleIndex >= 0) {
      articleList[articleIndex].isFavorite = !articleList[articleIndex].isFavorite;
      setArticleList([...articleList])
    }
  }

  return (
    <div className="App">
      <HeaderApp onSearch={searchArticle} />
      <main className="container">
        <Articles articles={articleList} toggleFavorite={toggleFavorite} />
      </main>

    </div>
  )
}

export default App
