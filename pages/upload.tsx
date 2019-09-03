import React from 'react';
import { FormComponentProps } from 'antd/es/form';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

const { Option } = Select;
import Layout from '../components/Layout';

interface UserFormProps extends FormComponentProps {
  fileDescription: string;
  fileUpload: any;
}

class UserForm extends React.Component<UserFormProps, any> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  render = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      
      <Form.Item label="Select" hasFeedback>
        {getFieldDecorator('select', {
          rules: [{ required: true, message: 'Please select your country!' }],
        })(
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>,
        )}
      </Form.Item>

      <Form.Item label="Dragger">
        <div className="dropbox">
          {getFieldDecorator('dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </div>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
          </Button>
      </Form.Item>

    </Form>
  }
}
const UploadForm = Form.create<UserFormProps>({
  // ...
})(UserForm);


export default () => {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <UploadForm />
    </Layout>
  )
}