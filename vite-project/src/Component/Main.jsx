import React ,{useState} from 'react';
import Navbar from './Navbar';
import News from './News';
import {Switch, Route, Router} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const Main = () => {
  const[progress,setProgress] = useState(10)
  return <div>
    <div>
      <LoadingBar height={3} color='#f11949'
      progress={progress}/>
    </div>

      <Navbar/>
      <Switch>
      <Route exact path ="/"> 
      <News country='in' category='general' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/business"> 
      <News country='in' category='business' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/health"> 
      <News country='in' category='health' setProgress={setProgress}  pageSize='10' />
       </Route>
      <Route exact path ="/general"> 
      <News country='in' category='general' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/sports"> 
      <News country='in' category='sports' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/technology"> 
      <News country='in' category='technology' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/entertainment"> 
      <News country='in' category='entertainment' setProgress={setProgress} pageSize='10' />
       </Route>
      <Route exact path ="/science"> 
      <News country='in' category='science' setProgress={setProgress} pageSize='10' />
       </Route>
      </Switch>
    
      
  
  </div>;
};

export default Main;
