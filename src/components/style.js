import styled from 'styled-components'

export const Navbar=styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:100px;
background-color:${props=>props.backGColor||'green'};
`
export const Container=styled.div`
display: flex;
align-items: center;
width:85%;
height:100px;
margin: 20px;
padding: 20px;
background-color:${props=>props.backGColor||'green'};
`
export const Linkmovie=styled.div`
width:80%;
height:80px;
align-items:left;
color: white;
margin :10px;
padding:20px;
font-weight:lighter;
font-size:20px;
`
export const Multi=styled.div`
display: flex;
align-items: center;
justify-content: center;
width:20%;
height: 80px;
color:white;
flex-wrap:wrap;
`

export const Img=styled.div`
display: flex;
align-items: center;
justify-content: center;
color:aqua;
`
export const Imp=styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:white;
width:80px;
height:100%;
padding:30px;
border-radius:10px;
margin-right:20px;
`
export const Anchor=styled.div`

`

export const Searchform=styled.div`
display: flex;
align-items: center;
justify-content:center;
width:70%;
height:300px;
margin-top:50px;
margin-left:0px;
padding-top: 0px;
background-color:${props=>props.backGColor||'green'};
flex-wrap:wrap;
flex-direction:column;
`

export const Contain=styled.div`
display: flex;
justify-content:space-evenly;
width:70%;
height:100px;
margin-top:20px;
background-color:${props=>props.backGColor||'green'};


`
export const Form=styled.form`
width:95%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;

`
export const Searchmark=styled.div`

`
export const Textform=styled.div`

`

export const Input=styled.input`
width:100%;
border-radius:5px;
margin-bottom:15px;
padding:3px;
`
export const Button=styled.button`
width:70px;
height:40px;
border-radius:5px;
background-color:#007BFF;
color:white;

`
export const MovieCardShape =styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
background-color:${props=>props.backGColor||'green'};
flex-direction:column;
margin:10px;
flex-wrap:wrap;
padding:10px;
border-radius:30px;
`
