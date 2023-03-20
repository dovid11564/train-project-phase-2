import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function SubmitForm({ line }) {


    let match = useRouteMatch()
    console.log(match)

    const [comment, setComment] = useState("")
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [deletee, setDelete] = useState(true)

    const [comments, setComments] = useState([])

    function handleDelete() {
        setDelete(!deletee)
    }


    useEffect(() => {
        fetch(`http://localhost:3000/comments?line=${line}`)
            .then(r => r.json())
            .then(data => setComments(data))
    }, [line])




    function addComment(e) {
        e.preventDefault();
        const newObject = {
            line: line,
            name: name || 'Anonymous',
            comment: comment,
            image: image,
        }
        fetch(' http://localhost:3000/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObject)
        })
            .then(r => r.json())
            .then(setComments([...comments, newObject]))
    }


    const onChangeHandle = (e) => {
        setComment(e.target.value)
    }

    const onChangeHandleName = (e) => {
        setName(e.target.value)
    }

    const onChangeHandleImage = (e) => {
        setImage(e.target.value)
    }

    return (

        <div className="main-section">
            <div className='main-container'>
                {comments.map((text) => (
                    <div className='comment-submitted' key={text.id}>

                        <div className='comment-name'> <h6 className='name'>{text.name.toUpperCase()}</h6></div>
                        <div className='comment-image' > <img src={text.image} alt='' /></div>
                        <div className='submitted-comment'>
                            <p> {text.comment}</p>
                        </div>

                    </div>
                ))}

                <div className='comment-flexbox'>
                    <h3 className='comment-text'>Comment</h3>
                    <input type='text' value={name} onChange={onChangeHandleName} placeholder='Username'></input>
                    <input type='text' value={image} onChange={onChangeHandleImage} placeholder='image' />
                    <textarea className='text-box' onChange={onChangeHandle} value={comment} />
                    <button onClick={addComment} className='submit-button'>Post</button>
                </div>
            </div>
        </div>
    )
}