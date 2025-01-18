
import React, { useState } from "react"; 
import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandList from "./components/Band/BandList";
import BandDetails from "./components/Band/BandDetails";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  const [selectedBand, setSelectedBand] = useState(null);

  const handleBandClick = (band) => {
    setSelectedBand(band);
  };

  // We could have use routes here, but since it was a simple page. I decided to do it with a simple state.
  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {selectedBand ? (
        <BandDetails band={selectedBand} onBack={() => setSelectedBand(null)} />
      ) : (
        <BandList bands={bands} onBandClick={handleBandClick} />
      )}
    </div>
  );
}

export default App;
