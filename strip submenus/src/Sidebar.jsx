import React from 'react'
import { GlobalContext } from './Context'
import { BiX } from 'react-icons/bi'
import Linkdata from './Data'
const Sidebar = () => {
  const {closesidebar,sidebaropen } = GlobalContext()
  return (
    <div 
    className={`${ sidebaropen ? 'sidebar sidebar-show' : 'sidebar'}`}
    >
      
      <div >
        <button className='btn3' onClick={closesidebar}>
          <BiX />
        </button>
        <div className='box1'>
          {Linkdata.map((item, index) => {
            const { link, page } = item
            return (
              <div key={index}>
                <h3 className='text1'>{page}</h3>
                <div >
                  {link.map((ele, idx) => {
                    const {icn, label } = ele
                    return (
                      <p className='text2' key={idx} >{icn} {label}</p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar