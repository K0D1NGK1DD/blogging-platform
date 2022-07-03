import React, {useState} from 'react';
import MakePost from './MakePost';
import Post from './Post';
import '../styles/AllPost.css';

function AllPost() {
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[allPost, setAllPost] = useState("");
    const[isCreated, setIsCreated] = useState("");

        // function save post title
        const savePostTitle = event =>{
            setTitle(event.target.value) 
                console.log(title)
        }

        // save content function
        const saveContent = event =>{
            setContent(event.target.value) 
                console.log(content)
        }
        // save all posts function
        const savePost = event =>{
            event.preventDefault() //this will stop our browser from refreshing
            const id =Date.now()
            setAllPost([...allPost,{title,content, id}])
            setTitle('')
            setContent('')
            toggleButton()
            //console.log(allPost)
        }

        // toogle button
        const toggleButton = () =>{
        setIsCreated(!isCreated)
}

    if(!isCreated) {
        return(
            <>
            <MakePost 
            savePostTitle={savePostTitle}
            saveContent={saveContent}
            savePost={savePost}
            
            />
            </>
        )
    }
   return(
       <>
       <h1>All Post</h1>
       <div className='content'>
       {allPost.map(post =>{
           return(
               <Post 
               id={post.id}
               key={post.id}
               title={post.title}
               content={post.content}
               />
           )
       })}
       </div> 
       <button onClick={toggleButton}>Create Post</button>
       </>
   )
   

};


export default AllPost;