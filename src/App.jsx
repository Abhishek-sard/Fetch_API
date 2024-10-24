import { useEffect } from "react"
const API = "https://jsonplaceholder.typicode.com/users";
const App =() =>{
  useEffect(()=>{

    const fetchUsers = async(url)=>{
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      }catch(e){
        console.log(e)
      }
    }
    fetchUsers(API);
  }, [])
  return (
    <h1>React Table</h1>
  )
}
export default App