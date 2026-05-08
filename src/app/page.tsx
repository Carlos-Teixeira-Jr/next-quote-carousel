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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/random-quote`
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

      <section className="w-full md:w-2/4 px-4 mb-16">
        <div className="bg-slate-100 rounded-3xl drop-shadow-2xl p-8">
          
          <h2 className="text-3xl font-bold text-sky-950 text-center mb-6">
            Como essa aplicação funciona?
          </h2>

          <p className="text-center text-slate-700 text-lg mb-8">
            Este projeto consome múltiplas APIs externas e utiliza um backend
            intermediário em Express para processar os dados antes de exibir
            a citação ao usuário.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-sky-100 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-sky-900 mb-3">
                1. Citação
              </h3>
              <p className="text-slate-700">
                Busca uma citação aleatória em inglês através da API
                <span className="font-semibold"> ZenQuotes</span>.
              </p>
            </div>

            <div className="bg-sky-100 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-sky-900 mb-3">
                2. Tradução
              </h3>
              <p className="text-slate-700">
                O backend traduz automaticamente a frase para português usando
                uma API de tradução.
              </p>
            </div>

            <div className="bg-sky-100 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-sky-900 mb-3">
                3. Imagem
              </h3>
              <p className="text-slate-700">
                Uma terceira API busca a imagem do autor para completar a
                experiência visual.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-sky-950 rounded-2xl p-6 text-white text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Stack utilizada
            </h3>

            <p className="text-lg">
              Next.js • TypeScript • Tailwind • Node.js • Express • APIs REST
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;
