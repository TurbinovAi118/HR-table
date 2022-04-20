import React, { Component } from 'react'



class Reference extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: this.props.match.params.index    ,
            employee: {} 
            
        }
        this.referenceEmployees = this.referenceEmployees.bind(this);
        this.referenceReasons = this.referenceReasons.bind(this);
        this.referenceSex = this.referenceSex.bind(this);
        this.referenceStaffType = this.referenceStaffType.bind(this);
        this.referenceTypesofemployment = this.referenceTypesofemployment.bind(this);
        this.referenceLocation = this.referenceLocation.bind(this);
        this.referenceGrade = this.referenceGrade.bind(this);
        this.referencePost = this.referencePost.bind(this);
        this.referenceCourses = this.referenceCourses.bind(this);
        this.referenceUsers = this.referenceUsers.bind(this);
        this.referenceAccording = this.referenceAccording.bind(this);
        
        
    }

    referenceEmployees(){
        this.props.history.push('/employees');
    }

    referenceReasons(){
        this.props.history.push('/reasons');
    }
    
    referenceSex(){
        this.props.history.push('/sex');
    }
    referenceStaffType(){
        this.props.history.push('/staff_type');
        
    }

    referenceTypesofemployment(){
        this.props.history.push('/employment_type');
        
    }
    referenceLocation(){
        this.props.history.push('/locations');
        
    }

    referenceGrade(){
        this.props.history.push('/grade');
        
    }
    referencePost(){
        this.props.history.push('/post');
        
    }
    referenceCourses(){
        this.props.history.push('/courses');
        
    }
    referenceUsers(){
        this.props.history.push('/users');
        
    }
    referenceAccording(){
        this.props.history.push('/according');
        
    }

    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочники</h2>
                <div className='reference-center'>
                <p><button className='reference' onClick={this.referenceEmployees}>{console.log('11')} Cправочник Сотрудники</button></p>
               <p><button className='reference' onClick={this.referenceSex}>{console.log('11')} Cправочник Пол</button></p>
               <p><button className='reference' onClick={this.referenceStaffType}> Cправочник Типы персонала</button></p>
               <p><button className='reference' onClick={this.referenceTypesofemployment}> Cправочник Типы трудоустройства</button></p>
               <p><button className='reference' onClick={this.referenceLocation}> Cправочник Локации </button></p>
               <p><button className='reference' onClick={this.referenceGrade}> Cправочник Грейды</button></p>
               <p><button className='reference' onClick={this.referencePost}> Cправочник Должности</button></p>
               <p><button className='reference' onClick={this.referenceReasons}>{console.log('11')} Cправочник Причины увольнения</button></p>
               <p><button className='reference' onClick={this.referenceCourses}> Cправочник Направления</button></p>
               <p><button className='reference' onClick={this.referenceUsers}>Cправочник Пользователи</button></p>
               <p><button className='reference' onClick={this.referenceAccording}>Cправочник По прогнозу текучки</button></p>
               </div>

            </div>
        )
    }
}

export default Reference