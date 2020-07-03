import React, { Component } from 'react';
import PropTypes from 'prop-types';  

class SearchInput extends Component {
    
static propTypes = {  
    searchArticle :PropTypes.func.isRequired
    }
constructor(props) {  
    super(props);  
    this.state = { 
 search:""
    }
}

searchTitle=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
    this.searchArticle({keyword})
  }
  render() {  

     return (
        <header className="App-header">  
        <input type="text" placeholder="Enter item to be searched"  onChange={(e)=>this.searchTitle(e)} />
        </header>  
     )
  }

}

export default SearchInput;
