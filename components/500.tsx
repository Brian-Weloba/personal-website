// pages/500.tsx
import Link from 'next/link';

const Custom500 = () => {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>Oops! Something went wrong on the server.</p>
      <Link href="/">
        <a>Return to Homepage</a>
      </Link>
    </div>
  );
};

export default Custom500;
