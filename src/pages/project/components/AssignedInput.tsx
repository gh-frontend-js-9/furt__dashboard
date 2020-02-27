import React from "react"

export const AssignedInput = (props: any) => {
    return (
        <input key={props._id}
               required
               type="text"
               name='assigned'
               placeholder="Assigned"
               value={props.assigned}
               onChange={props.handleChange}/>
    )
};