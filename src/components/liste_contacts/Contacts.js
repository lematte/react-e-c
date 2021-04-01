import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                nom: 'dade mamy',
                email: 'dade.mamy@gmail.com',
                tel:'26763535'
            },
            {
                id: 2,
                nom: 'dade med mamy',
                email: 'dade.medmamy@gmail.com',
                tel:'260 00 000'  
            },
            {
                id: 3,
                nom: 'Lematte Ahmed',
                email: 'lematteAhmed@gmail.com',
                tel:'261 11 111'
            }
        ]
    }


    render() {
        return (
            <div>
                {this.state.contacts.map(contact =>(
                    <Contact
                    key={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    />
                ))}
                
            </div>
        )
    }
}
