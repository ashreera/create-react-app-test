import React, { Component } from 'react';

class  PublishedPost extends Component {
          
    render() {  
        const {articles} = this.props;

     return (
        <div className="rightsection">  
 <ul  className="data-list">  
    <li key={articles.id} className={"block-" + articles.id}>
      <div>{articles.title}</div>
      <div>{articles.desc}</div>
    </li>

    </ul>  
   )
           
   </div>
     )
  }

}
export default PublishedPost;

