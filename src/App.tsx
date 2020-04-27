import React, {useState} from 'react';
import Header from './components/header/Header';
import Menu from './components/Menu';
import List from './components/List';
import {getStudents} from './services/students';
import {styles} from './styles/app';

const App: React.FC = () => {
  const [students] = useState(getStudents());
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Menu />
        <List studentsInfo={students} />
      </div>
    </div>
  );
};

export default App;
