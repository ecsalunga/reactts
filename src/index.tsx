import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { UserComponent } from './user/user.component';

ReactDOM.render(
  <UserComponent Count={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
