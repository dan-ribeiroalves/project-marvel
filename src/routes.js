import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Info from './pages/Info'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'



export default function Router () {
    return(
        <BrowserRouter>
                <Header/>    
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/info/:id" exact component={Info}/> 
            </Switch> 
            <Footer/>
        </BrowserRouter>
    
    )
}