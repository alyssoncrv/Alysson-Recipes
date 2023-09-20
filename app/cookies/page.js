import Image from 'next/image'

const Cookies = () => {
  return (
    <div>

      <Image 
        className='bg-image'
        src="/cookies-03.jpg" 
        alt="Background Cookies" 
        width={1500}
        height={1000}
      />

      <div className='bg-white'>
        <section className='content-container'>
          <aside className='aside'>
            <h1>Cookies</h1>
            <p>Do not forget to wash your hands before you start.</p><br /><br />
            <p>​Good luck!</p>
          </aside>

          <section className='content-items'>

            <div className='content'>
              <h2>Chocolate Candy Cookie Cups</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Snowmen Cookies</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Chocolate Chip-Pretzel Cookies </h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Rainbow Cookies</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Chocolate Chip Cookies</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

          </section>
        </section>
      </div>

    </div>
  )
}

export default Cookies