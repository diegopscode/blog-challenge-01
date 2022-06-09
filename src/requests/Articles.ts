
export type ArticleDTO = {
  date: string;
  title: string;
  content: string;
  isFavorite?: boolean;
}

export type ArticlesDTO = ArticleDTO[]

export function fetchArticles() {
  return [
    {
      date: '2022-01-01',
      title: 'Agora é oficial: o Windows 11 está vindo',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      isFavorite: true
    },
    {
      date: '2022-03-03',
      title: 'Tim Berners-Lee vai leiloar código-fonte da web',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      isFavorite: false
    },
    {
      date: '2022-05-05',
      title: 'Tem Firefox novo no pedaço e você vai querer migrar',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      isFavorite: true
    },
    {
      date: '2022-09-09',
      title: 'John McAfee, criador do antivírus McAfee, morre',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      isFavorite: false
    },
  ]
}