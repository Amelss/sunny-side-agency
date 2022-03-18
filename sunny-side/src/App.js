import Header from "./Components/Header";
import Body from "./Components/Body";
import Testimonials from "./Components/Testimonials";
import PhotoTile from "./Components/PhotoTile";


function App() {


  return (
    <div className="">
      <Header />
      <Body />
      <Testimonials />
      <PhotoTile />



      <div class="text-center pt-5 pb-3 text-xs">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#" className="text-desCyan">Ameley Kwei-Armah</a>.
      </div>
    </div>
  );
}

export default App;
