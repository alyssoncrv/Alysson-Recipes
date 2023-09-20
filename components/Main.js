import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <main className='items-container'>

      <div className="items">

          <Link href="cookies">
            <Image
              className="items-image"
              src='/cookies.jpg'
              alt='Cookies'
              width={300}
              height={300}
            />
          </Link>

          <Link href="cinnamon-rolls">
            <Image
              className="items-image" 
              src='/cinnamon-rolls.jpg'
              alt='Cinnamon Rolls'
              width={300}
              height={300}
            />
          </Link>

          <Link href="biscuits">
            <Image
              className="items-image" 
              src='/biscuits.jpg'
              alt='Biscuits'
              width={300}
              height={300}
            />
          </Link>

          <Link href="apple-crisp">
            <Image
              className="items-image" 
              src='/apple-crisp.jpg'
              alt='Apple Crisp'
              width={300}
              height={300}
            />
          </Link>

          <Link href="cakes">
            <Image
              className="items-image" 
              src='/cakes.jpg'
              alt='Cakes'
              width={300}
              height={300}
            />
          </Link>

          <Link href="bread">
            <Image
              className="items-image" 
              src='/bread.jpg'
              alt='Bread'
              width={300}
              height={300}
            />
          </Link>

          <Link href="brownies">
            <Image
              className="items-image" 
              src='/brownies.jpg'
              alt='Brownies'
              width={300}
              height={300}
            />
          </Link>

          <Link href="pretzels">
            <Image
              className="items-image" 
              src='/pretzels.jpg'
              alt='Pretzels'
              width={300}
              height={300}
            />
          </Link>

          <Link href="pies">
            <Image
              className="items-image" 
              src='/pies.jpg'
              alt='Pies'
              width={300}
              height={300}
            />
          </Link>

      </div>
    </main>
  )
}

export default Main