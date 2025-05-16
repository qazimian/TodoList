import React from 'react'
import Todo from './Components/Todo'
import Footer from './Components/footer'


const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>
      <Todo/>
      <Footer/>
    </div>
  )
}

export default App