import React from 'react'

const Typography: React.FC = () => {
  return (
    <div className='bg-[#FAFAFB] min-h-screen p-3 md:p-4'>
      <div className='flex items-center text-xs md:text-sm text-gray-600 mb-4 flex-wrap'>
        <span className='text-[#1890FF] mr-1'>Typography</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-[#1890FF] mr-1'>UI Components</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-gray-400'>Typography</span>
      </div>

      <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
        <h1 className='text-xl font-semibold mb-2'>Headings</h1>
        <p className='text-gray-600 text-sm mb-3'>
          Heading classes from h1 to h6 with lighter font weights.
        </p>
        <div className="w-full h-px bg-gray-200 mb-3"></div>
        <h1 className='text-4xl font-light mb-3'>h1 Heading</h1>
        <h2 className='text-3xl font-light mb-3'>h2 Heading</h2>
        <h3 className='text-2xl font-light mb-3'>h3 Heading</h3>
        <h4 className='text-xl font-light mb-3'>h4 Heading</h4>
        <h5 className='text-lg font-light mb-3'>h5 Heading</h5>
        <h6 className='text-base font-light'>h6 Heading</h6>
      </div>


      <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
        <h1 className='text-xl font-semibold mb-2'>Display Headers</h1>
        <div className="w-full h-px bg-gray-200 mb-3"></div>
        <h1 className='text-6xl font-light mb-3'>Display 1</h1>
        <h2 className='text-5xl font-light mb-3'>Display 2</h2>
        <h3 className='text-4xl font-light mb-3'>Display 3</h3>
        <h4 className='text-3xl font-light mb-3'>Display 4</h4>
        <h5 className='text-2xl font-light mb-3'>Display 5</h5>
        <h6 className='text-xl font-light'>Display 6</h6>
      </div>

  
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Inline Text</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <h2 className='text-lg font-medium mb-3'>Text formatting examples</h2>
          <p className='mb-3 text-sm'>
            Use <mark className='bg-yellow-100 px-1'>mark tag</mark> to highlight.
          </p>
          <p className='mb-3 text-sm'>
            <del>Deleted text example</del>
          </p>
          <p className='mb-3 text-sm'>
            <ins>Inserted text example</ins>
          </p>
          <p className='mb-3 text-sm'>
            <strong>Bold text example</strong>
          </p>
          <p className='text-sm'>
            <em>Italicized text example</em>
          </p>
        </div>


        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Text Colors</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <p className='text-blue-600 mb-2 text-sm'>Primary colored text</p>
          <p className='text-gray-600 mb-2 text-sm'>Secondary colored text</p>
          <p className='text-green-600 mb-2 text-sm'>Success colored text</p>
          <p className='text-red-600 mb-2 text-sm'>Danger colored text</p>
          <p className='text-yellow-600 mb-2 text-sm'>Warning colored text</p>
          <p className='text-cyan-600 mb-2 text-sm'>Info colored text</p>
          <p className='text-gray-400 text-sm'>Muted colored text</p>
        </div>
      </div>

    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Unordered</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <ul className='list-disc pl-4 space-y-1 text-sm'>
            {[...Array(6)].map((_, i) => (
              <li key={i}>List item {i + 1}</li>
            ))}
          </ul>
        </div>


        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Ordered</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <ol className='list-decimal pl-4 space-y-1 text-sm'>
            {[...Array(6)].map((_, i) => (
              <li key={i}>List item {i + 1}</li>
            ))}
          </ol>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Unstyled</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <ul className='list-none pl-0 space-y-1 text-sm'>
            {[...Array(5)].map((_, i) => (
              <li key={i}>List item {i + 1}</li>
            ))}
          </ul>
          <div className='h-px bg-gray-200 w-full my-3'></div>
          <p className='text-xs mb-3'>Inline list example:</p>
          <div className='h-px bg-gray-200 w-full my-3'></div>
          <ul className='flex flex-wrap gap-2 text-xs'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg shadow-sm p-4'>
          <h1 className='text-xl font-semibold mb-2'>Blockquotes</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <p className='mb-3 text-sm'>Different blockquote styles:</p>

          <blockquote className='border-l-2 border-gray-300 pl-3 mb-3 italic text-sm'>
            <p>Standard blockquote example text.</p>
            <footer className='not-italic text-xs mt-1'>- Author in <cite className='font-semibold'>Source</cite></footer>
          </blockquote>

          <blockquote className='border-l-2 border-blue-500 pl-3 italic bg-blue-50 p-3 rounded text-sm'>
            <p>Highlighted blockquote example text.</p>
            <footer className='not-italic text-xs mt-1'>- Author in <cite className='font-semibold'>Source</cite></footer>
          </blockquote>
        </div>

    
        <div className='bg-white rounded-lg shadow-sm p-4'> 
          <h1 className='text-xl font-semibold mb-2'>Descriptions</h1>
          <div className='h-px bg-gray-200 w-full mb-3'></div>
          <dl className='space-y-3 text-sm'>
            <div className='sm:flex sm:gap-3'>
              <dt className='font-semibold flex-shrink-0 w-32'>Term 1</dt>
              <dd className='text-gray-600'>
                Description text for the first term goes here.
              </dd>
            </div>

            <div className='sm:flex sm:gap-3'>
              <dt className='font-semibold flex-shrink-0 w-32'>Term 2</dt>
              <dd className='text-gray-600'>
                Description text for the second term.
              </dd>
            </div>

            <div className='sm:flex sm:gap-3'>
              <dt className='font-semibold flex-shrink-0 w-32'>Long Term</dt>
              <dd className='text-gray-600'>
                Extended description text that might wrap to multiple lines.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Typography