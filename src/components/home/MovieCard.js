import React, { Component } from 'react'
import {Colors} from '../consts'
import {MovieCardShape} from '../style'
import {Link} from 'react-router-dom'
export class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
<MovieCardShape width='300px' height='600px' borderRadius='15px' backGColor={Colors.blackColor} >
<img src={movie.Poster} style={{ width: '90%', height: '60%' ,borderRadius:'20px'}} />
<h5 style={{ color: Colors.whiteColor, textAlign: 'center', width: '90%' }}>{movie.Title}-{movie.Year}</h5>
<Link to={'/movie/'+ movie.Imdb}>
<button style={{
             borderRadius: '8px'
            , backgroundColor: Colors.blueColor, cursor: 'pointer',
            borderColor: 'transparent', color: Colors.whiteColor,
            width:'120px'
          }}
          >
      Movie Details
           <i class="fas fa-angle-right" style={{ marginLeft: '5px' }}></i>
          </button>
          </Link>  
      </MovieCardShape>
    
        )
    }

}

export default MovieCard
{/* <img src={movie.Poster} style={{ width: '100%', height: '70%' }} />
        <h5 style={{ color: Colors.whiteColor, textAlign: 'center', width: '90%' }}>{movie.Title}-{movie.Year}</h5>
        <div style={{
          width: '100%', justifyContent: 'space-evenly'
          , alignItems: 'center', flexDirection: 'row', display: 'flex'
        }}>
          <button style={{
             borderRadius: '15px'
            , backgroundColor: Colors.blueColor, cursor: 'pointer',
            borderColor: 'transparent', color: Colors.whiteColor
          }}
          >
           Load More
          </button>
          <Link to={'/movie/'+movie.imdbID} >
            <button style={{
               borderRadius: '15px'
              , backgroundColor: Colors.blueColor, cursor: 'pointer',
              borderColor: 'transparent', color: Colors.whiteColor
            }}>
              Movie Details
        <i class="fas fa-angle-right" style={{ marginLeft: '5px' }}></i>
            </button>
          </Link>
        </div> */}