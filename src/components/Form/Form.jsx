import { useState } from 'react';

export default function Form(props) {
  const [username, setUsername] = useState('');

  const { setCurrentUser } = props;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(username);
    setUsername('');
  }

  return (
    <>
      <div className="col-8 text-center mx-auto my-5">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor='username'>Github Username</label>
            <input id='username' placeholder='octocat' type='text' className="form-control" value={username} onChange={handleUsernameChange} />
          </div>
          <input type='submit' className='btn btn-success form-control' />
        </form>
      </div>
    </>
  );
}