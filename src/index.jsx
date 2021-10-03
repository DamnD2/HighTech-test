import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/core/App/App';
import './i18next';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense>
    <StrictMode fallback='Loading...'>
      <App />
    </StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
