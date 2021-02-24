import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pt-16"></div>
      <Navbar />
      <div className="">
        <div className="py-32 bg-red-200">
          <div className="px-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            cum exercitationem ut nulla maiores, ipsam voluptatem rerum, iusto
            magnam asperiores soluta nemo atque natus mollitia. Consequuntur
            quis laudantium eveniet.
          </div>
        </div>
        <div className="py-32 bg-blue-200">
          <div className="px-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            cum exercitationem ut nulla maiores, ipsam voluptatem rerum, iusto
            magnam asperiores soluta nemo atque natus mollitia. Consequuntur
            quis laudantium eveniet.
          </div>
        </div>

        <div className="py-32 bg-yellow-200">
          <div className="px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus excepturi voluptatibus aliquid dicta eligendi, quis
            nesciunt officiis optio quae et velit nobis, laboriosam qui
            assumenda fugit, quaerat perferendis molestias.
          </div>
        </div>
        <div className="py-32 bg-green-200">
          <div className="px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            fugit repudiandae iure? Accusamus, sequi praesentium. Ad inventore
            aliquid atque voluptatem, totam libero deserunt dolorum esse culpa
            amet itaque nesciunt necessitatibus.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
