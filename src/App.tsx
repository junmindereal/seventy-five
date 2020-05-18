import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Menu from './components/Menu';
import List from './components/List';
import Search from './components/header/Search';
import AddStudent from './components/header/AddStudent';
import {getStudents} from './services/students';
import {StudentProps} from './types/index';
import {app} from './styles/app';

const App: React.FC = () => {
  const [students, setStudents] = useState<StudentProps[]>([]);

  useEffect(() => {
    const fetchStudents = (): void => {
      try {
        setStudents(getStudents());
      } catch (error) {
        throw new error(error);
      }
    };

    if (students.length === 0) {
      fetchStudents();
    }
  }, [students]);

  return (
    <div className={app.container}>
      <Header>
        <Search />
        <AddStudent students={students} setStudents={setStudents} />
      </Header>
      <div className={app.content}>
        <Menu />
        <List students={students} />
      </div>
    </div>
  );
};

export default App;
