import React from "react"

export const DeadlineInput = (props: any) => {
    return (
        <input key={props._id}
               required
               type="text"
               name='deadline'
               placeholder="Deadline"
               value={props.deadline}
               onChange={props.handleChange}/>
    )
};