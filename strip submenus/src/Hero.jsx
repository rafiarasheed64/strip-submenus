import React from 'react'
import { GlobalContext } from './Context'

const Hero = () => {
    const {closesubmenu} = GlobalContext()
  return (
    <>
    <section className='main' onMouseOver={closesubmenu}>
        <div className='submain'>
            <div className='content-div'>
                <h1>Payments infrastructure
                    for the internet</h1>
                    <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                    <button>Start Now</button>
            </div>
            <div className='img-div'>
                <img src="https://assets-global.website-files.com/5e7230c4549930001357ce5e/645e802313f16755622b75e8_Screen%20Shot%202023-05-12%20at%202.06.19%20PM.png" alt="" />
            </div>
        </div>

    </section>
    </>
  )
}

export default Hero