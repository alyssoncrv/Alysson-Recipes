import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <main className='items-container'>

      <div className="items">

          <Link href="/">
            <Image
              className="items-image"
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-02.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-03.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

          <Link href="/">
            <Image
              className="items-image" 
              src='/cookies-01.jpg'
              alt='Cookies'
              width={420}
              height={420}
            />
          </Link>

      </div>
    </main>
  )
}

export default Main