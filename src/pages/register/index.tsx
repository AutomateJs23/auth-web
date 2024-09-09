import React from 'react';
import { Button, Checkbox, Form, Input, FormProps } from 'antd';
import Link from 'next/link'


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function Register() {
    return (
        <div className="bg-sky-100">
            <div className="flex min-h-screen items-center justify-center ">
                <div className="flex flex-col md:flex-row w-full m-6 max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">

                    <div className="w-full md:w-1/2 px-8 pb-24 pt-3 md:pt-24  md:px-16">
                        <div className="flex justify-center mb-10 md:hidden">
                            <img className="w-28 h-auto" src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" alt="Next.js Logo" />
                        </div>
                        <h2 className="text-2xl text-center font-bold mb-6 text-gray-900">SignUp</h2>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            className="space-y-6"
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input
                                    placeholder="Email"
                                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm "
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                                />
                            </Form.Item>
                            
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
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password 
                                    placeholder="Confirm Password"
                                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                                /> 

                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="submit" className="w-full font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                                    SignUp
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='text-center py-2'>
                            <span className='text-sm'>
                                Already have an account?
                                <Link href="/login" className='text-cyan-600 font-medium hover:underline'> Login</Link>
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-cyan-200 to-blue-300  justify-center items-center">
                        <img className="md:w-1/2 w-28 h-auto mx-auto" src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" alt="Next.js Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}