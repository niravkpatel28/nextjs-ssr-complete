//navigation component

import Link from 'next/link';
const Navigation =()=>{

    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {"   "}
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </nav>
    );
}

export default Navigation;