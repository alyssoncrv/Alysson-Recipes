import Image from 'next/image'

const Cakes = () => {
  return (
    <div>

      <Image 
        className='bg-image'
        src="/cakes.jpg" 
        alt="Background Cookies" 
        width={1500}
        height={1000}
      />

      <div className='bg-white'>
        <section className='content-container'>
          <aside className='aside'>
            <h1>Cakes</h1>
            <p>Do not forget to wash your hands before you start.</p><br /><br />
            <p>​Good luck!</p>
          </aside>

          <section className='content-items'>

            <div className='content'>
              <h2>Potluck Banana Cake</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>White Almond Wedding Cake</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Lemon Buttermilk Pound Cake</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Chocolate Lava Muffins</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Chocolate Fudge Cupcake</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

          </section>
        </section>
      </div>

    </div>
  )
}

export default Cakes