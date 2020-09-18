import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Button} from 'react-bootstrap';
import PasswordStrengthIndiactor from '../../components/passwordStrengthIndicator';
import "antd/dist/antd.css";
import '../page.css'
import {Form,Input,Popover} from 'antd';

const formItemLayout = {
  
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const content = (
  <div>
    <p>Atleast 8 characters</p>
    <p>Atleast 1 upper case character </p>
    <p>Atleast 1 numeric chracter [0-9] </p>
    <p>Atleast 1 special character </p>
  </div>
);
const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const uppercaseRegx = /[A-Z]/;

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onChange = (data)=>{console.log(data);}
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        
        prefix: '91',
      }}
      scrollToFirstError
    >
      
      <Row>
        <Col lg ={6} xs ={6} >
        <Form.Item name="First Name"  rules={[{ required: true }]}>
            <Input placeholder = "First-Name" className ="fname lname" id="fn" style={{margin:"3px" }}/>
          </Form.Item>
        </Col>
        <Col lg ={6} xs ={6} >
        <Form.Item name="Last Name"  rules={[{ required: true }]}>
          <Input  placeholder = "Last-Name" className ="fname lname" style={{margin:"3px"}} />
        </Form.Item>
      
        </Col>
        </Row>
         <Form.Item
        name ="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input  placeholder ="Email" className ="email" id ="emailP" style={{width:"415px"}} />
      </Form.Item>

      <Row>
        
        <Col lg ={12} xs ={12} noGutters={true} className ="flag-mob">
        <Form.Item
        name="phone"
        
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          
           className ="fname phone" 
           
           type="tel" 
            placeholder="Mobile Number" 
            style={{width:"415px"}} 
            name="Mobile number"
           />
      </Form.Item>
        </Col>
      </Row>
      

      <Row>
         <Col lg ={12} xs ={6}>
          <Form.Item
          name="password"
          
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
         
        >
          
          <Input.Password
              type="password"
              className ="fname password"
              placeholder="Password" 
              style={{width:"415px"} }
              autoComplete="off"
              rules ={[
                ({getFieldValue})=>({
                  validator(rule,value){
                    if(getFieldValue('password').length< 8){
                      
                      return Promise.reject('Password must have atleast 8 character')
                    }
                  }
                })
              ]}
              />
          
        </Form.Item>

         </Col>
         <Col lg ={12} xs ={6}>
            <Form.Item
            name="confirm"
            
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password
               type="password"
              className ="fname password"
              placeholder="Confrim Password" 
              style={{width:"415px"}}
            
             />
          </Form.Item>
         </Col>
         </Row>
        <Form.Item {...tailFormItemLayout}>
      <Button 
            
            type="submit"
            
             className = "button-antd" 
             variant ="info">
               Create Account
             </Button>
             {' '}  
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm
