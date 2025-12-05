// import './App.css';
import CoursePage1402 from './pages/main_1402';
import CoursePage1403 from './pages/main_1403';
import CoursePage1404 from './pages/main_1404';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootAddress = "/";

const router = createBrowserRouter([
  {path: rootAddress, element: <RootLayout />, errorElement: <ErrorPage/>, 
  children: [
    {path: "/", element: <CoursePage1404 />},
    {path: "/spring-2024", element: <CoursePage1402 />},
    {path: "/fall-2024", element: <CoursePage1403 />},
    {path: "/fall-2025", element: <CoursePage1404 />},
  ]}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;