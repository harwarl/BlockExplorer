import { useEffect, useState } from "react";
// import { ethers } from "ethers";

import "./App.css";
import Form from "./Components/Form";
import Blocks from "./Components/Blocks";
import Info from "./Components/Info";
import { AlchemyFunctions } from "./utils/functions";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const [blockNumber, setBlockNumber] = useState("");
  const [searchValue, setSearchValue] = useState({
    value: "",
    type: "",
  });
  const [blockInfo, setBlockInfo] = useState(null);

  async function getBlockInfo() {
    setBlockNumber(await AlchemyFunctions.getBlockNumber());
    setBlockInfo(await AlchemyFunctions.getBlock("latest"));
  }

  useEffect(() => {
    getBlockInfo();
  });

  return (
    <div className="App">
      {/* <Form searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      <Info blockInfo={blockInfo} />
      <Blocks blockNumber={blockNumber} />
    </div>
  );
}

export default App;
