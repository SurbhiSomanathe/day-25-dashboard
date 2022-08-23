import React from 'react';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbhar';
import Sidebar from '../Components/Sidebar';
 
function App(){
 
        return (
            <div>
                <Navbar />
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar />
                  <Dashboard />
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App;