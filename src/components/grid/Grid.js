import React from 'react'
import Card from '../card/Card'
import List from './List'
export default function Grid() {
     const links =["Légumes","Fruits","Produits Frais","Epicerie","Boissons"]
    
     return (
      <div className="container">
            <div className="row">
                <div className="col-sm-2 sidebar">
                <ul>
                    {links.map(link =>{
                        return<li>{link}</li>
                    })}         
                </ul>
                </div>
                <div  className="col-ms-6"> 
                <div className ='row'> 
                    <Card/> &ensp;
                    <Card/> 
                </div>
               
                </div>
                
            </div>
        </div>
        )
    
}







