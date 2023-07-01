"use client";

import Image from 'next/image'
import { useState } from 'react';

const quotes = [
  {
    id: 1,
    quote: "Existem momentos na vida onde a questão de saber se se pode pensar diferentemente do que se pensa, e perceber diferentemente do que se vê, é indispensável para continuar a olhar ou a refletir.",
    author: "Michel Foucault",
    img: "/images/michel-foucault.jpeg",
    job: "Filósofo"
  },
  {
    id: 2,
    quote: "Um conceito é como um tijolo. Ele pode ser usado pra construir um tribunal da razão. Ou pode ser jogado através da janela..",
    author: "Gilles Deleuze",
    img: "/images/deleuze.png",
    job: "Filósofo"
  },
  {
    id: 3,
    quote: "As convicções são inimigas mais perigosas da verdade do que as mentiras.",
    author: "Friedrich Nietzsche",
    img: "/images/Nietzsche1882.jpg",
    job: "Filósofo"
  }
];

function Home() {

  const [indice, setIndice] = useState(0);
  const quote = quotes[indice];

  const nextIndex = () => {
    setIndice((prevIndice) => (prevIndice + 1) % quotes.length);
  };

  const previousIndex = () => {
    setIndice((prevIndice) => (prevIndice - 1 + quotes.length) % quotes.length);
  };

  const randomQuote = () => {
    let randomItem;
    do {
      randomItem = Math.floor(Math.random() * quotes.length);
    } while (randomItem === indice);
  
    setIndice(randomItem);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sky-200">

      <h1 className='text-4xl font-semibold text-sky-950 my-10'>C I T A Ç Õ E S</h1>

      <div className='flex flex-col justify-center items-center gap-5 w-fit md:w-2/4 h-fit md:h-[600px] bg-slate-100 rounded-3xl drop-shadow-2xl mb-20 mx-4 md:mx-0'>
        <Image 
          src={quote.img} 
          alt={'thinker-picture'}
          width={150}
          height={150}
          className='rounded-full flex shrink-0 mt-5 w-36 h-36 drop-shadow-2xl'
        />
        <h2 className='text-4xl text-center'>{quote.author}</h2>
        <h3 className='text-2xl'>{quote.job}</h3>
        <p className='px-4 md:px-16 text-lg font-medium text-center text-sky-950'>{quote.quote}</p>
        <div className='flex gap-4 md:gap-16 mx-5'>
          <button 
            className='bg-sky-400 p-5 text-base md:text-4xl rounded-2xl drop-shadow-2xl h-fit'
            onClick={previousIndex}
          >{'<'}</button>
          <button 
            className='bg-sky-400 p-5 text-xl md:text-4xl rounded-2xl drop-shadow-2xl mb-5'
            onClick={randomQuote}
          >
            aleatório
          </button>
          <button 
            className='bg-sky-400 p-5 text-base md:text-4xl rounded-2xl drop-shadow-2xl h-fit'
            onClick={nextIndex}
          >{'>'}</button>
        </div>
      </div>
    </main>
  )
}

export default Home;
