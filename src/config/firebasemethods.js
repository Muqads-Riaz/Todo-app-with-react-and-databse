import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase,push ,ref, set,onValue  } from "firebase/database";

const db = getDatabase();
const auth = getAuth();
const signUpUser = (obj)=>{
    let {email,password,userName,contact} = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password,userName,contact)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
      set(ref(db, `users/${user.uid}`), {
        email : email,
        password : password,
        userName : userName,
        cotact : contact,
        uid : user.uid,
      })
        .then(()=>{
         resolve("user created successfully and send to database")
        })
        .catch((error)=>{
         reject(error)
        })
    })
    .catch((error) => {
      reject(error)
      // ..
    });
  })
}
const loginUser=(obj)=>{
    let {email,password,userName,contact} = obj;
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password,userName,contact)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          const starCountRef = ref(db, `users/${user.uid}`);
            onValue(starCountRef, (snapshot) => {
            const data = snapshot.exists();
            if(data){
                resolve( snapshot.val())
            }else{
                reject(
                    "Data Not Found"
                )
            }
             });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          reject(errorMessage)
        }); 
    })
 

}

let sendTodos = (obj,uid)=>{
  const postListRef = ref(db, `todos/${uid}`);
const newPostRef = push(postListRef);
set(newPostRef, obj);
}

export{signUpUser,loginUser,sendTodos}
