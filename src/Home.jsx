import {Link} from 'react-router-dom'
import ('./Home.css')





function Home(){
   
    return(
      <div className='Home'>
         
         <Link to="/character/"><button className='welcome-button'>Rick and Morty</button></Link>
         
         <style>
         @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
         </style>
         
         <h1 className='saying1'>What up my glip-glops!</h1>
         
         <h2 className='saying2'>Rick you can't say that !</h2>


         <h2 className='saying3'>There's people watching us !</h2>
      </div>
      


      
      
    
   
   ) 
}

export default Home