import React from "react";

export default function Form({ handleSubmit, setText, text }) { 
    return (
        <form id="todoForm" className="form" onSubmit={handleSubmit}>
          <input id="searchInp" type="text" required  autoComplete="off" value={text} onChange={(e)=>{ setText(e.target.value) }}/>
          <button id="submitBtn" type="submit">add</button>
        </form>
    )
}