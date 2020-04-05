import React, { useEffect ,useState} from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch,useSelector ,useStore} from 'react-redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddTodo,handleSubTodo } from '../../store/action/create-action'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormList = (props) => {
  console.log(props)
 
  // const  dispatch =useDispatch()
  const onFinish = (values) => {
    console.log("Success:", values);
     // 派发action
    // dispatch(handleAddTodo(values))
    // props.history.push('/home');
     props.handleSubTodo(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 取出仓库中定义的 state
  const  state =useSelector(state=>{
    return  state
  })
  console.log(state)
  const   {subscribe}= useStore()
   subscribe(()=>{
    console.log('state 改变了')
   })
 
  
  return (
    <div style={{width:600,border:'1px solid red',margin:20,padding:50}}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
       
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input  style={{width:300}} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password   style={{width:300}}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state)
  return {
      
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(dispatch, ownProps)
  // withRouter传入的prop，用于编程式导航
  const { history } = ownProps;

  return {
    handleSubTodo(values) {
         console.log(values)
        history.push('/home');
        return  dispatch(handleSubTodo(values))
      }
  }
}


// export default FormList
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(FormList)))
