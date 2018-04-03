import React, {Fragment} from 'react'
import IndexSettings from './indexSettings';

import {Route} from 'react-router-dom';
import Team from './Team/team.component';
import History from './history/history.component.js';

const indexSettings = ({match}) => (
        <Fragment>
            <Route path={`${match.url}/team`} component={Team}/>
            <Route path={`${match.url}/history`} component={History}/>
        </Fragment>
    );
export default indexSettings;