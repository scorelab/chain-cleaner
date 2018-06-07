import React, {Component} from 'react';
import {database} from "../firebase/firebase";


class MempoolTable extends Component {
    constructor() {
        super();

        this.state = {
          items:[]
        };

    }

    componentDidMount(){
        let reportRef = database.ref("mempool");
        let newState = [];
        reportRef.once("value").then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    let items = childSnapshot.val();
                    newState.push({
                        time: items.time,
                        hash: items.hash,
                        size: items.size,
                        weight: items.weight
                    });
                });
                this.setState({ items: newState })
            });

    }

    render() {
        return(
            <div className="row" style={{marginTop: "30px"}}>
                <h4 style={{textAlign: "center", color: "#4D4F4E"}}><b>Memory Pool</b></h4>
                <h6 style={{textAlign: "center", color: "#4D4F4E"}}>(no of txs: 14, size: 168.81 kB)</h6>
                <div className="col-xl-9 mx-auto" style={{marginTop: "10px"}}>
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
                          {this.state.items.map((item,key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.time}</td>
                                    <td><a href="#">{item.hash}</a></td>
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
