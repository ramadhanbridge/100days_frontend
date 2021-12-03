import {initializeApp} from "firebase/app"

import {
    getFirestore,collection,getDocs
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADLZVbnXCj1dNv-vpzapsUYu11LIwRaDw",
    authDomain: "ramz-d8f68.firebaseapp.com",
    databaseURL: "https://ramz-d8f68.firebaseio.com",
    projectId: "ramz-d8f68",
    storageBucket: "ramz-d8f68.appspot.com",
    messagingSenderId: "630458853307",
    appId: "1:630458853307:web:ce9507da6ae41aa3b6069e"
  }
  // initialize
  initializeApp(firebaseConfig)

  //firestore 

  const db = getFirestore();
  const colbook = collection(db,'books')
getDocs(colbook)
.then(response=>{
    let books = [];
    response.docs.forEach(bookdata=> {
    console.log(bookdata)
        books.push({...bookdata.data(),id:bookdata.id})
    });
}).catch(err=>{
    console.log("the error is", err)
})
