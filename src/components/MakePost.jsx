import React from 'react';
import '../styles/MakePost.css';

function MakePost({savePostTitle, saveContent, savePost}) {
    return (
        <div className='create__post'>
            <form onSubmit={savePost}
               className='createpost__form'>
               <h1>Blog Post</h1>
               <input 
               type="text"
               onChange={savePostTitle} 
               placeholder="Post Title" 
               required
                />
            <br />
            <br />
               <textarea 
               type="text"
               onChange={saveContent}
               placeholder="Once upon a time..." 
               required></textarea>
            <br />
            <br />
               <button>Publish</button>
           </form>
        </div>
    )
};

export default MakePost;

