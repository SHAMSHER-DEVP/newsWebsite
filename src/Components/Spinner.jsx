import React from 'react'
import { Container,Row, } from 'react-bootstrap'
import spn from '/spinner.gif'
function Spinner() {
  return (
    <>
      <Container>
        <Row >
             <div className="text-center">
             <img className='img-fluid' src={spn} alt="loading"   /> 
             </div>
        </Row>
      </Container>
    </>
  )
}

export default Spinner