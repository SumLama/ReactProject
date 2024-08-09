import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="container">
      <div className='row justify-content-center mt-5'>
        <div className='col-6'>
          <h2>Welcome  to this page</h2>
          <p>You have successfully logged in.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;