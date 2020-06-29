import { render } from 'react-dom';
import BasicRouter from './routes'
import * as serviceWorker from './serviceWorker';
import './index.scss';


render(BasicRouter, document.getElementById('root'));
serviceWorker.unregister();
