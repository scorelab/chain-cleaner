import React, {Component} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {database} from "../firebase/firebase";
import Modal from "react-responsive-modal";

class HeistTimeline extends Component {
    constructor() {
        super();

        this.state = {
          items:[],
          open: false,
          selectedItem:[],
        };

        this.loadData();
    }

    onOpenModal = (reqKey) => {
        this.setState({ open: true });
        this.getItem(reqKey);
      };

    onCloseModal = () => {
        this.setState({ open: false });
        this.setState({ selectedItem:[] });
      };

    loadData() {
        let reportRef = database.ref("reports");
        let newState = [];
        reportRef.once("value").then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    let items = childSnapshot.val();
                    newState.push({
                        _key:childSnapshot.key,
                        name: items.heistName,
                        description: items.description,
                        time: items.time,
                        type: items.type,
                        address: items.addressesTags,
                        transaction: items.transactionsTags,
                    });
                });

                this.setState({ items: newState });
            });
    }

    getItem(key) {
        let reportRef = database.ref("reports/"+key+"");
        let newSelectState = [];
        reportRef.once("value").then((snapshot) => {
             let items = snapshot.val();
             newSelectState.push({
                    name: items.heistName,
                    description: items.description,
                    time: items.time,
                    type: items.type,
                    address: items.addressesTags,
                    transaction: items.transactionsTags,
                });

             this.setState({ selectedItem: newSelectState });
        });
    }

    render() {
        return (
            <VerticalTimeline>
                 {this.state.items.map((item,key) => {
                     return (
                         <VerticalTimelineElement key={key}
                             className="vertical-timeline-element--work"
                             iconStyle={{background: '#22242C', color: '#fff'}}
                             icon={<i className="fa fa-exclamation-triangle fa-2x"style={{marginLeft: "15px", marginTop: "15px"}}/>}
                         >
                             <h4 className="vertical-timeline-element-title" style={{marginTop:"10px"}}>{item.name}</h4>
                             <span className="label label-primary vertical-timeline-element-subtitle">TYPE: {item.type}</span>
                             <h6 className="pull-right" style={{marginTop:"-40px", color:"#22242C"}}>REPORTED @ {item.time}</h6>

                             <a className="pull-right" href="#" style={{fontSize:"15px",marginTop:"20px",marginBottom:"-10px", color:"#22242C"}} onClick={() => this.onOpenModal(item._key)}>See More</a>
                         </VerticalTimelineElement>
                     )
                 })}
                 <Modal open={this.state.open} onClose={this.onCloseModal} center  style={{width:"800px"}}>
                     <div>
                          {this.state.selectedItem.map((item) => {
                              return(
                                  <div>
                                      <h4 className="vertical-timeline-element-title">{item.name}</h4>
                                      <span className="label label-primary vertical-timeline-element-subtitle"
                                            style={{marginTop: "10px"}}>TYPE: {item.type}</span>
                                      <h6 className="pull-right" style={{marginTop: "20px", color: "#22242C"}}>REPORTED
                                          @ {item.time}</h6>
                                      <hr/>

                                      <p>{item.description}</p>

                                      <h5 style={{marginTop: "10px"}}><u>Transaction(s)</u></h5>
                                      {item.transaction.map((index) => {
                                          return (
                                              <p>{index}</p>
                                          )
                                      })}
                                      <h5 style={{marginTop: "10px"}}><u>Address(s)</u></h5>
                                      {item.address.map((index) => {
                                          return (
                                              <p>{index}</p>
                                          )
                                      })}


                                  </div>
                              )
                          })}


                     </div>
                 </Modal>
            </VerticalTimeline>

        );
    }
}

// const authCondition = (authUser) => !!authUser;
export default HeistTimeline;
