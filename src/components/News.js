import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        ]
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading:false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=e714e75c7a9143b7be0ccab2391a56b0";
    let data =await fetch(url);
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
  }
  render() {
    
    return (
      <div className='container my-3'>
        <h1>Top-Headlines</h1>
        <div className="row">
            {this.state.articles.map ((element)=>{
                return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
          </div>
            } )}
          
          
          
        </div>
        
      

        
      </div>
    )
  }
}

export default News
