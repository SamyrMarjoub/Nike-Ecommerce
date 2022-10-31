import React, { useEffect } from 'react'
import { FaFacebook, FaFacebookMessenger, FaHashtag, FaHeart, FaInstagram, FaRegClock, FaRegHeart, FaSearch, FaShoppingBag, FaStar, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import bag from './images/bag.svg'
import adidasmain from './images/adidasmainimg.png'
import adidas from './images/adidaslogo.png'
import cart from './images/cart.svg'
import adidas1 from './images/adidas1.png'
import adidas2 from './images/adidas2.png'
import adidas3 from './images/adidas3.png'
import adidas4 from './images/adidas4.png'
import adidasg1 from './images/adidasg1.png'
import adidasg2 from './images/adidasg2.png'
import adidasg3 from './images/adidasg3.png'
import adidasg4 from './images/adidasg4.png'
import adidasg5 from './images/adidasg5.png'
import adidasg6 from './images/adidasg6.png'
import adidasg7 from './images/adidasg7.png'
import adidasg8 from './images/adidasg8.png'
import adidasg9 from './images/adidasg9.png'
import adidasg10 from './images/adidasg10.png'
import adidasg11 from './images/adidasg11.png'
import adidasg12 from './images/adidasg12.png'
import bigadidas2 from './images/bigadidas2.png'
import slider1 from './images/slider1.webp'
import slider2 from './images/slider2.webp'
import slider3 from './images/slider3.webp'
import slider4 from './images/slider4.webp'

// import { Swiper, SwiperSlide } from 'swiper/react'
const App = () => {

  useEffect(() => {
    const header = document.querySelector('header')
    const svg1 = document.querySelector('.searimg')
    const svg2 = document.querySelector('.corimg')
    const svg3 = document.querySelector('.bagimg')
    const adidaslogo = document.querySelector('.adidaslogo')
    const minidivb = document.querySelector('.minidivb')

    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        svg1.classList.remove('filtercolorw')
        svg2.classList.remove('filtercolorw')
        svg3.classList.remove('filtercolorw')
        minidivb.classList.remove('minidivwhite')
        minidivb.classList.add('minidivblack')
        svg1.classList.add('filtercolorb')
        svg2.classList.add('filtercolorb')
        svg3.classList.add('filtercolorb')
        adidaslogo.classList.add('filtercolorw')
        header.classList.add('bgwhitet')
        console.log('oi')
      } else {
        svg1.classList.remove('filtercolorb')
        svg2.classList.remove('filtercolorb')
        svg3.classList.remove('filtercolorb')
        minidivb.classList.remove('minidivblack')
        minidivb.classList.add('minidivwhite')
        svg1.classList.add('filtercolorw')
        svg2.classList.add('filtercolorw')
        svg3.classList.add('filtercolorw')
        adidaslogo.classList.remove('filtercolorw')
        header.classList.remove('bgwhitet')

        console.log('oai')
      }
    })

  }, [])
  return (
    <>
      <header>
        <div className='marginheader'>
          <div className='flexh'>
            <img src={adidas} className='adidaslogo ' />
          </div>
          <div className='flexh hf2'>
            <FaSearch className='searimg filtercolorw' />
            <FaRegHeart className='corimg filtercolorw' />
            <div className='bag'>
              <img src={bag} className='bagimg filtercolorw' />
              <div className='minidivb minidivwhite'>1</div>
              <div />
            </div>
          </div>
        </div>
      </header>
      <div className='clippath'>

        <div className='clippath2'>

        </div>
        <div className='maindiv'>
          <h1 className='titleh1'>Play With Electric Nike
            Adapt 2.0 Sneakers</h1>
          <button className='buttonexplore'>Explore Produts</button>
          <div className='containermain'>
            <div className='mf1'>
              <div className='im1'></div>
              <div className='im2'></div>
              <div className='im3'></div>

            </div>
            <div className='mf2'>
              <img src={adidasmain} className='imgadidasmain' />
            </div>
            <div className='mf3'>
              <FaFacebook className='iconssocial' />
              <FaFacebookMessenger className='iconssocial' />
              <FaInstagram className='iconssocial' />
              <FaTwitter className='iconssocial' />
              <FaYoutube className='iconssocial' e />
            </div>

          </div>
        </div>
      </div>
      <div className='seconddiv'>
        <div className='secondivmargin'>
          <h2 className='h2title'>
            Popular Sales

          </h2>
          <div className='popularsalesdiv'>
            <div className='gridpo gridpo1'>
              <div className='margingrid'>
                <h3>Nike Addapt BB 2.0</h3>
                <span className='subtitles'>MEN Running Shoes</span>
                <div className='inlinestatus'>
                  <div className='inlinestatus1'>$200</div>
                  <div className='inlinestatus2'>
                    <span><FaStar /> 4.9</span>
                  </div>

                </div>
                <div className='inlinestatustwo'>
                  <div className='divchart'>
                    <img src={cart} />
                  </div>
                  <div className='buttondivnow'> Buy Now </div>

                </div>
                <img src={adidas1} className='adidas1' />
              </div>

            </div>
            <div className='gridpo gridpo2'>
              <div className='margingrid'>
                <h3>Nike Martine Rose</h3>
                <span className='subtitles'>MEN Running Shoes</span>
                <div className='inlinestatus'>
                  <div className='inlinestatus1'>$200</div>
                  <div className='inlinestatus2'>
                    <span><FaStar /> 4.5</span>
                  </div>

                </div>
                <div className='inlinestatustwo'>
                  <div className='divchart'>
                    <img src={cart} />
                  </div>
                  <div className='buttondivnow'> Buy Now </div>

                </div>
                <img src={adidas2} className='adidas1' />
              </div>
            </div>
            <div className='gridpo gridpo3'>
              <div className='margingrid'>
                <h3>Nike Addapt BB 2.0</h3>
                <span className='subtitles'>Nike Smart Shoe 2.0</span>
                <div className='inlinestatus'>
                  <div className='inlinestatus1'>$200</div>
                  <div className='inlinestatus2'>
                    <span><FaStar /> 5</span>
                  </div>

                </div>
                <div className='inlinestatustwo'>
                  <div className='divchart'>
                    <img src={cart} />
                  </div>
                  <div className='buttondivnow'> Buy Now </div>

                </div>
                <img src={adidas3} className='adidas1' />
              </div>
            </div>

          </div>
          <div className='seconds'>
            <div className='second1'>
              <img src={adidas4} className='bigadidas2' />
            </div>
            <div className='second2'>
              <h3 className='h3title'>HIGHLIGHTS</h3>
              <span className='principaltitlespan'>NIKE AIR WITH LIMITLESS CHOICES</span>
              <p className='paragraphp'>Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.</p>
              <button className='buttonsecond'>Explore More</button>
            </div>

          </div>
          <div className='tercs'>
            <h2 className='h2title'>Top Rated Sales
            </h2>
            <div className='secondgriddiv'>

              <div className='secondgrid secondgrid1'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Low Premium</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg1} className='adidasgridimg'></img>
                </div>

              </div>
              <div className='secondgrid secondgrid2'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Force Green</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg2} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid3'>
                <div className='margin'>
                  <h3 className='sti'>Nike Addapt BB Rose</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg3} className='adidasgridimg g3'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid4'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Premium</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg4} className='adidasgridimg'></img>
                </div>
              </div>

              <div className='secondgrid secondgrid5'>
                <div className='margin'>
                  <h3 className='sti'>Nike Adapt BB Pro</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg5} className='adidasgridimg g3'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid6'>
                <div className='margin'>
                  <h3 className='sti'>Air Jordan PR3</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg6} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid7'>
                <div className='margin'>
                  <h3 className='sti'>Nike Multi Smart Shoe</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg7} className='adidasgridimg g7'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid8'>
                <div className='margin'>
                  <h3 className='sti'>Nike Jordan Air Max</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg8} className='adidasgridimg g3'></img>
                </div>
              </div>

              <div className='secondgrid secondgrid9'>
                <div className='margin'>
                  <h3 className='sti'>ike Old Max-x</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg9} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid10'>
                <div className='margin'>
                  <h3 className='sti'>Nike Lime Jordan 11</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg10} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid11'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Black Max</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg11} className='adidasgridimg g11'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid12'>
                <div className='margin'>
                  <h3 className='sti'>Nike Zoom Max</h3>
                  <span className='subtitles sbti'>Nike Smart Shoe 2.0</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} />
                    </div>
                    <div className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg12} className='adidasgridimg g12'></img>
                </div>
              </div>

            </div>
          </div>
          <div className='fourths'>
            <div className='w-30'>
              <h3 className='h3title'>FEATURED</h3>
              <span className='principaltitlespan'>NIKE SNEAKERS AIR LANCING SHOES</span>
              <p className='paragraphp'>The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
              <button className='buttonsecond'>Explore More</button>

            </div>
            <div className='w-70'>
              <img src={bigadidas2} />
            </div>
          </div>
          <div className='fives'>
            <span className='principaltitlespan'>Top Stories</span>

            <div className='containerslide'>
              <div className='gridslider'>
                <div className='gridimgsliderdiv'>
                  <img src={slider1} />
                  <div className='border100'>
                  
                  <div className='qdradoslider'>
                    <div className='headerqdslider'>
                      <div> <span><FaHeart className='redheart' /> 5/5</span> </div>
                      <div><span><FaRegClock/> 7 Months</span></div>
                      <div> <span><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                     
                    </div>
                  </div>
                  </div>

                </div>
              </div>
              <div className='gridslider'>
                <div className='gridimgsliderdiv'>
                  <img src={slider2} />
                  <div className='border100'>
                  
                  <div className='qdradoslider'>
                    <div className='headerqdslider'>
                      <div> <span><FaHeart className='redheart' /> 5/5</span> </div>
                      <div><span><FaRegClock/> 7 Months</span></div>
                      <div> <span><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                     
                    </div>
                  </div>
                  </div>

                </div>
              </div>
              <div className='gridslider'>
                <div className='gridimgsliderdiv'>
                  <img src={slider3} />
                  <div className='border100'>
                  
                  <div className='qdradoslider'>
                    <div className='headerqdslider'>
                      <div> <span><FaHeart className='redheart' /> 5/5</span> </div>
                      <div><span><FaRegClock/> 7 Months</span></div>
                      <div> <span><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                     
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className='gridslider'>
                <div className='gridimgsliderdiv'>
                  <img src={slider4} />
                  <div className='border100'>
                  
                  <div className='qdradoslider'>
                    <div className='headerqdslider'>
                      <div> <span><FaHeart className='redheart' /> 5/5</span> </div>
                      <div><span><FaRegClock/> 7 Months</span></div>
                      <div> <span><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                     
                    </div>
                  </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default App
