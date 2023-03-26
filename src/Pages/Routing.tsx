import { Route, Routes, Link } from "react-router-dom"
import Home from "./Home";
import Work from "./Work";
import CV from "./CV";
import Boutique from "./Boutique";
import Experiments from "./Experiments";
import Photography from "./Photography";
import PrintAndScreen from "./PrintAndScreen";
import ShoppingCartIcon from "../assets/ShoppingCartIcon";

const Routing = () => {
    
 return (
<>
<div>
  <nav className="flex items-center pb-10">
      <div>
        <ul className="flex text-sm space-x-4">
          <li><Link to="/cv">CV</Link></li>
          <li><a href="https://www.linkedin.com/in/seferian-ro/" target="_blank">LinkedIn</a></li>
          <li><Link to="/boutique">Boutique</Link></li>
        </ul>
      </div>

      <div className="text-2xl font-bold">
        <Link to="/">
          <h1>
              G. Ray Seferian
          </h1>
        </Link>
      </div>

      <div>
        <ShoppingCartIcon />
      </div>

  </nav>
 </div>
 <div className="pb-5">
  <a className="text-5xl font-bold py-10">
    Unfamiliar home - coming soon. 
  </a>
 </div>
 <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/work" element={<Work />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/printandscreen" element={<PrintAndScreen />} />
      </Routes>
 </div>
 <div className="py-8">
  <a className="text-md font-bold py-10">
    The first song I purchased was "What you waiting for" by Gwen Stefani. I was in first grade. What about you?
  </a>
 </div>
 <div className="flex align-center justify-center space-x-20">
  <div>
   <a className="text-sm">
    G. Ray Seferian
    </a>
   </div>

   <div>
    <div>
      <a className="text-sm">
      +00 00 00 00
      </a>
    </div>
    <div>
      <a className="text-sm">
      email@example.com
      </a>
    </div>
   </div>

   <div>
    <a className="text-sm">Currently located in Berlin</a>
   </div>

 </div>
 </>
 );
};

export default Routing;