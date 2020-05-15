import React, {useState} from 'react';
import Header from './components/header/Header';
import Menu from './components/Menu';
import List from './components/List';
import {getStudents} from './services/students';
import {app} from './styles/app';

const App: React.FC = () => {
  const [students] = useState(getStudents());
  return (
    <div className={app.container}>
      <Header />
      <div className={app.content}>
        <Menu />
        <List studentsInfo={students} />
      </div>
    </div>
  );
};

export default App;
