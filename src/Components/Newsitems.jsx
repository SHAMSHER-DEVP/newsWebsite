
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row , Card, CardLink} from 'react-bootstrap'
import { Cnt } from './context';
  
function Newsitems() {
  let {dt}=useContext(Cnt);
  let {articles} = dt;
    // let date=new Date();
    
  
  return (
    <>
     <Container>
        <Row className=" ">

             {
                articles.filter((el)=>{return el.url!="https://removed.com" || el.description!='[Removed]' }).map((el,ind)=>{
                    return(
                        <Col key={ind} sm={10} md={5} lg={4} xl={3} className="my-4">
            <Card style={{ width: '18rem ' }} className="position-relative">
      <Card.Img variant="top" src={el.urlToImage?el.urlToImage:'https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}   height={180} />
        <p className="position-absolute bg-danger text-light rounded rounded-sm p-1">{el.source.name}</p>
      <Card.Body>
        <Card.Title> {el.title.slice(0,20)} </Card.Title>
        <Card.Text>
          {el.description!=null?el.description.slice(0,70):""}
        </Card.Text>
        <p className='text-muted'> By {el.author?el.author:"unknown"} at {new Date(el.publishedAt).toDateString()} </p>
        <CardLink href={el.url} variant="primary" >Go to detail </CardLink>
      </Card.Body>
    </Card>
            </Col>
                    )
                })
             }


        </Row>
     </Container>
     
    </>
  )
}

export default Newsitems