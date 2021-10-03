import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import Slider from '../../Slider/Slider';
import Section from '../../Section/Section';
import SectionPage from '../../Section/SectionPage/SectionPage';

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Slider />

      <Switch>
        <Route exact path='/'> <Main /> </Route>

        <Route exact path='/administration'> <Section title='Административные процедуры' /> </Route>
        <Route path='/administration/page1'> <SectionPage title='Страница 1' /> </Route>
        <Route path='/administration/page2'> <SectionPage title='Страница 2' /> </Route>
        <Route path='/administration/page3'> <SectionPage title='Страница 3' /> </Route>
        <Route path='/administration/page4'> <SectionPage title='Страница 4' /> </Route>

        <Route exact path='/management'> <Section title='Руководство' /> </Route>
        <Route path='/management/page1'> <SectionPage title='Страница 1' /> </Route>
        <Route path='/management/page2'> <SectionPage title='Страница 2' /> </Route>
        <Route path='/management/page3'> <SectionPage title='Страница 3' /> </Route>
        <Route path='/management/page4'> <SectionPage title='Страница 4' /> </Route>

        <Route exact path='/schedule'> <Section title='График приёма' /> </Route>
        <Route path='/schedule/page1'> <SectionPage title='Страница 1' /> </Route>
        <Route path='/schedule/page2'> <SectionPage title='Страница 2' /> </Route>
        <Route path='/schedule/page3'> <SectionPage title='Страница 3' /> </Route>
        <Route path='/schedule/page4'> <SectionPage title='Страница 4' /> </Route>

        <Route exact path='/structure'> <Section title='Структура' /> </Route>
        <Route path='/structure/page1'> <SectionPage title='Страница 1' /> </Route>
        <Route path='/structure/page2'> <SectionPage title='Страница 2' /> </Route>
        <Route path='/structure/page3'> <SectionPage title='Страница 3' /> </Route>
        <Route path='/structure/page4'> <SectionPage title='Страница 4' /> </Route>

        <Redirect to='/' />
      </Switch>

      <Footer />
    </div>
  </Router>
);

export default App;
