"use client"
import VideoBackground from "./componentes/components/VideoBackground";
import Carousel from "./componentes/carousel";


export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Vídeo de fundo */}
      <VideoBackground /> 

      {/* Conteúdo da página */}
      <div className="relative z-10 flex flex-col items-center justify-between text-white spa">
        <div className="max-w-4xl mx-auto bg-red-400"> {/* Ajuste a largura aqui */}
          <h1 className="text-4xl font-bold text-transparent text-center">
            Bem-vindo à MyyTatua !
          </h1>
          <p className="text-lg mt-4">Cadastre-se para receber nossas novidades e promoções!</p>
          <form className="mt-8 flex flex-col items-center">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 mb-4 w-full max-w-xs rounded-lg text-gray-900"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-3 mb-4 w-full max-w-xs rounded-lg text-gray-900"
            />
            <input
              type="numero"
              placeholder="Seu Whatsapp"
              className="p-3 mb-4 w-full max-w-xs rounded-lg text-gray-900"
            />
            <button className="p-3 w-full max-w-xs bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-transform">
              Cadastrar
            </button>
          </form>

        <div className="w-10 h-7">
          <Carousel/>
</div>
          

        </div>
      </div>

      {/* Sobreposição de gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/80 z-0"></div>
    </div>
  );
}
