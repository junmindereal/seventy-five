import React, {useState} from 'react';
import Header from './components/header/Header';
import Menu from './components/Menu';
import List from './components/List';
import Search from './components/header/Search';
import AddStudent from './components/header/AddStudent';
import {getStudents} from './services/students';
import {app} from './styles/app';

const App: React.FC = () => {
  const [students] = useState(getStudents());
  return (
    <div className={app.container}>
      <Header>
        <Search />
        <AddStudent data={students} />
      </Header>
      <div className={app.content}>
        <Menu />
        <List data={students} />
      </div>
    </div>
  );
};

export default App;
