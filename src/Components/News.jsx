import {useState,useEffect,useContext} from 'react'
import Newsitems from './Newsitems';
import { Button, Col, Container,Row,  } from 'react-bootstrap';
import Spinner from './Spinner'
import { Cnt } from './context.js';
import UseCustom from './costom.js';
function News() {
  let {dt,prvhandleClick,nexthandleClick}=useContext(Cnt);
  // let {dt,prvhandleClick,nexthandleClick}=UseCustom();
  console.log('the contextDate is = ',dt);
  

  return (
    <div>
    {/* <Spinner/> */}
    {dt.loading?<Spinner/>:<Newsitems/>}
    
    <Container>
      <Row className="justify-cotennt-between">
        <Col className="text-center">
        <Button className="   ms-auto " onClick={prvhandleClick} disabled={dt.page<=1?true:false}>Previous</Button>
        
        </Col>
        <Col className="text-center"> 
        <Button className="ms-auto  " onClick={nexthandleClick} disabled={dt.page+1>Math.ceil(dt.totalResults/dt.pageSize)?true:false} >next</Button>
        
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default News;