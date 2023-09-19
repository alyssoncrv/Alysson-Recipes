import Image from 'next/image'

const Welcome = () => {
  return (
    <section class="welcome-container">

      <div class="welcome">
        <h1>Welcome</h1>
        <p>Your best cooking guide</p>
      </div>

      <Image 
      className='bg-image'
      src="/main-bg.jpg" 
      alt="Background Image" 
      layout="fill"
      objectFit='cover'
      />

    </section>    
  )
}

export default Welcome