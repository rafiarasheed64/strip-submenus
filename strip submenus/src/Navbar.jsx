import React from 'react'
import { GlobalContext } from './Context'
import { BiListUl } from 'react-icons/bi'

const Navbar = () => {
    const {opensubmenu, opensidebar} = GlobalContext()
    const displaysubmenu = (e)=>{
        console.log(e);
        const page = e.target.textContent  ///for page

        console.log(page);

        const leftright = e.target.getBoundingClientRect()///to get left and right value
        const center = (leftright.left + leftright.right)/ 2 
        const bottom = leftright.bottom - 3
        opensubmenu(page, {center,bottom} )
    }
  return (
    <div className='navbar'>
        <div className='sub-nav' style={{
            border: '1px solid'
        }}>
            <h2>Stripe</h2>
            <BiListUl onClick={opensidebar} className='list-btn'/>
        <ul className='list1'>
            <li onMouseOver={displaysubmenu}>Products</li>
            <li onMouseOver={displaysubmenu}>Developers</li>
            <li onMouseOver={displaysubmenu}>Company</li>
        </ul>
        <button className='signIn-btn'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar