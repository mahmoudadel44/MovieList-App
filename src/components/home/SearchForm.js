import React, { Component } from 'react'
import {  Searchform,Form, Textform, Searchmark, Contain, Input, Button } from '../style.js'
import { Colors } from '../consts.js';
import {searchMovie,fetchMovies,setLoading} from '../../actions/searchActions'
import {connect} from 'react-redux'

class SearchForm extends Component  {
   onChange=e=>{
       this.props.searchMovie(e.target.value)
        
   }
   onSubmit=e=>{
e.preventDefault()
this.props.fetchMovies(this.props.text) 
this.props.setLoading() 
}
    render(){
    return (
        <Searchform  backGColor={Colors.whiteGray}>
          
                <Contain backGColor={Colors.whiteGray}>
                    <Searchmark>
                        <i class="fas fa-search" style={{ fontWeight: 'bold', fontSize: '50px' }}></i>
                    </Searchmark>
                    <Textform style={{ fontWeight: 'lighter', fontSize: '45px' }}>
                        Search for a movie , Tv series ...
            </Textform>
                </Contain>
            <Form onSubmit={this.onSubmit}>
                    <Input type="text" placeholder="Search Movies,Tv Series..."  
                   onChange={this.onChange} >
                    </Input>
                    <Button >Search</Button>
                    </Form>

        </Searchform>
    )
}
}
const mapStateToProps=state=>({
text:state.movies.text
})
export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchForm)
