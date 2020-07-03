import React, { Component } from 'react';
import PropTypes from 'prop-types';  

function validate (title,desc){
    return {
      title :title.length === 0,
      desc: desc.length === 0
    }
  }
  

class NewPost extends Component {
    
static propTypes = {  
    addArticle :PropTypes.func.isRequired
    }
constructor(props) {  
    super(props);  
    this.state = {  
        id: 0,  
        title: "",  
        desc: ""  ,
        touched : {
          title: false,  
          desc: false  ,
         
        }
      };
}
canBeSubmitted() {
    const errors = validate(this.state.title, this.state.desc);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

submitData = () => { 
  console.log("keyword")

  if (this.canBeSubmitted()) {

    const newArticle = {  
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
      title: this.state.title,  
      desc: this.state.desc,  
    };  

    this.props.addArticle(newArticle);  

    this.clearData();  
}  
}

clearData = () => {  
  this.setState({  
    id: 0,  
    title: "",  
    desc: ""  
  });  
}  


handleTitleChange = (e) => {  
    this.setState({  
      title: e.target.value  
    });  
  }  
  
  handleDecChange = (e) => {  
    this.setState({  
      desc: e.target.value  
    });  
  }  
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };


render() {  

    const errors = validate(this.state.title, this.state.desc);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

     return (
          
           <div className="leftsection">  
            Article Title : <input className={shouldMarkError("title") ? "error" : ""}
                onChange={this.handleTitleChange} onBlur={this.handleBlur("title")} value={this.state.title} type="text" placeholder="Article Title " /> <br />  
            Article Desc :  <textarea className={shouldMarkError("desc") ? "error" : ""}
                onChange={this.handleDecChange} value={this.state.desc}  onBlur={this.handleBlur("desc")}  placeholder="Article Description"  rows ="10" cols="50"/><br />  
           <button onClick={this.submitData} disabled={isDisabled} className="button"><span>PUBLISH</span></button>
            <button onClick={this.clearData} className="button"><span>CLEAR</span></button>  
          </div>  
     )
  }

}

export default NewPost;
