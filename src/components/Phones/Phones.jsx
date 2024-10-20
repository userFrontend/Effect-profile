import React from 'react'
import "./Phones.scss"

const Phones = () => {
  return (
    <div className='main-phone'>
        <article>
            <h1>
            Simplify scheduling by sending your availability
            </h1>
        </article>

        <section>
            <img className='phone1' src="/images/phone-kasting.png" alt="" width={600} height={880} />
            <img className='phone2' src="/images/phone-mehnat.png" alt="" height={850} />
            <img className='phone3' src="/images/phone-zamonaviy.png" alt="" />
        </section>
    </div>
  )
}

export default Phones