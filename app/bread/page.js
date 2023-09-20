import Image from 'next/image'

const Bread = () => {
  return (
    <div>

      <Image 
        className='bg-image'
        src="/bread.jpg" 
        alt="Background Cookies" 
        width={1500}
        height={1000}
      />

      <div className='bg-white'>
        <section className='content-container'>
          <aside className='aside'>
            <h1>Bread</h1>
            <p>Do not forget to wash your hands before you start.</p><br /><br />
            <p>​Good luck!</p>
          </aside>

          <section className='content-items'>

            <div className='content'>
              <h2>Strawberry Bread</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Blueberry Bread</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Apple Bread</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Lemon Bread</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Banana Bread</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

          </section>
        </section>
      </div>

    </div>
  )
}

export default Bread