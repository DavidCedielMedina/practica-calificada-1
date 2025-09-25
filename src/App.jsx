import Header from "./componentes/Header.jsx";
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx";

function App() {
  return (
    <div className="flex flex-col p-4 h-full w-full">
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-3 px-2 py-5 gap-2 justify-center items-center w-full">
        <Main
          name="Bill Mahoney"
          job="PRODUCT OWNER"
          src="/images/photo1.png"
        />
        <Main name="Saba Cabrera" job="ART DIRECTOR" src="/images/photo2.png" />
        <Main name="Shae Le" job="TEACH LEAD" src="/images/photo3.png" />
        <Main name="Skylah Lu" job="UX DESIGNER" src="/images/photo4.png" />
        <Main name="Griff Richards" job="DEVERLOPER" src="/images/photo5.png" />
        <Main name="Stan John" job="DEVERLOPER" src="/images/photo6.png" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
