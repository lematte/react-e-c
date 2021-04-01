import React from 'react'

 function  Navbar() {
    return (
        <nav class="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
               <a href="/"  className= "navbar-brand crimson">

Mes Courses en Ligne
               </a>
        
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                ariacontrols="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>  
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto cart">
                        <div>
                           <form className="search form-inline my-2 my-lg-0">                              
                             <input type="search" 
                                className="form-control mr-ms-2"
                                placeholder="Search"
                                aria-label="search"/>
                        </form>
                       </div>
                       <div className="menu-right">
                                {/*cart */}
                       </div>
                </div>
                </div>
        </nav>
        
    )
}
export default Navbar;