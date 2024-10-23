import React from 'react';

const Skills = () => {
  return (
    <div className="w-[398px] h-[396px] p-6 bg-white rounded-lg border border-gray-300 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6">
          <div className="absolute w-5 h-5 bg-gray-100 border border-gray-400 rounded" />
        </div>
        <div className="text-gray-900 text-lg font-semibold">Skills</div>
      </div>
      <div className="mt-2 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {/* Skill 1 */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-200">
            <div className="w-8 h-8 bg-[#E34F26] rounded-full" />
          </div>
          <div className="flex-1">
            <div className="text-gray-900 font-medium">HTML</div>
            <div className="bg-gray-300 h-6 rounded">
              <div className="bg-teal-600 h-full" style={{ width: '70%' }} />
            </div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-200">
            <div className="w-8 h-8 bg-[#1B73BA] rounded-full" />
          </div>
          <div className="flex-1">
            <div className="text-gray-900 font-medium">CSS</div>
            <div className="bg-gray-300 h-6 rounded">
              <div className="bg-teal-600 h-full" style={{ width: '80%' }} />
            </div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-200">
            <div className="w-8 h-8 bg-[#F0DB4F] rounded-full" />
          </div>
          <div className="flex-1">
            <div className="text-gray-900 font-medium">JavaScript</div>
            <div className="bg-gray-300 h-6 rounded">
              <div className="bg-teal-600 h-full" style={{ width: '90%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
