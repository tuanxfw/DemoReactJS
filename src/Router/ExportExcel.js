import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import TableExport from "tableexport";
//import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactHTMLTableToExcel from "../Components/ReactHTMLTableToExcel";

class ExportExcel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  export = () => {
    let idTable = "table-to-xls";
    let table = document.getElementById(idTable);
    TableExport(table, {
      headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
      footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
      formats: ["xlsx"], // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
      filename: "test", // (id, String), filename for the downloaded file, (default: 'id'))
      bootstrap: true, // (Boolean), style buttons using bootstrap, (default: true)
      ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
      ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
      trimWhitespace: false, // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
      RTL: false, // (Boolean), set direction of the worksheet to right-to-left (default: false)
      sheetname: "sheet1", // (id, String), sheet name for the exported spreadsheet, (default: 'id')
    });

    document
      .evaluate(
        '//*[@id="' + idTable + '"]/caption/button',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      )
      .singleNodeValue.click();
  };

  render() {
    let ColStyle = { textAlign: "left", padding: "10px 25px 0px 25px" };
    return (
      <Row>
        <Col md={12}>
          <h4 style={{ textAlign: "center" }}>{this.props.title}</h4>
          <Row>
            <style>
              {`
                    table{               
                        width: 100%;
                    }
                    .table{               
                        border: none;
                    }
                    td, th{
                        text-align: center;
                    }
                    .border td, .border th{                  
                        border: 1px solid black !important;       
                    }
                    caption{ 
                      display: none !important;            
                    }
                  `}
            </style>
            <Col md={12} style={{ textAlign: "left" }}>
              <p>
                - Export excel từ thẻ table trong html
                <br />
                {"=>"} Lưu ý chỉ nhận nội dung trong thẻ table, những thẻ ngoài
                table sẽ không nhận
              </p>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/tableexport"
                >
                  Export xlsx
                </a>
                <br/>
                Không nhận css
                <br/>
                Khó sử dụng
                <br/>
                Dễ dính lỗi nhảy format
              </p>
              <table id="table-to-xlsx">
                <thead>
                  <tr>
                    <th colspan="3">
                    <h5 style={{color: 'red'}}>Header</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td>1</td>
                    <td>Body 1 &nbsp;</td>
                    <td>Body 1 &nbsp;</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border">
                    <th>Footer 1 &nbsp;</th>
                    <th>test 2 &nbsp;</th>
                    <th>Footer 3 &nbsp;</th>
                  </tr>
                </tfoot>
              </table>

              <Button onClick={this.export} style={{ marginTop: "20px" }}>
                Export XLSX
              </Button>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/react-html-table-to-excel"
                >
                  Export xls
                </a>
                <br/>
                Nhận css 
                <br/>
                Dễ sử dụng
                <br/>
                Chỉ dính lỗi nhảy format khi cell chỉ chứa số
              </p>
              <table id="table-to-xls">
                <thead>
                  <tr>
                    <th colspan="3">
                      <h5 style={{color: 'red'}}>Header</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td>1 &nbsp;</td>
                    <td>2</td>
                    <td>Body 1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border">
                    <th>Footer 1</th>
                    <th>test 2</th>
                    <th>Footer 3</th>
                  </tr>
                </tfoot>
              </table>
              <div style={{ marginTop: "20px" }}>
                <ReactHTMLTableToExcel
                  id="test-table-xls-button" //id button
                  className="download-table-xls-button btn btn-secondary"
                  table="table-to-xls" // id của table muốn export
                  filename="tablexls" //tên của file export
                  sheet="tablexls" //tên của sheet
                  buttonText="Export XLS" // text của button
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ExportExcel;
