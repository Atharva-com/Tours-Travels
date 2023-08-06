import "./App.css";
import { BsWhatsapp } from "react-icons/bs";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service";
import Tour from "./components/Tour";
import Book from "./components/Book";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Cars from "./components/Cars";
import { Constants } from "./constants";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <Home />

      <Service />

      <About />

      <section className="my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4">
        <div className="flex items-center justify-center gap-x-4">
          <div className="w-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center p-4 hover:opacity-80">
            <BsFillTelephoneFill className="text-2xl" />
          </div>

          <div className="sm:text-[2rem] text-[1rem] font-semibold leading-8">
            Plan your next road trip
          </div>

          <a href={Constants.whatsapp}>
            <div className="w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80">
              <BsWhatsapp className="text-2xl" />
            </div>
          </a>
        </div>
      </section>

      <Tour />

      <Book />

      <Cars />

      {/* Parallex image */}
      <div className="absolute -z-10 flex justify-center items-center bg-cover bg-fixed bg-no-repeat bg-center bg-img"></div>

      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
