import React from "react";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, addDoc, getDocs, doc, onSnapshot, query
} from "firebase/firestore";
import "./index.css"



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBPLYLyta6fH5jBJdHHcpIs9kj6sidcrF0",
    authDomain: "helloworldfirebase-250bb.firebaseapp.com",
    projectId: "helloworldfirebase-250bb",
    storageBucket: "helloworldfirebase-250bb.appspot.com",
    messagingSenderId: "152631552290",
    appId: "1:152631552290:web:ea15ec2981f8b684865d7b",
    // measurementId: "G-TRZE7DJG6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Dombo = () => {
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {


            const querySnapshot = await getDocs(collection(db, "posts"));

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => `, doc?.data());
                // setPosts([...posts, doc.data]) 

                setPosts((prev) => {
                    let newArray = [...prev, doc.data()];
                    return newArray;
                });
                console.log("POST", posts);

            });
        }
        // getData();
let unsubscribe = null;
        const getRealTimeData = async () =>{
            const q = query(collection(db, "posts"));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
              const posts = [];
              querySnapshot.forEach((doc) => {
                  posts.push(doc.data());
              });
              setPosts(posts);
              console.log("Posts", posts);
            });   
   
        };
        getRealTimeData();

        return () =>{
            unsubscribe();
            console.log("cleanUp Function");
        }
    }, [])
    // {console.log(posts)}

    const savePost = async (e) => {
        e.preventDefault();



        console.log('postText', postText);

        try {
            const docRef =
                await addDoc(collection(db, "posts"), {
                    text: postText,
                    createdOn: new Date().getTime(),
                });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (
        <div >
            <h1>Parag. Post</h1>
            <div className="Container">
                <div className="inBut">
                    <form onSubmit={savePost}>
                        <textarea type="text"
                            placeholder=
                            "What is in your mind ..."
                            onChange={(e) => {
                                setPostText(e.target.value)
                            }}

                        />
                        <br />
                        <div className="butt">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
                <div className="allPosts">

                    {posts.map((eachpost, i) => (
                        <div className="MainPost"><div key={i} className="post">
                            <h3>{eachpost.text}</h3>
                            <p>{eachpost.createdOn}</p>
                            <div className="dit">
                                <button>Delete</button>
                                <button>Edit</button>
                            </div>
                        </div></div>
                    ))}


                </div>

            </div>
        </div>
    )
}
export default Dombo;