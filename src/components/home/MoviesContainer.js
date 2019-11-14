import React, { Component } from 'react'
import {connect} from 'react-redux' 
import MovieCard from './MovieCard'
export class MoviesContainer extends Component {
    render() {
        const {movies}=this.props;
        let content=''
         content= movies.Response=='True'? movies.Search.map((movie,index) =>
         <MovieCard key={index}
        movie={movie}/>):null
        return (
            <div style={{display:'flex',justifyContent:'space-evenly',
            alignItems:'center',
            flexWrap:'wrap',flexDirection:'row',
            width:'70%',padding:'10px',backgroundColor:'white', height:'1000px'}}>
             
     {content}
  
            </div>

        )
    }
}
const mapStateToProps=state=>({
movies:state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer)
