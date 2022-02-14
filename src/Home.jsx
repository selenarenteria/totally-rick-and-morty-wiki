import {Link} from 'react-router-dom'
import ('./Home.css')





function Home(){
    return(
      <main>
       <h1>What up my glip glops!</h1>
      
      <h2>Let's get schwifty!</h2>
      <Link to="/character/"><button>Click me!</button></Link>
      </main>
     
   
   ) 
}

export default Home