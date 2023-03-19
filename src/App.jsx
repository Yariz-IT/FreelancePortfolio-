import './styles/main.css'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contacts from './components/pages/Contacts'
import Draft from './components/pages/Draft'
import ScrollToTop from './components/utils/scrollToTop'




function App() {

    return (
        <div className="App">


                <Router>
                <ScrollToTop/>
                <Navbar />

                <Routes>

                    <Route path="/" element={<Home />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="draft/:id" element={<Draft />}></Route>
                    <Route path="contacts" element={<Contacts />}> </Route>
                   
                    </Routes>

                <Footer />

                </Router>

        </div>


    )
}

export default App

