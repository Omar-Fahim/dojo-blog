import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {


    

  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario');

 
  const[isPending,setIsPending]= useState(true);

  useEffect(() => {
  setTimeout(()=>{
   fetch("http://localhost:8000/blogs").then(res=>
   {
    return res.json();
   }).then(data=>{
    setBlogs(data);
    setIsPending(false);
   })},1000);
  },[]) ;
  
  return (
    <div className="home">
      {isPending && <div> Loading.. </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;