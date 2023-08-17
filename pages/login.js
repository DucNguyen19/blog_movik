import { login, setToken } from '@/api/address'
import { setCookie } from '@/api/cookies'
import { MailOutlined, LoginOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import getConfig from 'next/config'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'

function Login() {

  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage();

  const alertMess = (type = "info", message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  async function submitLogin(values) {
    login(values).then(
      res => {
        if (res?.data?.token) {
          setToken(res?.data?.token)
          setCookie("token", res?.data?.token)
          alertMess("success", "Sign in success!")
          Router.push("/admin")
        } else {
          alertMess("error", "Sign in fail!")
        }
      }
    ).catch(err => {
      alertMess("error", "Error login! Please check!")
      console.log(err, 'err');
    })
  }

  return (
    <>
      {contextHolder}
      <Head>
        <title>Login Blog Movick</title>
      </Head>
      <div className='h-screen flex'
        style={{
          backgroundImage: "url(/images/bgLogin.png)",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className='w-1/2 hidden lg:block m-auto'>
          <p className='text-5xl font-bold text-white text-center'>Movick</p>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <div className='bg-white h-2/5 w-2/3 lg:w-1/2 p-10 flex justify-center items-center rounded-md'>
            <div className=' w-full'>
              <p className='text-4xl text-black font-semibold mb-2'>Login</p>
              <Form
                form={form}
                layout='vertical'
                onFinish={submitLogin}
              >
                <Form.Item label="Username" name="user_name"
                  rules={[
                    { required: true, message: "This field is required!" }
                  ]}
                >
                  <Input
                    suffix={
                      <MailOutlined
                        style={{
                          color: 'rgba(0,0,0,.45)',
                        }}
                      />
                    }
                    placeholder='Enter your username...'
                    size="large"
                  />
                </Form.Item>
                <Form.Item label="Password" name="password"
                  rules={[
                    { required: true, message: "This field is required!" },
                    {
                      min: 6, message: "Password at least 6 characters"
                    }
                  ]}
                >
                  <Input.Password
                    placeholder='Enter your password...'
                    size="large"
                  />
                </Form.Item>
                <div className='flex justify-center'>
                  <Button htmlType='submit' icon={<LoginOutlined />} type='primary'>Sign in</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login