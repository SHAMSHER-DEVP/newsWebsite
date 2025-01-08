
import {useState,useEffect} from 'react'
import ax from 'axios';

function UseCustom(){
    let [dt,setDt]=useState({
        articles:[],
        totalResults:0,
        loading:true,
        page:1,
        pageSize:10,
        category:"technology"
      });
    
      let getData= async()=>{
        
        try {
          // setDt({...dt,loading:true});
          setDt((prv)=>{
            return{
              ...prv,
              loading:true
            }
          })
          console.log('the getData ,  category is = ',dt.category);
          let rsp=await ax.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0ffbae641b184eddadfb7197e421978c&category=${dt.category}&page=${dt.page}&pageSize=${dt.pageSize}`);
          let data= await rsp.data;
           
           setDt({
             ...dt,
             totalResults:data.totalResults,
            articles:data.articles,
            loading:false,
           }); 

        } catch (error) {
            console.log('the error is = ',error.message);
        }
            
    
        
    }
    
    let nexthandleClick=(e)=>{
      // e.preventDefault();
      
            
      console.log('the dt when is clicked next = ',dt);
      if(dt.page+1>Math.ceil(dt.totalResults/dt.pageSize)){
         alert("all News are fetched , no more left")
      } else{
    
        setDt({...dt,page:dt.page+=1});
    
        // console.log('the dt is = ',dt);
        getData();
      }
    }
    let prvhandleClick=()=>{
        setDt({...dt,page:dt.page-=1});
        getData();
    }
    let handleCategory=(e)=>{
        // e.preventDefault();
        // console.log('the handlecategory  e is = ',e.target.id);
        // console.log('the handlecategory  e is = ',typeof(e.target.id));
        console.log('the handleCategory is = ',e.target.id)
          // console.log('the handleCategory here  = ',e.target.id);
        // setDt({
        //   ...dt,
        //   category:e.target.id
        // })
           // Update the state using a functional update to ensure you're working with the most recent state
    setDt((prevState) => {
      return {
          ...prevState,
          category: e.target.id
      };  
  });
          console.log('the dt is = ',dt);
            getData(); 
        
      };
    useEffect(()=>{
    getData();  
    },[dt.page, dt.category, dt.pageSize]);  
    // },[]);
   
     return {dt,nexthandleClick,prvhandleClick,handleCategory};

}

export default UseCustom;  