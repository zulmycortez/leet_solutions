import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { navigationItems } from './constants/navigationItems';
import NavTable from './components/NavTable/NavTable'
import './App.css';

const App = () => {
  const items = navigationItems

  return (
    <BrowserRouter>
      <NavTable items={items} />

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
