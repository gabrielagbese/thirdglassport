import React from 'react'

export default function Form() {
    return (
        <div className='form-wrapper'>
            <form data-multi-step>
                <div className="chat" data-step="1">
                    <input className='chat-input' type="text" name="name" id="name"></input>
                    <button className='chat-button' type="submit">submit</button>
                </div>
                <div className="chat" data-step="2">

                </div>
                <div dclassName="chat" ata-step="3">
                    {/* <button type="submit">submit</button> */}
                </div>
            </form>
        </div>
    )
}
