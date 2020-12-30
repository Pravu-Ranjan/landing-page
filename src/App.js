import React, { Fragment } from 'react';
import AppHeader from './Components/Layouts/AppHeader';
import CarouselBody from './Components/Layouts/CarouselBody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeadlineContent from './Components/Pages/HeadlineContent';
import MidlineContent from './Components/Pages/MidlineContent';
import './App.css';
import CenterLineContent from './Components/Pages/CenterLineContent';
import BottomLineContent from './Components/Pages/BottomLineContent';
import Footer from './Components/Layouts/Footer';
function App() {
  return (
    <Router>
      <Fragment>
        <AppHeader />
        <CarouselBody />
        <HeadlineContent />
        <MidlineContent />
        <CenterLineContent />
        <BottomLineContent />
        <Footer />
        {/* <Switch>
          <Route path='/' component={HeadlineContent} exact></Route>
          <Route path='/demos' component={MidlineContent}></Route>
        </Switch> */}
      </Fragment>
    </Router>
  );
}

export default App;
