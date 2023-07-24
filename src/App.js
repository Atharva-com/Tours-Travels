import './App.css';
import {BsWhatsapp} from 'react-icons/bs'
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Tour from './components/Tour';
import Book from './components/Book';
import Testimonals from './components/Testimonals';

function App() {
  return (
    <div>

      <Home />

      <Service />

      <About />

      <section className='my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4'>

        <div className='flex items-center justify-center gap-x-4'>

          <div className='rounded-full w-10 h-10 bg-orange-500'></div>

          <div className='sm:text-[2rem] text-[1rem] font-semibold leading-8'>Plan your next road trip</div>

          <div className='w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80'>
            <BsWhatsapp className='text-2xl' />
          </div>

        </div>
        
      </section>

      <Tour />

      <Book />

      {/* Parallex image */}
      <div className='absolute -z-10 flex justify-center items-center bg-cover bg-fixed bg-no-repeat bg-center bg-img'>
      </div>

      <Testimonals />
      
    </div>
  );
}

export default App;
