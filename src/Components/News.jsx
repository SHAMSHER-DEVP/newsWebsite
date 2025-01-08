import {useState,useEffect,useContext} from 'react'
import Newsitems from './Newsitems';
import { Button, Col, Container,Row,  } from 'react-bootstrap';
import Spinner from './Spinner'
import { Cnt } from './context.js';
import UseCustom from './costom.js';
import InfiniteScroll from 'react-infinite-scroll-component';
function News() {
  // let {dt,prvhandleClick,nexthandleClick,fetchData}=useContext(Cnt);
  let {dt,fetchData}=UseCustom();
  console.log('the contextDate is = ',dt);
  

  return (
    <div>
      
    {/* <Spinner/> */}
    {/* {dt.loading?<Spinner/>:<Newsitems/>} */}
    
    <InfiniteScroll
  dataLength={dt.articles.length} //This is important field to render the next data
  next={fetchData}
  hasMore={dt.articles.length!==dt.totalResults}
  loader={<Spinner/>}
  >
<Newsitems/>
</InfiniteScroll>

    {/* <Container>
      <Row className="justify-cotennt-between">
        <Col className="text-center">
        <Button className="   ms-auto " onClick={prvhandleClick} disabled={dt.page<=1?true:false}>Previous</Button>
        
        </Col>
        <Col className="text-center"> 
        <Button className="ms-auto  " onClick={nexthandleClick} disabled={dt.page+1>Math.ceil(dt.totalResults/dt.pageSize)?true:false} >next</Button>
        
        </Col>
      </Row>
    </Container> */}
    </div>
  )
}

export default News;