import React from 'react'

class PersonCard extends React.Component {

    constructor(props){        
        super(props);
    }

    render(){

        const{Nombre, Apellido, año,colorPelo} = this.props
        return (
            
            <>
            <h1 className='persona'> {Nombre}, {Apellido}  </h1>    
            <p className='parrafo'> {año}</p>
            <p className='parrafo'> {colorPelo}</p>            
            
            </>
        )

    } 


}

export default PersonCard
