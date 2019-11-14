import React, { Component } from 'react'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'
import Spinner from '../layout/spinner';
import MoviesContainer from './MoviesContainer'

export class landing extends Component {
    render() {
      const {loading}=this.props
        return (
            <div style={{width:'100%',justifyContent:'center',
            alignItems:'center',display:'flex',flexDirection:'column'}}>
                <SearchForm/>
{loading ? <Spinner/> :<MoviesContainer/>}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    loading:state.movies.loading
})
export default connect(mapStateToProps)(landing)
