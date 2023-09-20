import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul className='nav'>
          
          <li>
            <Link 
              className='nav-item'
              href="/">
                Home
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="cookies">
                Cookies
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="cinnamon-rolls">
                Cinnamon Rolls
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="biscuits">
                Biscuits
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="apple-crisp">
                Apple Crisp
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="cakes">
                Cakes
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="bread">
                Bread
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="brownies">
                Brownies
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="pretzels">
                Pretzels
            </Link>
          </li>
          
          <li>
            <Link 
              className='nav-item'
              href="pies">
                Pies
            </Link>
          </li>
          
        </ul>
    </div>
  )
}

export default Navbar