import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.scss';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import Slider from '../../Slider/Slider';
import Section from '../../Section/Section';
import SectionPage from '../../Section/SectionPage/SectionPage';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div className='app'>
        <Header />
        <Slider />

        <Switch>
          <Route exact path='/'> <Main /> </Route>

          <Route exact path='/administration'> <Section title={t('section_title_Administration')} /> </Route>
          <Route path='/administration/page1'> <SectionPage title={`${t('section_page_title')} 1`} /> </Route>
          <Route path='/administration/page2'> <SectionPage title={`${t('section_page_title')} 2`} /> </Route>
          <Route path='/administration/page3'> <SectionPage title={`${t('section_page_title')} 3`} /> </Route>
          <Route path='/administration/page4'> <SectionPage title={`${t('section_page_title')} 4`} /> </Route>

          <Route exact path='/management'> <Section title={t('section_title_Management')} /> </Route>
          <Route path='/management/page1'> <SectionPage title={`${t('section_page_title')} 1`} /> </Route>
          <Route path='/management/page2'> <SectionPage title={`${t('section_page_title')} 2`} /> </Route>
          <Route path='/management/page3'> <SectionPage title={`${t('section_page_title')} 3`} /> </Route>
          <Route path='/management/page4'> <SectionPage title={`${t('section_page_title')} 4`} /> </Route>

          <Route exact path='/schedule'> <Section title={t('section_title_Schedule')} /> </Route>
          <Route path='/schedule/page1'> <SectionPage title={`${t('section_page_title')} 1`} /> </Route>
          <Route path='/schedule/page2'> <SectionPage title={`${t('section_page_title')} 2`} /> </Route>
          <Route path='/schedule/page3'> <SectionPage title={`${t('section_page_title')} 3`} /> </Route>
          <Route path='/schedule/page4'> <SectionPage title={`${t('section_page_title')} 4`} /> </Route>

          <Route exact path='/structure'> <Section title={t('section_title_Structure')} /> </Route>
          <Route path='/structure/page1'> <SectionPage title={`${t('section_page_title')} 1`} /> </Route>
          <Route path='/structure/page2'> <SectionPage title={`${t('section_page_title')} 2`} /> </Route>
          <Route path='/structure/page3'> <SectionPage title={`${t('section_page_title')} 3`} /> </Route>
          <Route path='/structure/page4'> <SectionPage title={`${t('section_page_title')} 4`} /> </Route>

          <Redirect to='/' />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
