import React, { Component } from 'react'



class Reference extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: this.props.match.params.index    ,
            employee: {} 
            
        }
        this.referenceReasons = this.referenceReasons.bind(this);
    }

    referenceReasons(){
        this.props.history.push('/reasons');
        console.log('22')
    }
    

    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочники</h2>
                <div className='reference-center'>
               <p><button className='reference' >Cправочник Пол</button></p>
               <p><button className='reference' >Cправочник Типы персонала</button></p>
               <p><button className='reference' >Cправочник Типы трудоустройства</button></p>
               <p><button className='reference' >Cправочник Локации </button></p>
               <p><button className='reference' >Cправочник Грейды</button></p>
               <p><button className='reference' >Cправочник Должности</button></p>
               <p><button className='reference' >Cправочник Локации</button></p>
               <p><button className='reference' >Cправочник Грейды</button></p>
               <p><button className='reference'  onClick={this.referenceReasons}>{console.log('11')} Cправочник Причины увольнения</button></p>
               <p><button className='reference' >Cправочник Направления</button></p>
               <p><button className='reference' >Cправочник Пользователи</button></p>
               <p><button className='reference' >Cправочник По прогнозу текучки</button></p>
               </div>

            </div>
        )
    }
}

export default Reference