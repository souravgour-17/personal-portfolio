import React from 'react';
export function Button({children, className='', ...props}) {
  return <button className={`px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 ${className}`} {...props}>{children}</button>;
}