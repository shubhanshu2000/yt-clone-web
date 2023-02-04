import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/not-found">Not Found</Link>
    </>
  );
}

export default Home;
