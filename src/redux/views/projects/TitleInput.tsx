import React from "react"

export const TitleInput = (props: any) => {
    return (
        <input key={props._id}
               required
               type="text"
               name='title'
               placeholder="Title"
               value={props.title}
               onChange={props.handleChange}/>
    )
};