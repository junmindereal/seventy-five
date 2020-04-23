import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import List from './components/List';

const App: React.FC = () => {
  const styles = {
    container: `
      container
      xl
      h-full
      mx-auto`,
    content: `
      content
      flex`,
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Menu />
        <List />
      </div>
    </div>
  );
};

export default App;
