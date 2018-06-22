import React, {Component} from 'react';
import {database} from "../firebase/firebase";


class MempoolTable extends Component {
    constructor() {
        super();

        this.state = {
          items:[],
          noTx:0,
          totalSize:0
        };

    }

    tick() {
        let reportRef = database.ref("mempool");
        let newState = [];
        reportRef.once("value").then((snapshot) => {
                let totalSize = 0;
                snapshot.forEach((childSnapshot) => {
                    let items = childSnapshot.val();
                    totalSize += items.weight;
                    newState.push({
                        time: new Date(items.time*1000).toString().split("GMT")[0],
                        hash: items.hash,
                        size: items.size,
                        weight: items.weight,
                        isTainted: items.isTainted
                    });
                });

                totalSize = parseFloat(Math.round(totalSize/1024 * 100) / 100).toFixed(2);
                this.setState({ items: newState });
                this.setState({ noTx: newState.length });
                this.setState({ totalSize: totalSize });
            });
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div className="row" style={{marginTop: "30px"}}>
                <h4 style={{textAlign: "center", color: "#4D4F4E"}}><b>Memory Pool</b></h4>
                <h6 style={{textAlign: "center", color: "#4D4F4E"}}>(no of txs: {this.state.noTx}, total size: {this.state.totalSize} MB)</h6>
                <div className="col-xl-9 mx-auto" style={{marginTop: "10px"}}>
                    <table id="memPool" className="table table-bordered">
                        <thead>
                        <tr className="table-striped">
                            <th>TIME [d:M:D:Y:H:M:S]</th>
                            <th>TRANSACTION HASH</th>
                            <th>TX SIZE[KB]</th>
                            <th>WEIGHT</th>
                        </tr>
                        </thead>
                        <tbody>
                          {this.state.items.map((item,key) => {
                            return (
                                <tr key={key} style={{ backgroundColor: item.isTainted === 1 ? '#ff6363': '#E4E4E4'}}>
                                    <td>{item.time}</td>
                                    <td><a href="#" style={{color:"#3B4651"}}>{item.hash}</a></td>
                                    <td>{item.size}</td>
                                    <td>{item.weight}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MempoolTable;
