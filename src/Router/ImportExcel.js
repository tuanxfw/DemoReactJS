import React, { Component } from 'react';
import { Col, Row, Input } from 'reactstrap';
import readXlsxFile from 'read-excel-file'

class ImportExcel extends Component {
    _exporter;

    constructor(props) {
        super(props);

        this.state = {};

        this.txtInputFile = React.createRef();
        this.txtShow = React.createRef();
    }

    onChangeFile = () => {
        this.txtShow.current.value = "";

        let files = [...this.txtInputFile.current.files];

        for (let i = 0; i < files.length; i++) {
            readXlsxFile(files[i]).then((rows) => {
                //rows là 1 list array
                //Mỗi phần tử trong list ứng với 1 row excel (mỗi phần tử là 1 mảng)
                //Mỗi row excel là 1 mảng, mỗi phần tử trong mảng là giá trị của cell
                let table = rows;
                console.log(table);
    
                let data = '';
                for (let row = 0; row < table.length; row++) {
                    for (let col = 0; col < table[row].length; col++) {
                        data = data + String(table[row][col]) + ',      ';
                    }
                    data = data + '\n';
                }
    
                this.txtShow.current.value = this.txtShow.current.value + data;
            });
            
        }
       
    };

    render() {
        let ColStyle = { textAlign: 'left', padding: '10px 25px 0px 25px' };
        return (
            <Row>
                <Col md={12}>
                    <h4 style={{ textAlign: 'center' }}>
                        <a href={this.props.url} target={'_blank'} rel="noopener noreferrer">{this.props.title}</a>
                    </h4>
                    <Row>
                        <Col md={12} style={{ textAlign: 'left' }}>
                            <p>
                                - Đọc nội dung file excel được truyền vào input type file
                                <br />

                            </p>
                        </Col>

                        <Col md={12} style={ColStyle}>
                            <p>Input file</p>   
                            <Input
                                type={'file'} id='txtFile' hidden={false}
                                innerRef={this.txtInputFile} //để lấy danh sách file từ ref: this.txtInputFile.current.files
                                accept='.xlsx, .xls' //định dạng file sẽ nhận
                                multiple //muốn chọn nhiều file thì để multiple
                                onChange={this.onChangeFile}
                            />
                            <button id={'btnSubmit'} onClick={this.onChangeFile}>submit</button>
                        </Col>
                        <Col md={12} style={ColStyle}>
                            <p>Kết quả</p>
                            <Input
                                type={'textarea'} style={{ height: '400px' }}
                                innerRef={this.txtShow} //để lấy danh sách file từ ref: this.txtInputFile.current.files
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ImportExcel;