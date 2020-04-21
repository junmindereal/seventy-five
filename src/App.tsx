import React from 'react';
import logo from './assets/logo.svg';

function App() {
  const styles = {
    container: 'container xl mx-auto',
    logo: 'w-16',
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Seventy Five Logo" />
    </div>
  );
}

export default App;
