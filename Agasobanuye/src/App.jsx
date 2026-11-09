import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HEADER */}
     <Header />

      {/* MAIN CONTAINER */}
     <Main />

      {/* FOOTER */}
     <Footer />

    </div>
  );
}

export default App;