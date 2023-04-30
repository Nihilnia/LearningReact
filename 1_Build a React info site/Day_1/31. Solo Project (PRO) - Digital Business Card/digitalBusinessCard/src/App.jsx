import Header from "./BusinessCard/Header";
import Main from "./BusinessCard/Body";
import Footer from "./BusinessCard/Footer";

function App() {
  return (
    <div className="businessCard">
      <div className="businessCardBody">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
