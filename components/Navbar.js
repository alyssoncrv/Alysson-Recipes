import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul className='nav'>
          <li><Link href="#">Home</Link></li>
          <li><Link href="src/pages/cookies.html">Cookies</Link></li>
          <li><Link href="src/pages/cinnamon-rolls.html">Cinnamon Rolls</Link></li>
          <li><Link href="src/pages/biscuits.html">Biscuits</Link></li>
          <li><Link href="src/pages/apple-crisp.html">Apple Crisp</Link></li>
          <li><Link href="src/pages/cakes.html">Cakes</Link></li>
          <li><Link href="src/pages/bread.html">Bread</Link></li>
          <li><Link href="src/pages/brownies.html">Brownies</Link></li>
          <li><Link href="src/pages/pretzels.html">Pretzels</Link></li>
          <li><Link href="src/pages/pies.html">Pies</Link></li>
        </ul>
    </div>
  )
}

export default Navbar