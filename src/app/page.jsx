import React from 'react';
import Profile from '@/components/Profile/Profile';
import Article from '@/components/Article/Article';
import Signup from '@/components/Signup/Signup';
import Work from '@/components/Work/Work';
import Skills from '@/components/Skills/Skills';

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <div className="flex justify-between mx-[144px]">
      <div className="flex flex-col items-start">
        <Profile />
        <div className="mt-6 w-[696px] h-[594px] bg-white shadow-none rounded-lg flex flex-col">
          <div className="mt-6 w-[calc(100%-82px)]">
            <Article />
          </div>
          <div className="mt-6 w-[calc(100%-82px)]">
            <Article />
          </div>
          <div className="mt-6 w-[calc(100%-82px)]">
            <Article />
          </div>
        </div>
      </div>
      {/* Componente Signup alineado a la altura del contenedor de artículos */}
      <div className="relative" style={{ top: '400px', marginLeft: '-144px' }}>
        <Signup />
        {/* Componente Work debajo de Signup con separación de 24px */}
        <div className="mt-6">
          <Work />
        </div>
        {/* Componente Skills debajo de Work con separación de 24px */}
        <div className="mt-6">
          <Skills />
        </div>
      </div>
    </div>
  );
}
