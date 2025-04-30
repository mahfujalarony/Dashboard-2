import React from 'react';

const Color: React.FC = () => {
  const colorClasses = [
    { name: 'blue', shades: [
      'bg-blue-100 text-blue-100', 'bg-blue-200 text-blue-200', 'bg-blue-300 text-blue-300',
      'bg-blue-400 text-blue-400', 'bg-blue-500 text-blue-500', 'bg-blue-600 text-blue-600',
      'bg-blue-700 text-blue-700', 'bg-blue-800 text-blue-800', 'bg-blue-900 text-blue-900'
    ]},
    { name: 'indigo', shades: [
      'bg-indigo-100 text-indigo-100', 'bg-indigo-200 text-indigo-200', 'bg-indigo-300 text-indigo-300',
      'bg-indigo-400 text-indigo-400', 'bg-indigo-500 text-indigo-500', 'bg-indigo-600 text-indigo-600',
      'bg-indigo-700 text-indigo-700', 'bg-indigo-800 text-indigo-800', 'bg-indigo-900 text-indigo-900'
    ]},
    { name: 'purple', shades: [
      'bg-purple-100 text-purple-100', 'bg-purple-200 text-purple-200', 'bg-purple-300 text-purple-300',
      'bg-purple-400 text-purple-400', 'bg-purple-500 text-purple-500', 'bg-purple-600 text-purple-600',
      'bg-purple-700 text-purple-700', 'bg-purple-800 text-purple-800', 'bg-purple-900 text-purple-900'
    ]},
    { name: 'pink', shades: [
      'bg-pink-100 text-pink-100', 'bg-pink-200 text-pink-200', 'bg-pink-300 text-pink-300',
      'bg-pink-400 text-pink-400', 'bg-pink-500 text-pink-500', 'bg-pink-600 text-pink-600',
      'bg-pink-700 text-pink-700', 'bg-pink-800 text-pink-800', 'bg-pink-900 text-pink-900'
    ]},
    { name: 'red', shades: [
      'bg-red-100 text-red-100', 'bg-red-200 text-red-200', 'bg-red-300 text-red-300',
      'bg-red-400 text-red-400', 'bg-red-500 text-red-500', 'bg-red-600 text-red-600',
      'bg-red-700 text-red-700', 'bg-red-800 text-red-800', 'bg-red-900 text-red-900'
    ]},
    { name: 'orange', shades: [
      'bg-orange-100 text-orange-100', 'bg-orange-200 text-orange-200', 'bg-orange-300 text-orange-300',
      'bg-orange-400 text-orange-400', 'bg-orange-500 text-orange-500', 'bg-orange-600 text-orange-600',
      'bg-orange-700 text-orange-700', 'bg-orange-800 text-orange-800', 'bg-orange-900 text-orange-900'
    ]},
    { name: 'yellow', shades: [
      'bg-yellow-100 text-yellow-100', 'bg-yellow-200 text-yellow-200', 'bg-yellow-300 text-yellow-300',
      'bg-yellow-400 text-yellow-400', 'bg-yellow-500 text-yellow-500', 'bg-yellow-600 text-yellow-600',
      'bg-yellow-700 text-yellow-700', 'bg-yellow-800 text-yellow-800', 'bg-yellow-900 text-yellow-900'
    ]},
    { name: 'green', shades: [
      'bg-green-100 text-green-100', 'bg-green-200 text-green-200', 'bg-green-300 text-green-300',
      'bg-green-400 text-green-400', 'bg-green-500 text-green-500', 'bg-green-600 text-green-600',
      'bg-green-700 text-green-700', 'bg-green-800 text-green-800', 'bg-green-900 text-green-900'
    ]},
    { name: 'teal', shades: [
      'bg-teal-100 text-teal-100', 'bg-teal-200 text-teal-200', 'bg-teal-300 text-teal-300',
      'bg-teal-400 text-teal-400', 'bg-teal-500 text-teal-500', 'bg-teal-600 text-teal-600',
      'bg-teal-700 text-teal-700', 'bg-teal-800 text-teal-800', 'bg-teal-900 text-teal-900'
    ]},
    { name: 'cyan', shades: [
      'bg-cyan-100 text-cyan-100', 'bg-cyan-200 text-cyan-200', 'bg-cyan-300 text-cyan-300',
      'bg-cyan-400 text-cyan-400', 'bg-cyan-500 text-cyan-500', 'bg-cyan-600 text-cyan-600',
      'bg-cyan-700 text-cyan-700', 'bg-cyan-800 text-cyan-800', 'bg-cyan-900 text-cyan-900'
    ]},
    { name: 'gray', shades: [
      'bg-gray-100 text-gray-100', 'bg-gray-200 text-gray-200', 'bg-gray-300 text-gray-300',
      'bg-gray-400 text-gray-400', 'bg-gray-500 text-gray-500', 'bg-gray-600 text-gray-600',
      'bg-gray-700 text-gray-700', 'bg-gray-800 text-gray-800', 'bg-gray-900 text-gray-900'
    ]}
  ];

  return (
    <div className='bg-[#FAFAFB] min-h-screen p-4 md:p-6'>
  
      <div className='flex items-center text-sm text-gray-600 mb-6 flex-wrap'>
        <span className='text-[#1890FF] mr-1'>Home</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-[#1890FF] mr-1'>UI Components</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-gray-400'>Color</span>
      </div>

  
      <div className='bg-white border p-4 rounded-lg shadow-md mb-8'>
        <h1 className='text-lg font-semibold mb-4'>Background Color</h1>
        <div className='h-0.5 w-full bg-gray-200 mb-4'></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorClasses.map((color) => (
            <div key={color.name} className='flex flex-col space-y-2'>
              {color.shades.map((shadeClass, index) => (
                <div
                  key={`${color.name}-${index}`}
                  className={`${shadeClass} p-3 rounded shadow-sm flex justify-between items-center`}
                >
                  <span className="text-white mix-blend-difference font-mono text-xs">
                    bg-{color.name}-{(index + 1) * 100}
                  </span>
                  <span className="text-black mix-blend-difference font-mono text-lg">
                  
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


      <div className='bg-white border p-4 rounded-lg shadow-md'>
        <h1 className='text-lg font-semibold mb-4'>Text Color</h1>
        <div className='h-0.5 w-full bg-gray-200 mb-4'></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorClasses.map((color) => (
            <div key={color.name} className='flex flex-col space-y-2'>
              {color.shades.map((shadeClass, index) => {
                const textClass = shadeClass.replace('bg-', 'text-').split(' ')[0];
                return (
                  <div
                    key={`text-${color.name}-${index}`}
                    className={`${textClass} p-3 rounded border border-gray-200 bg-white font-mono text-xs`}
                  >
                    text-{color.name}-{(index + 1) * 100}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Color;