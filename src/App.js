// import './App.css';
import CoursePage1402 from './pages/main_1402';
import CoursePage1403 from './pages/main_1403';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootAddress = "/";

const router = createBrowserRouter([
  {path: rootAddress, element: <RootLayout />, errorElement: <ErrorPage/>, 
  children: [
    {path: "/", element: <CoursePage1403 />},
    {path: "/1402", element: <CoursePage1402 />},
    {path: "/1403", element: <CoursePage1403 />}
  ]}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;