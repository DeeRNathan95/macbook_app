import React from 'react'

const NavBar = () => {
    return (
       <header>
           <nav>
               <img src="/logo.svg" alt="Apple Logo" />
               <ul>
                   {[
                       {label: 'Store'},
                       {label: 'Mac'},
                       {label: 'iPhone'},
                       {label: 'Watch'},
                   ]}
               </ul>

           </nav>
           </header>
    )
}
export default NavBar
