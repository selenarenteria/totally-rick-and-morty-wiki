import {Link} from 'react-router-dom'
import ('./Home.css')





function Home(){
    return(
      <div className='Home'>
         <Link to="/character/"><button className='welcome-button'>Rick and Morty</button></Link>
         <h1 className='saying1'>What up my glip-glops!</h1>
         <h2 className='saying2'>Riiiick you can't say that !</h2>
         <h3 className='saying3'>There's people watching us!</h3>
      </div>
      


      
      
    
   
   ) 
}

export default Home