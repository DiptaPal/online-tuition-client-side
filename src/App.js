import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
