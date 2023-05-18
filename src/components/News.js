import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:18,
    category:'general',
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  
      constructor(){
        super();
        this.state={
        articles:[],
        loading:false,
        page:1
        }
      }
      async componentDidMount(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1876358e2ad84bab854424a40169ccb4&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});

        let data=await fetch(url);
        this.props.setProgress(20);
        let parsedData=await data.json()
        this.props.setProgress(50);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,         loading:false
        })
        this.props.setProgress(100);

      }

      handlePrevClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1876358e2ad84bab854424a40169ccb4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});

        let data=await fetch(url);
        let parsedData=await data.json()
       
        this.setState({
          
         page:this.state.page-1, 
         articles:parsedData.articles,
         loading:false

        })
      }

      handleNextClick= async ()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1876358e2ad84bab854424a40169ccb4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json()
       
        this.setState({
          
         page:this.state.page+1, 
         articles:parsedData.articles,
         loading:false
        })
        }
    }


  
  render() {
    return (
<div>
<h1 className='heading'>Todays Top Highlights</h1>
{this.state.loading &&<Spinner/>}
 <div className='box-container'>
            {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
            return <div  key={element.url}>
              <NewsItems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedA}/>
              </div>
            })}

            <div className='container d-flex justify-content-between'>
            <button  disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button1" className="btn btn-outline" style={{border:'none',transition: '.2s cubic-bezier(0.19, 1, 0.22,1)',opacity: '0.6',
            transform:' translateX(0%)' ,transition: '.2s linear',animation: 'attention 3s linear infinite' }}>&laquo;      BACK</button>

            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/15)}   onClick={this.handleNextClick}  type="button1" className="btn btn-outline" style={{border:'none',transition: '.2s cubic-bezier(0.19, 1, 0.22,1)',opacity: '0.6',
            transform:' translateX(0%)' ,transition: '.2s linear',animation: 'attention 3s linear infinite' }}>NEXT &raquo;      </button>
  
 

            </div>

      
         
        
      </div>
      </div>
    )
  }
}

export default News
