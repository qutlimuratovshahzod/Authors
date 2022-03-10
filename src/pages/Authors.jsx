import React from 'react'

export const Authors = () => {
    const author = ['shahzod', 'Sabur', 'Ollayor', 'Javokhir']
  return (
    <div>         <ul>
       { author.map((authors, index) => {
           return(
     
                  <li key={index}>{authors}</li>
            
           )
        })}  </ul>
    </div>
  )
}
