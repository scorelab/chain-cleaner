import React, {Component} from 'react';

import Navigation from './Navigation';
import 'react-select/dist/react-select.css';
import HeistTimeline from './Timeline'
import AddHeistButton from './AddHeistButton'

const ReportPage = () =>
  <div>
    <Navigation/>
    <ReportForm />
  </div>


class ReportForm extends Component {
    render() {
        return(
            <div className="container middle-pages">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Reported Heists</h3>
                             <AddHeistButton />
                        <hr/>
                        <div className="middle-pages-2">
                             <HeistTimeline />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ReportPage;

export {
  ReportForm,
};