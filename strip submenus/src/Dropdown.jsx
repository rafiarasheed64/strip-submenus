import React, { useEffect, useRef,useState } from 'react'
import { GlobalContext } from './Context'

const Dropdown = () => {
  const {issubmenuopen,page : {page, link}, location}= GlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect( ()=> {
    const current =container.current///first element

    console.log(current, "current");
    const {center,bottom} = location
    current.style.left= `${center}px`
    current.style.top = `${bottom}px`
    if(link.length === 3){
      setColumns('col-3')
    }
    if(link.length > 3){
      setColumns('col-4')
    }

  },[page,location,link])
  return (
    <div className={`${issubmenuopen ? 'dropdown show-dropdown' : 'dropdown'}`} ref={container}>
      
      <div className='inner-box'>
        <h1>{page}</h1>
        <div className={`${columns}`}>
          {link.map((ele,idx)=>{
            const{icn,label}= ele
            return(
              <p key={idx}>{icn}{label}</p>
            )

          })}
        </div>
      </div>

    </div>
  )
}

export default Dropdown