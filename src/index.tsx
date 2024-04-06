import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
