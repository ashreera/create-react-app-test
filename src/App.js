import React, { Component } from "react";  
import "./App.css";  
import PropTypes from 'prop-types';  
import { getActricle, addArticle ,searchArticle} from './actions/articleAction';  
import { connect } from 'react-redux';  

function validate (title,desc){
  return {
    title :title.length === 0,
    desc: desc.length === 0
  }
}
  
class App extends Component {  
  constructor(props) {  
    super(props); 
    this.listRef = React.createRef()   // Create a ref object 
    this.state = {  
      id: 0,  
      title: "",  
      desc: ""  ,
      search :"",
      touched : {
        title: false,  
        desc: false  ,
       
      }
    };  
  }  

  static propTypes = {  
    articles: PropTypes.array.isRequired,  
    getActricle: PropTypes.func.isRequired,  
    addActricle: PropTypes.func.isRequired ,
    searchArticle :PropTypes.func.isRequired
   };  
  
  componentDidMount() {  
    this.props.getActricle(); 
   // this.scrollToBottom();
 
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
      this.listRef.current.scrollIntoView(false);

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

  searchTitle=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
    this.props.searchArticle({keyword})
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
    const applyFilter = searchTerm => article =>
         article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.desc.toLowerCase().includes(searchTerm.toLowerCase());

    const errors = validate(this.state.title, this.state.desc);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

     return (  
      <div className="App">  
        <header className="App-header">  
               <input type="search" placeholder="Enter item to be searched"  onChange={(e)=>this.searchTitle(e)} />
        </header>  
        <article className="App-intro container">  
          
          <div className="article-hearder">
            <h3 className="newpost">New Post</h3>
            <h3 className="newpost">Published Post</h3>
          </div>
          
           <div className="leftsection">  
            Article Title : <input className={shouldMarkError("title") ? "error" : ""}
                onChange={this.handleTitleChange} onBlur={this.handleBlur("title")} value={this.state.title} type="text" placeholder="Article Title " /> <br />  
            Article Desc :  <textarea className={shouldMarkError("desc") ? "error" : ""}
                onChange={this.handleDecChange} value={this.state.desc}  onBlur={this.handleBlur("desc")}  placeholder="Article Description"  rows ="10" cols="50"/><br />  
           <button onClick={this.submitData} disabled={isDisabled} className="button"><span>PUBLISH</span></button>
            <button onClick={this.clearData} className="button"><span>CLEAR</span></button>  
          </div>  
          <div className="rightsection" >  
                {this.props.articles.filter(applyFilter(this.state.search)) && this.props.articles.filter(applyFilter(this.state.search)).map((data, index) => {  
                  return <ul  className="data-list" ref={this.listRef}
                  >  
            <li key={data.id} className={"block-" + data.id}>
              <div>{data.title}</div>
              <div>{data.desc}</div>
            </li>
        
            </ul> 
            
                })}  
                   
          </div> 

          
        </article>  
      </div>  
    );  
  }  
}  
  
const mapStateToProps = state => ({  
  articles: state.articles  
});  
  
export default connect(mapStateToProps, { getActricle, addArticle ,searchArticle})(App); 
