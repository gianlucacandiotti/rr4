import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>Hello World</div>
  );
};

App.displayName = 'App';

App.propTypes = {
  className: PropTypes.string,
};

export default App;
