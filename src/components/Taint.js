import React, { Component } from 'react';
import Navigation from './Navigation';
import PieChart from 'react-simple-pie-chart';

const TaintPage = () =>
  <div>
       <Navigation/>
       <Taint />
  </div>

class Taint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div className="container middle-pages">
              <div className="row">
                  <div className="col-md-12">
                      <h3>Results of Taint Analysis</h3>
                      <hr/>
                      <div className="row">
                          <div className="col-md-12">
                              <h4>Input Type - Address</h4>
                              <h5>Address/Tx Hash - adsasdnaldjnasdadasdnasldnadadasdsldnasldjnasd</h5>
                          </div>
                          <div className="pull-right" style={{marginTop:"-40px"}}>
                              <div>
                                  <div style={{backgroundColor:"#8D9ECC", height:"14px", width:"14px",marginLeft:"-30px"}}/>
                                  <p style={{marginLeft:"-5px", marginTop:"-18px", marginRight:"30px"}}>Tainted</p>
                              </div>
                              <div>
                                  <div style={{backgroundColor:"#355080", height:"14px", width:"14px",marginLeft:"-30px"}}/>
                                  <p style={{marginLeft:"-5px", marginTop:"-18px", marginRight:"30px"}}>Not Tainted</p>
                              </div>
                          </div>
                      </div>
                      <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-md-4" style={{borderRight:"2px solid #e4e4e4"}}>
                              <div style={{padding:"0 70px 0 70px"}}>
                                  <PieChart
                                      slices={[
                                        {
                                          color: '#8D9ECC',
                                          value: 60,
                                        },
                                        {
                                          color: '#355080',
                                          value: 40,
                                        },
                                      ]}
                                    />
                              </div>
                                <p style={{textAlign:"center"}}>Poison Policy</p>
                                <table className="table table-bordered poison-table" style={{marginTop:"30px"}}>
                                    <thead>
                                    <tr className="table-striped">
                                        <th>TRANSACTION HASH</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>
                          <div className="col-md-4"  style={{borderRight:"2px solid #e4e4e4"}}>
                             <div style={{padding:"0 70px 0 70px"}}>
                                  <PieChart
                                      slices={[
                                        {
                                          color: '#8D9ECC',
                                          value: 60,
                                        },
                                        {
                                          color: '#355080',
                                          value: 40,
                                        },
                                      ]}
                                    />
                              </div>
                              <p style={{textAlign:"center"}}>Haircut Policy</p>
                              <table className="table table-bordered poison-table" style={{marginTop:"30px"}}>
                                    <thead>
                                    <tr className="table-striped">
                                        <th>TRANSACTION HASH</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>
                          <div className="col-md-4" >
                              <div style={{padding:"0 70px 0 70px"}}>
                                  <PieChart
                                      slices={[
                                        {
                                          color: '#8D9ECC',
                                          value: 60,
                                        },
                                        {
                                          color: '#355080',
                                          value: 40,
                                        },
                                      ]}
                                    />
                              </div>
                              <p style={{textAlign:"center"}}>FIFO Policy</p>
                              <table className="table table-bordered poison-table" style={{marginTop:"30px"}}>
                                    <thead>
                                    <tr className="table-striped">
                                        <th>TRANSACTION HASH</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default TaintPage;

export {
  Taint,
};