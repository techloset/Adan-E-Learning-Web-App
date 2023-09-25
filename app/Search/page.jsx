import Card from './components/Card'
import Education from '../CheckOut/components/Education';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cards from './components/Cards';
import Cardss from './components/Cardss';
import Dashboard from './components/Dashboard';
import Learning from './components/Learning';
import Creators from './components/Creators';
import Student from './components/Student';




const Searchpage = () => {

    return (
        <div>
            <Header />
            <Dashboard />
            <Cards />
            <Cardss />
            <Learning />
            <Card />
            <Creators/>
            <Student/> 
            <Education />
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default Searchpage