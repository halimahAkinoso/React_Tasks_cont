import React from 'react'
import { useState} from 'react';


function NameTag ()  {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('')
    
    const download = () => {
        const formattedTag = 'Name: ${name}\n Title: ${title}\n Company: ${company}';
        alert(formattedTag)
    }
  return (
    <div>
<input placeholder='Name'
type='text' value={name} onChange={(e) => setName(e.target.value)}/>

<input 
placeholder='Title' type='text' value={title} onChange={(e) => setTitle(e.target.value) } />


<input placeholder='Company' type='text' value={company} onChange={(e) => setCompany(e.target.value)}/>
<button onClick={download}>Download</button>
{/* name tag preview */}
<div style={{
    border: '1px solid black',borderRadius:'8px',padding: '10px', 
    marginTop: '20px', textAlign: 'center'}}>
<h3 style={{margin: '0', color: '#333'}}>Hello, my name is {name}</h3>
<p style={{margin: '5px 0', color: '#666'}}>{title}</p>
<p style={{margin: ' 5px 0', fontweight: 'bold'}}>{company}</p>
</div>
    </div>
  )
}

export default NameTag