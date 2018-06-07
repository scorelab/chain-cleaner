import React, {Component} from 'react';
import Navigation from './Navigation';
import MempoolTable from './Mempool'

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
                    <MempoolTable/>
                </div>
            </div>
        );
    }
}

export default LandingPage;

export {
  Landing,
};