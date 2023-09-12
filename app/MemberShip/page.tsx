import Footer from '@/components/Footer'
import Header from '@/components/Header'


import Dashboard from './components/Dashboard'
import StartNow from '../Course/components/StartNow'
import Coach from './components/Coach/Coach'
import Students from './components/Students'
import App from './components/App'
import Become from './components/Become'

const MemberShippage = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <StartNow />
      <Coach />
      <Students />
      <App />
      <Become/>
      <Footer />
    </>
  )
}

export default MemberShippage