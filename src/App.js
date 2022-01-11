import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import { navigationItems } from './constants/navigationItems';
import './App.css';

const App = () => {
  const items = navigationItems

  return (
    <BrowserRouter>
      <ol>
        {items.map((item) => {
          const { key, label, link } = item;
          return (
            <li key={key}>
              <Link key={key} to={link}>{label}</Link>
            </li>
          );
        })}
      </ol>

      <Routes>
        {items.map((item) => {
          const { link, component, key } = item;
          return (
            <Route key={key} path={link} element={component} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
