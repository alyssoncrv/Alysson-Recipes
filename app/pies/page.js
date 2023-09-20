import Image from 'next/image'

const Pies = () => {
  return (
    <div>

      <Image 
        className='bg-image'
        src="/pies.jpg" 
        alt="Background Cookies" 
        width={1500}
        height={1000}
      />

      <div className='bg-white'>
        <section className='content-container'>
          <aside className='aside'>
            <h1>Pies</h1>
            <p>Do not forget to wash your hands before you start.</p><br /><br />
            <p>​Good luck!</p>
          </aside>

          <section className='content-items'>

            <div className='content'>
              <h2>Double Chocolate Pie</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Chocolate Eclair Dessert</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Banana Cream Pie</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Strawberry Pie</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Blueberry Pie</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

          </section>
        </section>
      </div>

    </div>
  )
}

export default Pies