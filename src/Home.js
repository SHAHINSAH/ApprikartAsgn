import React, { useState } from 'react'
import Crousel from './Crousel'
import Size from './Size';
import "./Home.css"

function Home() {
  const [isture, setIsTrue] = useState(true)

  const whiteimages = [
    'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/w/1/-original-imagg5u29jpnvfcg.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/5/9/b/339934-13-puma-white-white-original-imafzfgfqkqctrva.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/b/i/x/339934-13-puma-white-white-original-imafzfgf2wgaajgq.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/u/6/w/339934-13-puma-white-white-original-imafzfgfs2z3qste.jpeg?q=70',

  ];
  const blackimages = [
    'https://rukminim2.flixcart.com/image/832/832/l4ei1e80/shoe/2/y/p/-original-imagfb9zf6vgkvc4.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/s/j/m/339934-12-puma-black-black-original-imafzfgfs6wb7gzp.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/w/b/t/339934-12-puma-black-black-original-imafzfgfgpjackee.jpeg?q=70',
    'https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/6/m/h/339934-12-puma-black-black-original-imafzfgfzt2arzzg.jpeg?q=70'
  ];


  return (
    <div className='Home'>

      <div className='CouselSec'>
        <Crousel
          images={isture ? whiteimages : blackimages}
        />
      </div>
      <div className='DetailsSec'>
        <div className='HeadingSec'>
          <h2>POWER</h2>
          <h3>POWER BLUE SNEAKER<br />FOR MEN</h3>
          <h4>&#8377; 1,125.00</h4>
          <p>MRP <span>&#8377; 2499.00</span><strong> -50%</strong></p>
        </div>

        <div className='ColorSec'>
          <div className='ColorChose'>
            <h5>WHITE</h5>
            <h5>BLACK</h5>
          </div>
          <div className='ColorImage'>
            <img src='https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/5/9/b/339934-13-puma-white-white-original-imafzfgfqkqctrva.jpeg?q=70' alt=''
              className={isture ? "activecol" : "unactivecol"}
              onClick={() => setIsTrue(true)}
            />
            <img src='https://rukminim2.flixcart.com/image/128/128/kjhgzgw0-0/shoe/w/b/t/339934-12-puma-black-black-original-imafzfgfgpjackee.jpeg?q=70' alt=''
              className={isture ? "unactivecol" : "activecol"}
              onClick={() => setIsTrue(false)}
            />
          </div>
        </div>
        <Size />
        <div className='buttonSec'>
          <p>In Stock</p>
          <button>ADD TO BAG</button>
        </div>
      </div>
    </div>
  )
}

export default Home