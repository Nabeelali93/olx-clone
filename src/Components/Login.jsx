import React from 'react';
import { Form } from 'formik';
import {auth } from '../Config/Firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import logo from '../images/mainlogo.png'
// import google from '../images/Google.png'



function Login(){

//   const google =()=>{


//     // google auth start
//     const provider = new GoogleAuthProvider();

   
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });

// }
// google auth and

//






 
  
return(

  <>


 

{/* <div className="container">
  <div className="row">
    <div className="col" style={{display:"flex" , justifyContent:"center",marginTop:'60px'}}>

    <div className="maincontainer" style={{height:"500px",width:'400px'}}>
<div className="logo" style={{display:"flex",justifyContent:"center"}}>
  <img style={{width:'140px'}} src={logo} alt="" /> <br />
</div>
<br /> 
<h4 style={{textAlign:"center"}} > WELCOME TO OLX</h4>
<br /> <br /> 


<h3 style={{textAlign:"center"}}>
The trusted community of <br /> buyers and sellers.
</h3>


<Form>
    
<div className="btn_groups">
<br /> <br /> <br />
<div className="google-btn" style={{display:'flex',justifyContent:'center'}}> 
      <button onClick={()=>google()} style={{border:"none",cursor:"pointer" ,fontWeight: "bolder",width:"200px",height:"40px"   ,border:"2 px sodil black" ,backgroundColor:"white"}}>Continue With Google</button>
       </div>
       <br />

       <div className="email-btn" style={{display:'flex',justifyContent:'center'}}>
       <button  style={{border:"none",fontWeight: "bolder", cursor:"pointer",  textDecoration:"none",width:"200px",height:"40px",color:"black" ,border:"2 px sodil black " ,backgroundColor:"white"}}><Link to={"/LoginEmail"} style={{textDecoration:"none",color:"black"}}>Continue With Email</Link></button>
       </div>
       <br />

       <div className="FB-btn" style={{display:'flex',justifyContent:'center'}}> 
      <button  style={{border:"none",fontWeight: "bolder", cursor:"pointer", border:"2 px sodil black",width:"200px",height:"40px"   ,  backgroundColor:"white"}} disabled>Continue With Facebook</button>
       </div>
<br />
       <div className="No-btn" style={{display:'flex',justifyContent:'center'}}> 
      <button  style={{border:"none",fontWeight: "bolder", cursor:"pointer", border:"2 px sodil black",width:"200px",height:"40px"   ,  backgroundColor:"white"}} disabled>Continue With Phone</button>
       </div>


       <br />

</div>

     

    </Form>

    </div>



    </div>
  </div>
</div>


 */}




<h1>hello</h1>
 
  </>
)
}

export default Login;


