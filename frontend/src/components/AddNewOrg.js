import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Form, 
    Button, 
    Upload, 
    Icon,
    Input,
    message
} from 'antd';
import BackButton from './BackButton';

import './css/CustomForm.css';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Você só pode fazer upload de imagens JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('A imagem deve ter um tamanho máximo de 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


class AddNewOrg extends React.Component {
    state = {
        loading: false,
        imageUrl: ''
      };
    
      handleImageChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true, ...this.state });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
              ...this.state
            }),
          );
        }
      };

    handleSubmit = (e) => {

    }

    render() {
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <React.Fragment>
                <BackButton to="/" />
                <div className="form-div">
                    <h1>Adicionar nova organização</h1>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Nome">
                            <Input /> 
                        </Form.Item> 
                        <Form.Item label="Descrição">
                            <Input.TextArea rows={9} />
                        </Form.Item> 

                        <Form.Item label="Imagem">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                //action=""
                                beforeUpload={beforeUpload}
                                onChange={this.handleImageChange}
                            >
                                {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>

                        <Form.Item wrapperCol={{
                            sm: { span: 16, offset: 5 },
                        }} >
                            <Button style={{ width: '200px', height: '50px'}} type="primary" htmlType="submit" className="login-form-button">
                                Adicionar
                            </Button> 
                        </Form.Item>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddNewOrg;