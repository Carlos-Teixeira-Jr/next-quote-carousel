export interface IQuotes {
  id: number
  quote: string
  author: string
  img: string
  job: string
}

export const quotes: IQuotes[] = [
  {
    id: 1,
    quote: "Existem momentos na vida onde a questão de saber se se pode pensar diferentemente do que se pensa, e perceber diferentemente do que se vê, é indispensável para continuar a olhar ou a refletir.",
    author: "Michel Foucault",
    img: "/image/michel-foucault.jpeg",
    job: "Filósofo"
  },
  {
    id: 2,
    quote: "Um conceito é como um tijolo. Ele pode ser usado pra construir um tribunal da razão. Ou pode ser jogado através da janela..",
    author: "Gilles Deleuze",
    img: "/image/deleuze.png",
    job: "Filósofo"
  },
  {
    id: 3,
    quote: "As convicções são inimigas mais perigosas da verdade do que as mentiras.",
    author: "Friedrich Nietzsche",
    img: "/image/Nietzsche1882.jpg",
    job: "Filósofo"
  }
];