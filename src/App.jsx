
// import './App.css'
// // import UserLayout from './components/layout/UserLayout';
// import Home from './pages/Home'
// import { Route,Routes } from 'react-router-dom'

// function App() {


//   return (
//     <>
//      <div>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="login" element={<login/>}/>
//         <Route path="signup" element={<signup/>}/>
//         {/* private pages */}
//         <Route path="/user" element={<UserLayout/>}/>
//         <Route index element={<Dashboard/>}/>
//         <Route path="BorrowHistory" element={</>}/>
//         <Route path="Books" element={<Books/>}/>
//         <Route path="Books" element={<Books/>}/>


//       </Routes>
//      </div>
        
//     </>
//   )
// }

// export default App;



import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;