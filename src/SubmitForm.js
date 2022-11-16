import React, { useEffect, useState } from 'react';

export default function SubmitForm() {
    const [comment, setComment] = useState("")

    const [comments, setComments] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/comments')
    .then(r=>r.json())
    .then(data=>setComments(data))
},[])


    const onClickHandler = () => {
        setComments((comments) => [...comments, comment])
    
    
    }
    

    

    const onChangeHandle = (e) => {
        setComment(e.target.value)
    }



    return (
        <div className="main-section">
            <div className='main-container'>
                {comments.map((text) => (
                    <div className='submitted-comment'> {text}</div>
                ))}
                <div className='comment-flexbox'>
                <h3 className='comment-text'>Comment</h3>
                <textarea className='text-box' onChange={onChangeHandle} value={comment} />
                <button onClick={onClickHandler} className='submit-button'>Submit</button>
            </div>
            </div>
        </div>
    )
}