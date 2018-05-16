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
                      </div>
                      <div className="row" style={{marginTop:"30px"}}>
                            <div className="col-md-4" style={{borderRight:"2px solid #e4e4e4",padding:"0 50px 0 50px"}}>
                              <PieChart
                                  slices={[
                                    {
                                      color: '#e05414',
                                      value: 10,
                                    },
                                    {
                                      color: '#309e1a',
                                      value: 90,
                                    },
                                  ]}
                                />
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
                          <div className="col-md-4"  style={{borderRight:"2px solid #e4e4e4",padding:"0 50px 0 50px"}}>
                              <PieChart
                                  slices={[
                                    {
                                      color: '#e05414',
                                      value: 30,
                                    },
                                    {
                                      color: '#309e1a',
                                      value: 70,
                                    },
                                  ]}
                                />
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
                          <div className="col-md-4" style={{padding:"0 50px 0 50px"}}>
                              <PieChart
                                  slices={[
                                    {
                                      color: '#e05414',
                                      value: 60,
                                    },
                                    {
                                      color: '#309e1a',
                                      value: 40,
                                    },
                                  ]}
                                />
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