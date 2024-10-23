import React from 'react';

const Article = () => {
  return (
    <div className="w-[calc(100%-82px)] h-full flex flex-col justify-start items-start p-6 bg-white shadow-none rounded-lg">
      <div className="flex items-center justify-start gap-3">
        <div className="w-2 h-4 bg-gray-300 rounded-full" />
        <div className="text-gray-500 text-sm">December 25, 2023</div>
      </div>
      <div className="mt-3 text-gray-900 text-lg font-semibold">
        Lorem ipsum dolor sit amet
      </div>
      <div className="mt-2 text-gray-600 text-sm leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...
      </div>
      <div className="flex items-center justify-start mt-4 gap-2 text-teal-500 text-sm">
      <a href="/article" className="hover:underline">Read article</a>
        <div className="relative w-4 h-4">
          <div className="absolute w-1 h-2 bg-teal-500 left-1 top-1" />
        </div>
      </div>
    </div>
  );
};

export default Article;
