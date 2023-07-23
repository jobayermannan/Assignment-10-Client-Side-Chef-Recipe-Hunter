import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const BlogPage = () => {
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: 'Blog',
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-400 to-sky-500">
  <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4  text-blue-950">Blog Page</h1>
      <div ref={ref} className="px-8 py-8 text-black">
        <div className="mb-8">
          <h2 className="text-2xl rounded-md px-2 text-zinc-200 font-semibold mb-2 text-bold bg-gradient-to-r from-slate-800 to-pink-300">
            Controlled vs Uncontrolled Components
          </h2>
          <p className='text-xl font-mono font-medium'>
            Controlled components are components where the form data is handled
            by the React component. The input element's value is controlled by
            React in this way. In contrast, uncontrolled components are
            components where form data is handled by the DOM itself, and the
            data is retrieved from the DOM using a ref when needed.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl rounded-md px-2 text-zinc-200 font-semibold mb-2 text-bold bg-gradient-to-r from-slate-900 to-pink-300">
            Validating React Props Using PropTypes
          </h2>
          <p className='text-xl font-mono font-medium'>
            You can validate React props using PropTypes by installing the
            `prop-types` library and then defining the expected prop types for a
            component using the `propTypes` property. This allows you to specify
            the data type of each prop, whether it is required or not, and even
            create custom validators.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl rounded-md px-2 text-zinc-200 font-semibold mb-2 text-bold bg-gradient-to-r from-slate-900 to-pink-300">
            Node.js vs Express.js
          </h2>
          <p className='text-xl font-mono font-medium'>
            Node.js is a runtime environment that allows JavaScript to be
            executed on the server-side, enabling high-performance and scalable
            network applications. On the other hand, Express.js is a minimalist
            web application framework built on top of Node.js, providing a simple
            and flexible way to create web servers and APIs.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl rounded-md px-2 text-zinc-200 font-semibold mb-2 text-bold bg-gradient-to-r from-slate-900 to-pink-300">
            Custom Hooks in React
          </h2>
          <p className='text-xl font-mono font-medium'>
            A custom hook in React is a JavaScript function whose name starts
            with ”use” and that may call other Hooks. Custom hooks allow you to
            extract component logic into reusable functions, making it easier to
            share common functionality between components. You might create a
            custom hook when you have component logic that needs to be used by
            multiple components.
          </p>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePrint}
      >
        Download as PDF
      </button>
    </div>
    </div>
  
  );
};

export default BlogPage;
