import React, {Component} from 'react';

import Navigation from './Navigation';
import withAuthorization from './withAuthorization';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'


const ReportPage = () =>
  <div>
    <Navigation/>
    <ReportForm />
  </div>


class ReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
      }

      handleChange(tags) {
        this.setState({tags})
      }

      handleChangeInput(tag) {
        this.setState({tag})
      }


    render() {
        const { tags, suggestions } = this.state;

        return(
            <div className="container middle-pages">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Reported Heists</h3>
                        <hr/>
                    </div>
                    <div className="col-md-6">
                        <h3>Report New Heists</h3>
                        <hr/>

                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Heists Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"  />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                          </div>
                           <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Another Field</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"  />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Type</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                            <div>
                                <label>Transactions</label>
                                <TagsInput
                                    value={this.state.tags}
                                    onChange={this.handleChange}
                                    inputValue={this.state.tag}
                                    onChangeInput={this.handleChangeInput}
                                  />
                            </div>
                          <button type="submit" className="btn btn-primary mb-2">Submit Heist</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ReportPage);

export {
  ReportForm,
};