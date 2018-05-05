import React, {Component} from 'react';
import Navigation from './Navigation';

const LandingPage = () =>
  <div>
       <Navigation/>
        <Landing />
  </div>

class Landing extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="container-fluid" style={{paddingLeft:"0", paddingRight:"0", backgroundColor:"#ffffff"}}>
                <header className="masthead text-white text-center" style={{marginTop:"-20px"}}>
                  <div className="overlay"  style={{zIndex:"1", position:"absolute"}}/>
                  <div className="container">
                    <div className="row" style={{height:"200px"}}>
                      <div className="col-xl-9 mx-auto">
                        <h1 style={{textAlign: "center", color:"#f5f5f5", zIndex:"1200", position:"relative"}}>Check you Bitcoins are Legitimate or not from here!</h1>
                        <h3 style={{textAlign: "center",color:"#f5f5f5", zIndex:"1200", position:"relative"}}>Clean up your wallet wth Chain Kleaner</h3>
                      </div>
                      <div className="featurette">
                       <div className="featurette-inner text-center" style={{zIndex:"2",position:"relative"}}>
                          <form role="form" className="search has-button">
                             <div className="form-group">
                                <input type="search" placeholder="Search with your transaction hash / Address" className="form-control form-control-lg" />
                                <button className="btn btn-lg btn-warning" type="button">Search</button>
                             </div>
                          </form>
                       </div>
                    </div>
                    </div>
                  </div>
                </header>

                <div className="container">
                    <div className="row" style={{marginTop:"30px"}}>
                        <h4 style={{textAlign: "center",color:"#4D4F4E"}}><b>Memory Pool</b></h4>
                        <h6 style={{textAlign: "center",color:"#4D4F4E"}}>(no of txs: 14, size: 168.81 kB)</h6>
                        <div className="col-xl-9 mx-auto" style={{marginTop:"10px"}}>
                            <table id="memPool" className="table table-bordered">
                                <thead>
                                <tr className="table-striped">
                                    <th>AGE [H:M:S]</th>
                                    <th>TRANSACTION HASH</th>
                                    <th>FEE</th>
                                    <th>TX SIZE[KB]</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>00:00:12</td>
                                    <td><a href="#">77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</a></td>
                                    <td>0.010</td>
                                    <td>13.4</td>
                                </tr>
                                <tr>
                                    <td>00:00:12</td>
                                    <td>77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</td>
                                    <td>0.010</td>
                                    <td>13.4</td>
                                </tr>
                                <tr>
                                    <td>00:00:12</td>
                                    <td>77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</td>
                                    <td>0.010</td>
                                    <td>13.4</td>
                                </tr>
                                <tr>
                                    <td>00:00:12</td>
                                    <td>77f1c71f5ab2085fd7be0c78433563ad73cd3ce8a539d824acfca4bced41bb35</td>
                                    <td>0.010</td>
                                    <td>13.4</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;

export {
  Landing,
};