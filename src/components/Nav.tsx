import Link from 'next/link';

const Nav = () => {
 return (
<nav className="bg-[#ecf3f8] mb-1.5 flex">
  <Link href="/" className="text-white bg-[#316e93] hover:bg-[#1f455c] px-4 py-2 flex items-center h-full">
    Home
  </Link>
  <Link href="/car/new" className="text-white bg-[#316e93] hover:bg-[#1f455c] px-4 py-2 flex items-center h-full ml-0.5">
    Add a new car
  </Link>
</nav>


 )


}

export default Nav;