import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import LoginPage from './components/LoginPage';
import ReferenceEmployee from './components/ReferenceEmployee';
import ResignReasonsComponent from './components/ResignReasonsComponent';
import SexComponent from './components/SexComponent';
import StaffTypeComponent from './components/StaffTypeComponent';
import EmploymentTypeComponent from './components/EmploymentTypeComponent';
import LocationsComponent from './components/LocationsComponent';
import GradeComponent from './components/GradeComponent';
import PostComponent from './components/PostComponent';
import CourseComponent from './components/CourseComponent';
import UsersComponent from './components/UsersComponent';
import ReferenceAccroding from './components/ReferenceAccroding';
import StaffTypeAddComponent from './components/StaffTypeAddComponent';
import StaffTypeUpdateComponent from './components/StaffTypeUpdateComponent';
import EmploymentTypeAddComponent from './components/EmploymentTypeAddComponent';
import EmploymentTypeUpdateComponent from './components/EmploymentTypeUpdateComponent';
import LocationAddComponent from './components/LocationAddComponent';
import LocationUpdateComponent from './components/LocationUpdateComponent';
import GradeAddComponent from './components/GradeAddComponent';
import GradeUpdateComponent from './components/GradeUpdateComponent';
import PostAddComponent from './components/PostAddComponent';
import PostUpdateComponent from './components/PostUpdateComponent';
import ResignReasonAddComponent from './components/ResignReasonAddComponent';
import ResignReasonUpdateComponent from './components/ResignReasonUpdateComponent';
import CourseAddComponent from './components/CourseAddComponent';
import CourseUpdateComponent from './components/CourseUpdateComponent';



function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {LoginPage}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id_empl" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/reference" component = {ReferenceEmployee}></Route>
                          <Route path = "/reasons" component = {ResignReasonsComponent}></Route>
                          <Route path = "/sex" component = {SexComponent}></Route>
                          <Route path = "/staff_type" component = {StaffTypeComponent}></Route>
                          <Route path = "/employment_type" component = {EmploymentTypeComponent}></Route>
                          <Route path = "/locations" component = {LocationsComponent}></Route>
                          <Route path = "/grade" component = {GradeComponent}></Route>
                          <Route path = "/post" component = {PostComponent}></Route>
                          <Route path = "/courses" component = {CourseComponent}></Route>
                          <Route path = "/users" component = {UsersComponent}></Route>
                          <Route path = "/according" component = {ReferenceAccroding}></Route>
                          <Route path = "/add-staff_type/:id" component = {StaffTypeAddComponent}></Route>
                          <Route path = "/update-staff_type/:id_type" component = {StaffTypeUpdateComponent}></Route>
                          <Route path = "/add-empl_type/:id" component = {EmploymentTypeAddComponent}></Route>
                          <Route path = "/update-empl_type/:id_type" component = {EmploymentTypeUpdateComponent}></Route>
                          <Route path = "/add-location/:id" component = {LocationAddComponent}></Route>
                          <Route path = "/update-location/:id_loc" component = {LocationUpdateComponent}></Route>
                          <Route path = "/add-grade/:id" component = {GradeAddComponent}></Route>
                          <Route path = "/update-grade/:id_grade" component = {GradeUpdateComponent}></Route>
                          <Route path = "/add-post/:id" component = {PostAddComponent}></Route>
                          <Route path = "/update-post/:id_pos" component = {PostUpdateComponent}></Route>
                          <Route path = "/add-reason/:id" component = {ResignReasonAddComponent}></Route>
                          <Route path = "/update-reason/:id_reason" component = {ResignReasonUpdateComponent}></Route>
                          <Route path = "/add-course/:id" component = {CourseAddComponent}></Route>
                          <Route path = "/update-course/:id_course" component = {CourseUpdateComponent}></Route>
                    </Switch>
                </div>
              
        </Router>
    </div>
    
  );
}

export default App;