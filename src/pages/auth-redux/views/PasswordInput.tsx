import React from "react"

export const PasswordInput = (props: any) => {
    return (
        <input {...props}
               required
               className="input"
               placeholder="Password"/>
    )
};