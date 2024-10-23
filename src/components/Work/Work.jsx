import React from 'react';

const Work = () => {
  return (
    <div className="w-[396px] h-[398px] p-6 bg-white rounded-lg border border-gray-300 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6">
          <div className="absolute w-5 h-5 left-1 top-1 bg-gray-200 border border-gray-400 rounded"></div>
        </div>
        <h2 className="text-gray-900 text-lg font-semibold">Work</h2>
      </div>
      <p className="mt-2 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </p>
      <div className="mt-4 flex flex-col gap-4">
        {[
          { company: 'Slack', role: 'Software Engineer', duration: '2016 - Present', imgSrc: 'https://via.placeholder.com/28x28' },
          { company: 'Spotify', role: 'Software Engineer', duration: '2014 - 2015', imgSrc: 'https://via.placeholder.com/28x28' },
          { company: 'Audible', role: 'Software Engineer', duration: '2012 - 2013', imgSrc: 'https://via.placeholder.com/28x28' },
          { company: 'Microsoft', role: 'Software Engineer', duration: '2010 - 2011', imgSrc: 'https://via.placeholder.com/28x28' },
        ].map((work, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex justify-center items-center w-10 h-10 rounded-full border border-gray-200 shadow-sm">
              <img className="w-7 h-7 rounded-full" src={work.imgSrc} alt={work.company} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-gray-900 font-medium">{work.company}</span>
              <div className="flex justify-between items-center mt-1"> {/* Margen ajustado aquí */}
                <span className="text-gray-600 text-xs uppercase">{work.role}</span>
                <span className="text-gray-500 text-xs text-right">{work.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
