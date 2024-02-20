import Container from "./components/Container"
import { useState } from "react";
import SettingsPanel from "./components/SettingsPanel"

function App() {

  const backgrounds = [
		{ id: 1, title: "Rocky river" },
		{ id: 2, title: "Forest" },
	];

  const [bgImage, setBgImage] = useState('forest');

  const handleBgChange = () =>{
    setBgImage('rock-water-stream')
  }

  return (
    <>
    <div className={`h-screen bg-${bgImage} bg-cover text-xl flex justify-center items-center`}>
    <div className=" absolute bottom-6 ">
        <SettingsPanel
          title={"Background"}
          items={backgrounds}
          onClick={handleBgChange}
        />
      </div>
      <div>
        <Container/>
      </div>
    </div>
    </>
  )
}

export default App
