import Image from 'next/image'

const Apple_Crisp = () => {
  return (
    <div>

      <Image 
        className='bg-image'
        src="/apple-crisp.jpg" 
        alt="Background Cookies" 
        width={1500}
        height={1000}
      />

      <div className='bg-white'>
        <section className='content-container'>
          <aside className='aside'>
            <h1>Apple Crisp</h1>
            <p>Do not forget to wash your hands before you start.</p><br /><br />
            <p>​Good luck!</p>
          </aside>

          <section className='content-items'>

            <div className='content'>
              <h2>Apple Crisp Ice Cream</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

            <div className='content'>
              <h2>Apple Crisp</h2>
              <p>3/24/2017</p>
              <button>Read more</button>
            </div>

          </section>
        </section>
      </div>

    </div>
  )
}

export default Apple_Crisp