import React from 'react'
import {Container,Multi,Img,Imp,Navbar,Linkmovie,Anchor} from '../style.js'
import  { Colors } from '../consts'
function Navbartop() {
    return (
        
        
        <Navbar backGColor={Colors.blackColor}>
        <Container backGColor={Colors.blackColor}>
               <Linkmovie>
           <Anchor to="http://www.omdbapi.com/">MoviesSeriesinfo</Anchor>
       </Linkmovie>
       <Multi>
<Imp>
<p style={{color:'black',fontWeight: 'bold',fontSize:'25px',margin:'10px'}}>IMDB</p>
</Imp>
<Img>
<i class="fab fa-react" style={{fontSize:'80px'}}></i>
</Img>
       </Multi>
       </Container>
       </Navbar>

        

    )
}

export default Navbartop
