import React from "react"

export const EmailInput = (props: any) => {
    return (
        <input {...props}
               required
               className="input"
               placeholder="Email"/>
    )
};