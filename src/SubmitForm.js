import React, { useEffect, useState } from 'react';

export default function SubmitForm() {
    const [comment, setComment] = useState("")

    const [comments, setComments] = useState([])


    

useEffect(()=>{
    fetch('http://localhost:3000/comments')
    .then(r=>r.json())
    .then(data=>setComments(data))
},[])


   
    
    function addComment(){
        fetch(' http://localhost:3000/comments', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(comment)
  })
  .then(r=>r.json())
  .then(setComments ([...comments, comment]))
}


    

    const onChangeHandle = (e) => {
        setComment(e.target.value)
    }



    return (
        <div className="main-section">
            <div className='main-container'>
                {comments.map((text) => (
                    <div className='comment-submitted'>
                    <h6>{text.name}</h6>
                    <div className='submitted-comment'> {text.comment}</div>
                    </div>
                ))}
                <div className='comment-flexbox'>
                <h3 className='comment-text'>Comment</h3>
                <textarea className='text-box' onChange={onChangeHandle} value={comment} />
                <button onClick={addComment} className='submit-button'>Submit</button>
            </div>
            </div>
        </div>
    )
}