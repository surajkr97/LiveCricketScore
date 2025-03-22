import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex justify-center my-10'>
      <input className='px-3 md:px-4 py-1 bg-teal-100 rounded-md mr-2 shadow-xl' placeholder='Search Series, Matches...' type="text" />
      <button className='px-6 py-1 bg-red-600 text-white rounded-md cursor-pointer shadow-xl'>Search</button>
    </div>
  )
}

export default Searchbar
