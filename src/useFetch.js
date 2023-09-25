import {useEffect,useState} from 'react';



const useFecth=(url)=>{


    
  const [data, setData] = useState(null)


  const [error,setError] = useState(null);
 
  const[isPending,setIsPending]= useState(true);


    useEffect(() => {
        setTimeout(()=>{
         fetch(url).then(res=>
         {
          if(!res.ok){
            throw Error("could not fetch the data from the server");
          }
          return res.json();
         }).then(data=>{
          setData(data);
          setIsPending(false);
          setError(null);
         }).catch(err =>{
          setError(err.message);
          setIsPending(false);
         })
        
        
        
        },1000);
        },[url]) ;

        return {data,isPending,error};
}

export default  useFecth;
