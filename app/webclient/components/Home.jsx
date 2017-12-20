import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid} from 'react-bootstrap';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      userContactSignUp:'',
      userEmailSignUp:'',
      userPwdSignUp:'',
      signUpStatus:false
    }
    this.handleUsername=this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleUsername(e){
    this.setState({ username: e.target.value });
  }
  handlePassword(e){
    this.setState({ password: e.target.value });
  }

  handleUserEmailignUp=(e)=>{
    this.setState({userEmailSignUp:e.target.value});
  }

  handlePasswordSignUp=(e)=>{
    this.setState({userPwdSignUp:e.target.value});
  }
  handleUserConatctSignUp=(e)=>{
    this.setState({userContactSignUp:e.target.value});
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  handleClick(e) {
    let data={userName:this.state.Id,userPassword:this.state.password};
    Axios({
      method:'post',
      url:'/api/v1/user/',
      data:data
    })
    .then((data1) => {
      console.log('Login details connected to server for post');
      console.log(data1.data.message);
      if(data1.data.message=='success'){
        this.context.router.push('/dashboard');
        alert('Successfully logged in!!!');
      }else{
        alert('Please enter valid Credentials!!!');
      }
// console.log(data1);
})
    .catch((error) => {
      console.log(error);
      console.log(error+"error in Login data for post");
    });
  }

  signUp=()=>{
    this.setState({signUpStatus:true});
  }

  handleSignUpClick=()=>{
    let signUpObj={
      _id:Date.now(),
      userEmailSignUp:this.state.userEmailSignUp,
      userPwdSignUp:this.state.userPwdSignUp,
      userContactSignUp:this.state.userContactSignUp
    }
    Axios({
      method:'post',
      url:'/api/v1/user/signUp',
      data:signUpObj
    })
    .then((data1) => {
      console.log('Login details connected to server for post');
      console.log(data1.data.message);
      alert('Signup Successfully');
      this.setState({signUpStatus:false});
    })
    .catch((error) => {
      console.log(error);
      console.log(error+"error in Login data for post");
    });

  }

  loginClick=()=>{
    this.setState({signUpStatus:false});
  }
  render() {
    if(this.state.signUpStatus==false){
      return (

        <div className="background">
        <center>
        <div style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}>


        <h2>
        Please enter your credentials
        </h2><br/>


        <TextField
        hintText="User Name"
        floatingLabelText="Enter User Name"
        value={this.state.username}
        onChange = {this.handleUsername}
        /><br />
        <TextField
        hintText="Password"
        floatingLabelText=" Enter Password"
        type="password"
        value={this.state.password} onChange = {this.handlePassword}
        /><br />
        <RaisedButton label="Login" primary={true}  onClick={this.handleClick}/>
        <RaisedButton label="Sign Up" primary={true} style={{marginLeft:'50px'}} onClick={this.signUp}/>

        </div>
        </center>
        </div>
        )}else{
        return(
          <div className="background">
          <center>
          <div style={{height:'400px',width:'500px',backgroundColor:'white',marginTop:'200px'}}>


          <h2>
          Register for Task Managment App
          </h2><br/>       

          <TextField
          hintText="Email ID"
          floatingLabelText="Enter Email ID"
         
          value={this.state.userEmailSignUp}
          onChange = {this.handleUserEmailignUp}
          /><br />
          <TextField
          hintText="Password"
          floatingLabelText=" Enter Password"
          type="password"
          value={this.state.userPwdSignUp} onChange = {this.handlePasswordSignUp}
          />
          <TextField
          hintText="Contact Number"
          floatingLabelText="Enter Contact Number"
          
          value={this.state.userContactSignUp}
          onChange = {this.handleUserConatctSignUp}
          /><br />
          <RaisedButton label="Register" primary={true}  onClick={this.handleSignUpClick}/>

          </div>
          </center>
          </div>
          )
      }
    }
  }



