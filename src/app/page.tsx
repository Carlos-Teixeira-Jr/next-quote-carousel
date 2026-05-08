"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';

interface IQuote {
  quote: string;
  author: string;
  image: string;
}

function Home() {

  const [quoteData, setQuoteData] = useState<IQuote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/random-quote"
      );

      const data = await response.json();

      setQuoteData(data);
    } catch (error) {
      console.error("Erro ao buscar citação:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (!quoteData) {
    return (
      <main className="flex min-h-screen justify-center items-center bg-sky-200">
        <h1 className="text-2xl text-sky-950">
          Carregando...
        </h1>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sky-200">

      <h1 className='text-4xl font-semibold text-sky-950 my-10'>C I T A Ç Õ E S</h1>

      <div className='flex flex-col justify-center items-center gap-5 w-fit md:w-2/4 h-[580px] md:h-[600px] bg-slate-100 rounded-3xl drop-shadow-2xl mb-20 mx-4 md:mx-0'>
        <Image 
          src={quoteData?.image || "/images/default-avatar.png"} 
          alt={'thinker-picture'}
          width={150}
          height={150}
          className='rounded-full flex shrink-0 mt-5 w-36 h-36 drop-shadow-2xl'
        />
        <h2 className='text-4xl text-center text-black'>{quoteData.author}</h2>
        <p className='px-4 md:px-16 text-lg font-medium text-center text-sky-950 h-fit py-5'>{quoteData.quote}</p>
        <div className='flex gap-4 md:gap-16 mx-5'>
          <button 
            className='bg-sky-400 p-5 text-xl md:text-4xl rounded-2xl drop-shadow-2xl mb-5 hover:scale-105 transition-all duration-200 hover:bg-sky-500 hover:text-white'
            onClick={fetchRandomQuote}
          >
            {loading ? "carregando..." : "aleatório"}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home;
