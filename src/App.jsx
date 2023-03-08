import reactLogo from './assets/react.svg'
import FooterPart from './component/footer'
// import './App.css'
import HeaderPart from './component/header'
import IntroductionPart from './component/introduction'
import PortfolioPart from './component/portfolio'
import QualificationsPart from './component/qualifications'

function App() {
  

  return (
    <div>
      <HeaderPart />
      <IntroductionPart />
      <QualificationsPart />
      <PortfolioPart />
      <FooterPart />
    </div>
  )
}

export default App
