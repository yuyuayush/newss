import React, { useEffect, useState } from 'react';
import NewItems from './NewItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'
const News = (props) => { 
    const  {country,category,pageSize ,setProgress }=props;
    const [articles, setArticles] = useState([])
    const [loading,setLoading]=useState(false);
    const [totalResults,setTotalResults] = useState(0);
    const [page,setPage]=useState(1)

    const updateNews =  async()=>{
        setProgress(20)
        setLoading(true);
        const res= await  fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5d3c4bccfb38487f8d30abd5935a3204&page=${page}&pageSize=${pageSize}`)
        setProgress(50)
        const data =await res.json();
        setTotalResults(data.totalResults)
        setProgress(70)
        setArticles(data.articles)
        // alert(totalResults);
        setLoading(false)
        setProgress(100);
    }
    useEffect(()=>{
        document.title =`news-${category}`
        updateNews()
       
    },[])
    const fetchMoreData = async()=>{
        const res= await  fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5d3c4bccfb38487f8d30abd5935a3204&page=${page}&pageSize=${pageSize}`)
        setPage(page + 1)
        const data =await res.json();
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
    }
  return( <div>
      <h1 className='h1 display-4 text-center mt-5'>TOP-NEWS-HEADLINE</h1>
      {/* <div>
      <div className=" scroll:hidden container-fluid">   
                            {loading && <Spinner/>} */}
                         <InfiniteScroll dataLength={articles.length} 
                         next={fetchMoreData}
                         hasMore ={
                             articles.length !== totalResults
                         }
                         loader={
                             <Spinner/>
                         }
                         >
                             <div  className="container">
                                 
                         <div className="row">
                             {articles.map((element) => {
                                 return <div className="col-md-4" key={element.url}>
                                     <NewItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                 </div>
                             })}
                         </div>
                         </div>
                         </InfiniteScroll>
                         {/* </div> 
    
      </div> */}
  </div>);
};
// News.defaultProps={
//     country:"in",
//     pageSize:8,
//     category:'general'
//   }
//   News.propTypes={
//       country:propTypes.string,
//       pageSize: PropTypes.number,
//       category: PropTypes.string,
//   }
export default News;
