import Navbar from "./components/Navbar";
import Wheather from "./components/Wheather";

function App() {
  let API_KEY = "c412e32f8374f6a87ce341d095a159f6";
  // let API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";
  // let API_KEY = "f56f24967aaf51182d1d4df628297c6d";

  return (
    <>
      <Navbar />
      <Wheather apiKey={API_KEY} />
    </>
  );
}

export default App;
