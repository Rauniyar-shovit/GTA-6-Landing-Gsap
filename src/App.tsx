import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-indigo-300">
          Welcome to the world of GTA and GSAP
        </h1>
      </div>
    </main>
  );
};

export default App;
