import React, { useContext, useState } from 'react'
import MyNv from './Components/MyNv'
import News from './Components/News.jsx';
import {BrowserRouter as Br , Route,Routes} from 'react-router-dom'
import {  Pd } from './Components/context.js';
import UseCustom from './Components/costom.js';
function App() {
     let ob=UseCustom();
      
        let pack={
          dt:ob.dt,
          nexthandleClick:ob.nexthandleClick,
          prvhandleClick:ob.prvhandleClick,

        };
    
  return (
    <Pd value={pack}>
    <Br>
      <MyNv/>
      <Routes>
      <Route exact  path={`/`} element ={<News key='general'/>}/>
        {
          ['general','technology','entertainment'].map((el)=>{
                    return(
                      <Route key={el} exact path={`/${el}`} element ={<News key={el} category={el} />}/>
                    )
          })
        }
        {/* <Route exact path='/entertainment' element={<News/>} /> */}
      </Routes>

    </Br>
    </Pd>
        
  )
}

export default App;