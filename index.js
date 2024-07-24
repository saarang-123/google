const Signup = async (e)=>{
   e.preventDefault()
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
    console.log(email, password);

try {
   const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
   await  result.user.updateProfile({
      displayName: "User"
    })
    await result.user.sendEmailVerification()
   console.log(result);
   alert(`wellcom ${result.user.email}`)
} catch (error) {
   console.log(error);
   alert(error.message)
}

}


const Login = async (e)=>{
   e.preventDefault()
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   // console.log(email, password);

try {
   const result = await firebase.auth().signInWithEmailAndPassword(email, password)
   console.log(result);
   alert(`user is successfully login ${result.user.email}`)
} catch (error) {
   console.log(error);
   alert(error.message)
}

}


const Logout =()=>{
   firebase.auth().signOut()
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
   console.log(user);
        
      } else {
      console.log(`user successfully signout`);
      alert(`user successfully signout`)
      }
    });
}