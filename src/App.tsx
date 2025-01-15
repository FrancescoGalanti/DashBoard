import Footer from "./components/layout/Footer"
import Header from "./components/layout/header/Header"
import MainContent from "./components/layout/MainContent"


function App() {


  return (
    <div className="min-h-dvh flex flex-col bg-primary">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
