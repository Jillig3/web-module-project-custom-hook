import React, { useState } from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };

//   const [values, setValues] = useState(() => {
//     if (localStorage.getItem(key)) {
//       return(JSON.parse(localStorage.getItem(key)));
//     } else {
//       localStorage.setItem(props, JSON.stringify(initialValues));
//       return(initialValues);
//     }
//   });
//   const setStoredValues = (values) => {
//     localStorage.setItem(key, JSON.stringify(values));
//     setValues(values);
// }

  return  (
    
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
