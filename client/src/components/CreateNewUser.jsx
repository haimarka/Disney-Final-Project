import React,{useState} from 'react';
import axios from 'axios';


export default function CreateNewUser({ usersData, auth, setUsersData}) {
    const [showForm, setShowForm] = useState(false)
    
      // const postNewUser = ()=>{
      //   let temp = [...usersData];
      //   const newUser = { email:auth.email, watchList:[], cart:[], active:auth?true:false};
      //   temp.push(newUser)
      //   axios
      //   .post('http://localhost:8082/users',newUser)
      //   .then(res=>{
      //     console.log(res);
      //     setUsersData(temp)
      //   })
      //   .catch(err=>console.log(err.response))
      // }
      // let elements = usersData.map((user,i)=>{
      //     return (
      //         <div key={i}>
      //             <h3>{user.email}</h3>
      //             <p>{user.watchList}</p>
      //             {auth?<p>{user.active}</p>:<p>{!user.active}</p>}
      //             <p>{user.cart}</p>
      //         </div>
      //       )
      // })
  return (
  <div>
      {/* <h2>users page</h2>
      {showForm&&auth?<form onSubmit={(e)=>{
            e.preventDefault();
            console.log(auth.email);
            postNewUser();}}>
            <input disabled={true} defaultValue={auth.email} /><br />
            <input type="submit" value="upload" /><br /><br />
            <button onClick={()=>setShowForm(false)}>hide form</button>
        </form>:<button onClick={()=>setShowForm(true)}>add user</button>}
      {elements} */}
      
  </div>
  );
}
