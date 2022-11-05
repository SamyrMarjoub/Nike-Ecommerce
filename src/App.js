import React, { createElement, useEffect, useState } from 'react'
import { FaFacebook, FaFacebookMessenger, FaHashtag, FaHeart, FaInstagram, FaRegClock, FaRegHeart, FaSearch, FaShoppingBag, FaStar, FaTrash, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
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
import slider5 from './images/slider5.webp'
import slider6 from './images/slider6.webp'
import slider7 from './images/slider7.webp'
import slider8 from './images/slider8.jpg'
import slider9 from './images/slider9.jpg'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import close from './images/close.svg'
import mochilavazia from './images/mochilavazia.png'


const App = () => {

  const [settings, setTings] = useState(
    {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  )
  const [state, setState] = useState(
    {
      display: true,
      width: 600
    }
  )
  const [qtd, setQtd] = useState(0)
  const [ida, setIda] = useState(1000)
  const [id1, setid1] = useState(false)
  const [id2, setid2] = useState(false)
  const [id3, setid3] = useState(false)
  const [id4, setid4] = useState(false)
  const [id5, setid5] = useState(false)
  const [id6, setid6] = useState(false)
  const [id7, setid7] = useState(false)
  const [id8, setid8] = useState(false)
  const [id9, setid9] = useState(false)
  const [id10, setid10] = useState(false)
  const [id11, setid11] = useState(false)
  const [id12, setid12] = useState(false)
  const [id13, setid13] = useState(false)
  const [id14, setid14] = useState(false)
  const [id15, setid15] = useState(false)

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
        // console.log('oi')
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

        // console.log('oai')
      }
    })


  }, [])

  function comprar(e) {
    const id = e.target.id
    alert(id)
  }
  function abrircarrinho() {
    const whsc = document.querySelector('.whitescreenop')
    const carr = document.querySelector('.carrinhodecompra')
    whsc.classList.remove('none', 'closeAnimation2')
    whsc.classList.add('show')
    carr.classList.remove('none')
    carr.classList.add('showC')

  }
  function fecharcarrinho() {
    const whsc = document.querySelector('.whitescreenop')
    const carr = document.querySelector('.carrinhodecompra')
    whsc.classList.add('closeAnimation2')
    whsc.classList.remove('show')
    carr.classList.toggle('none')
    setTimeout(() => {
      whsc.classList.toggle('none')
    }, 200)

  }
  useEffect(() => {

  }, [ida])
  function adccarrinho(e) {
    const id = e.target.id

    setIda(ida + 1)
    setQtd(qtd + 1)


    const container = document.querySelector('.containersucess')
    const sucessdiv = document.createElement('div')
    const div2 = document.createElement('div')
    const spanmsg = document.createElement('span')
    spanmsg.classList.add('spanmsgi')
    spanmsg.innerHTML = 'item adicionado com sucesso!'
    div2.classList.add('success-animation')
    sucessdiv.classList.add('avisosucesso', "flex")
    sucessdiv.id = ida
    if (id === 'c1' && id1) {
      return
    }else{
      
    }
    const divmaincarrinho = document.querySelector('.divmaincarrinho')
    divmaincarrinho.classList.add('divmaincarrinhostart')
    const divitemc = document.createElement('div')
    divitemc.classList.add('divitemc')
    const topdivi = document.createElement('div')
    topdivi.classList.add('topdivi')
    const imgitem = document.createElement('div')
    imgitem.classList.add('imgitem')
    imgitem.classList.add(id === 'c1' ? 'gid1' : id === 'c2'
      ? 'gid2' : id === 'c3' ? 'gid3' : id === 'c4' ?
        'gid4' : id === 'c5' ? 'gid5' : id === 'c6' ?
          'gid6' : id === 'c7' ? 'gid7' : id === 'c8' ?
            'gid8' : id === 'c9' ? 'gid9' : id === 'c10' ?
              'gid10' : id === 'c11' ? 'gid11' : id === 'c12'
                ? 'gid12' : id === 'c13' ? 'gid13' : id === 'c14'
                  ? 'gid14' : 'gid15'
    )

    const imggerada = document.createElement('img')
    imggerada.classList.add('imgitemi')
    const flexcti = document.createElement('div')
    flexcti.classList.add('flexcti')
    const flexcti_50 = document.createElement('div')
    flexcti_50.classList.add('flexcti-50', 'fp1')
    const titlespanfc = document.createElement('span')
    titlespanfc.classList.add('titlspanfc')
    const subtitlespanfc = document.createElement('span')
    subtitlespanfc.classList.add('subtitlespanfc')
    const addorlessdiv = document.createElement('div')
    addorlessdiv.classList.add('addorlessdiv')
    const flexcti_502 = document.createElement('div')
    const spanvalor = document.createElement('span')
    spanvalor.classList.add('spanmsgi')
    flexcti_502.classList.add('flexcti-50', 'fp2')
    const m_70 = document.createElement('div')
    m_70.classList.add('m-70')
    const containersvgmorerless1 = document.createElement('div')
    containersvgmorerless1.classList.add('containersvgmorerless')
    const containersvgmorerless2 = document.createElement('div')
    containersvgmorerless2.classList.add('containersvgmorerless')
    const spancontainer2 = document.createElement('span')
    containersvgmorerless2.appendChild(spancontainer2)
    const span2 = document.createElement('span')
    const containersvgmorerless3 = document.createElement('div')
    containersvgmorerless3.classList.add('containersvgmorerless')
    const m_30 = document.createElement('div')
    m_30.classList.add('m-30')
    const divm_30 = document.createElement('div')
    divm_30.classList.add('divm-30')
    imggerada.src = id === 'c1' ? adidas1 : id === 'c2'
      ? adidas2 : id === 'c3' ? adidas3 : id === 'c4' ?
        adidasg1 : id === 'c5' ? adidasg2 : id === 'c6' ?
          adidasg3 : id === 'c7' ? adidasg4 : id === 'c8' ?
            adidasg5 : id === 'c9' ? adidasg6 : id === 'c10' ?
              adidasg7 : id === 'c11' ? adidasg8 : id === 'c12' ?
                adidasg9 : id === 'c13' ? adidasg10 : id === 'c14' ?
                  adidasg11 : adidasg12

    // console.log(id)
    addorlessdiv.innerHTML = '$150'
    containersvgmorerless1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path></svg>'
    containersvgmorerless3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>'
    containersvgmorerless1.id = id === 'c1' ? 'c-1' : id === 'c2'
      ? 'c-2' : id === 'c3' ? 'c-3' : id === 'c4' ?
        'c-4' : id === 'c5' ? 'c-5' : id === 'c6' ?
          'c-6' : id === 'c7' ? 'c-7' : id === 'c8' ?
            'c-8' : id === 'c9' ? 'c-9' : id === 'c10' ?
              'c-10' : id === 'c11' ? 'c-11' : id === 'c12' ?
                'c-12' : id === 'c13' ? 'c-13' : id === 'c14' ?
                  'c-14' : 'c-15'

    containersvgmorerless3.id = id === 'c1' ? 'c+1' : id === 'c2'
      ? 'c+2' : id === 'c3' ? 'c+3' : id === 'c4' ?
        'c+4' : id === 'c5' ? 'c+5' : id === 'c6' ?
          'c+6' : id === 'c7' ? 'c+7' : id === 'c8' ?
            'c+8' : id === 'c9' ? 'c+9' : id === 'c10' ?
              'c+10' : id === 'c11' ? 'c+11' : id === 'c12' ?
                'c+12' : id === 'c13' ? 'c+13' : id === 'c14' ?
                  'c+14' : 'c+15'

    containersvgmorerless1.addEventListener('click', (e) => {
      console.log(e.currentTarget.id)

    })
    titlespanfc.innerHTML = id === 'c1' ? 'Nike Addapt BB 2.0' : id === 'c2'
      ? 'Nike Martine Rose' : id === 'c3' ? 'Nike Smart Shoe 2.0' : id === 'c4' ?
        'Nike Air Low Premium' : id === 'c5' ? 'Nike Air Force Green' : id === 'c6' ?
          'Nike Addapt BB Rose' : id === 'c7' ? 'Nike Air Premium' : id === 'c8' ?
            'Nike Adapt BB Pro' : id === 'c9' ? 'Air Jordan PR3' : id === 'c10' ?
              'Nike Multi Smart Shoe' : id === 'c11' ? 'Nike Jordan Air Max' : id === 'c12' ?
                'Nike Old Max-x' : id === 'c13' ? 'Nike Lime Jordan 11' : id === 'c14' ?
                  'Nike Air Black Max' : 'Nike Zoom Max'

    subtitlespanfc.innerHTML = 'MEN Running Shoes'
    spancontainer2.innerHTML = '1'
    divm_30.classList.add('cc')
    divm_30.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>'
    divmaincarrinho.appendChild(divitemc)
    divitemc.appendChild(topdivi)
    topdivi.appendChild(imgitem)
    topdivi.appendChild(flexcti)
    imgitem.appendChild(imggerada)
    flexcti.appendChild(flexcti_50)
    flexcti.appendChild(flexcti_502)
    flexcti_50.appendChild(titlespanfc)
    flexcti_50.appendChild(subtitlespanfc)
    flexcti_50.appendChild(addorlessdiv)
    flexcti_502.appendChild(m_70)
    flexcti_502.appendChild(m_30)
    m_70.appendChild(containersvgmorerless1)
    m_70.appendChild(containersvgmorerless2)
    m_70.appendChild(containersvgmorerless3)
    containersvgmorerless1.appendChild(span2)
    m_30.appendChild(divm_30)

    container.appendChild(sucessdiv)
    sucessdiv.appendChild(div2)
    sucessdiv.appendChild(spanmsg)
    div2.innerHTML = '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>'

    setTimeout(() => {
      sucessdiv.classList.add('endsucessboxa')
    }, 2000)
    setTimeout(() => {
      sucessdiv.remove()
    }, 2150)
    console.log(id)
    if (id === 'c1') {
      setid1(true)
    } else if ('c2') {
      setid2(true)
    } else if ('c3') {
      setid3(true)
    } else if ('c4') {
      setid4(true)
    } else if ('c5') {
      setid5(true)
    } else if ('c6') {
      setid6(true)
    } else if ('c7') {
      setid7(true)
    } else if ('c8') {
      setid8(true)
    } else if ('c9') {
      setid9(true)
    } else if ('c10') {
      setid10(true)
    } else if ('c11') {
      setid11(true)
    } else if ('c12') {
      setid12(true)
    } else if ('c13') {
      setid13(true)
    } else if ('c14') {
      setid14(true)
    } else if ('c15') {
      setid15(true)
    }
  }
  return (
    <>
      <div className='whitescreenop none'></div>
      <div className='carrinhodecompra none'>
        <div className='divheadercarrinho'>
          <div className='divheadercarrinho1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2] bladeimg"><path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg>
            <span className='yourcartspan'>Your Cart</span>
            <div className='itensdiv'>
              <span className='itensspanleft'>({qtd} itens)</span>
            </div>
          </div>
          <div className='divheadercarrinho2'>
            <div className='fechardiv'>
              <img className='defaultsvg' onClick={fecharcarrinho} src={close} />
            </div>
          </div>
        </div>
        <div className='divmaincarrinho'>
          {qtd === 0 ? <>
            <img className='mochilaimg' src={mochilavazia} />
            <button className='buttonvazio' onClick={fecharcarrinho}>  <FaArrowLeft />  Back To Nike Store</button>

          </> : <>


          </>
          }
        </div>

      </div>
      <div className='containersucess'>

      </div>

      <header>
        <div className='marginheader'>
          <div className='flexh'>
            <img src={adidas} className='adidaslogo ' />
          </div>
          <div className='flexh hf2'>
            <FaSearch className='searimg filtercolorw' />
            <FaRegHeart className='corimg filtercolorw' />
            <div className='bag'>
              <img src={bag} className='bagimg filtercolorw' onClick={abrircarrinho} />
              <div className='minidivb minidivwhite'>{qtd}</div>

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
              <FaYoutube className='iconssocial' />
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
                    <img src={cart} className='carts' id='c1' onClick={adccarrinho} />
                  </div>
                  <div id='1' onClick={comprar} className='buttondivnow'> Buy Now </div>

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
                    <img src={cart} className='carts' id='c2' onClick={adccarrinho} />
                  </div>
                  <div id='2' onClick={comprar} className='buttondivnow'> Buy Now </div>

                </div>
                <img src={adidas2} className='adidas1' />
              </div>
            </div>
            <div className='gridpo gridpo3'>
              <div className='margingrid'>
                <h3>Nike Addapt BB 2.0</h3>
                <span className='subtitles'>MEN Running Shoes</span>
                <div className='inlinestatus'>
                  <div className='inlinestatus1'>$200</div>
                  <div className='inlinestatus2'>
                    <span><FaStar /> 5</span>
                  </div>

                </div>
                <div className='inlinestatustwo'>
                  <div className='divchart'>
                    <img src={cart} className='carts' id='c3' onClick={adccarrinho} />
                  </div>
                  <div id='3' onClick={comprar} className='buttondivnow'> Buy Now </div>

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
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c4' onClick={adccarrinho} />
                    </div>
                    <div id='4' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg1} className='adidasgridimg'></img>
                </div>

              </div>
              <div className='secondgrid secondgrid2'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Force Green</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c5' onClick={adccarrinho} />
                    </div>
                    <div id='5' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg2} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid3'>
                <div className='margin'>
                  <h3 className='sti'>Nike Addapt BB Rose</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c6' onClick={adccarrinho} />
                    </div>
                    <div id='6' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg3} className='adidasgridimg g3'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid4'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Premium</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c7' onClick={adccarrinho} />
                    </div>
                    <div id='7' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg4} className='adidasgridimg'></img>
                </div>
              </div>

              <div className='secondgrid secondgrid5'>
                <div className='margin'>
                  <h3 className='sti'>Nike Adapt BB Pro</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c8' onClick={adccarrinho} />
                    </div>
                    <div id='8' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg5} className='adidasgridimg g3'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid6'>
                <div className='margin'>
                  <h3 className='sti'>Air Jordan PR3</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c9' onClick={adccarrinho} />
                    </div>
                    <div id='9' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg6} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid7'>
                <div className='margin'>
                  <h3 className='sti'>Nike Multi Smart Shoe</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c10' onClick={adccarrinho} />
                    </div>
                    <div id='10' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg7} className='adidasgridimg g7'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid8'>
                <div className='margin'>
                  <h3 className='sti'>Nike Jordan Air Max</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c11' onClick={adccarrinho} />
                    </div>
                    <div id='11' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg8} className='adidasgridimg g3'></img>
                </div>
              </div>

              <div className='secondgrid secondgrid9'>
                <div className='margin'>
                  <h3 className='sti'>ike Old Max-x</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c12' onClick={adccarrinho} />
                    </div>
                    <div id='12' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg9} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid10'>
                <div className='margin'>
                  <h3 className='sti'>Nike Lime Jordan 11</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c13' onClick={adccarrinho} />
                    </div>
                    <div id='13' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg10} className='adidasgridimg'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid11'>
                <div className='margin'>
                  <h3 className='sti'>Nike Air Black Max</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c14' onClick={adccarrinho} />
                    </div>
                    <div id='14' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

                  </div>
                  <img src={adidasg11} className='adidasgridimg g11'></img>
                </div>
              </div>
              <div className='secondgrid secondgrid12'>
                <div className='margin'>
                  <h3 className='sti'>Nike Zoom Max</h3>
                  <span className='subtitles sbti'>MEN Running Shoes</span>
                  <div className='inlinestatus'>
                    <div className='inlinestatus1'>$150</div>
                    <div className='inlinestatus2'>
                      <span><FaStar /> 5+</span>
                    </div>
                  </div>
                  <div className='inlinestatustwo justify-center'>
                    <div className='divchart'>
                      <img src={cart} className='carts' id='c15' onClick={adccarrinho} />
                    </div>
                    <div id='15' onClick={comprar} className='buttondivnow wdg'> Buy Now </div>

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
            {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={esquerda} className='arrowleft' viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg> */}

            <span className='principaltitlespan'>Top Stories</span>

            <div className='containerslide'>

              <Slider {...settings}>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider1} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 5/5</span> </div>
                          <div><span><FaRegClock className='clockimg' /> 11 Mins</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Air Jordan Retro High OG</span>
                          <p className='paragraphgrids'>Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myer...</p>
                          <button className='readmoregridbutton'>Read More</button>
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
                          <div> <span><FaHeart className='redheart' /> 3/5</span> </div>
                          <div><span><FaRegClock className='clockimg' /> 41 Minutes</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Zoom GT Cut 2</span>
                          <p className='paragraphgrids'>The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th rele...</p>
                          <button className='readmoregridbutton'>Read More</button>

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
                          <div> <span><FaHeart className='redheart' /> 3/5</span> </div>
                          <div><span><FaRegClock className='clockimg' /> 2 Hours</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>


                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Puma Announces Breanna</span>
                          <p className='paragraphgrids'>For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm...</p>
                          <button className='readmoregridbutton'>Read More</button>

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
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider5} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider6} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider7} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider8} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className='gridslider'>
                  <div className='gridimgsliderdiv'>
                    <img src={slider9} />
                    <div className='border100'>

                      <div className='qdradoslider'>
                        <div className='headerqdslider'>
                          <div> <span><FaHeart className='redheart' /> 4/5</span> </div>
                          <div><span className='clock'><FaRegClock className='clockimg' /> 7 Months</span></div>
                          <div> <span className='spanhash'><FaHashtag className='hashtag' /> Sneaker News </span> </div>

                        </div>
                        <div className='bodyqdslider'>
                          <span className='titleqgrids'>Nike Air Force Orange Color</span>
                          <p className='paragraphgrids'>From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few ...</p>
                          <button className='readmoregridbutton'>Read More</button>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </Slider>

            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={direita} className='arrowright' viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg> */}

          </div>

        </div>
        <div className='sixs'>
          <footer>
            <div className='f-80'>
              <ul>
                <li className='toplistl'>ABOUT NIKE</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Prupose</li>
                <li>Sustainability</li>

              </ul>
              <ul>
                <li className='toplistl'>GET HELP</li>
                <li>Order Status</li>
                <li>Shipping & Delivery</li>
                <li>Payment Options</li>
                <li>Gift Card Balance</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Blog</li>

              </ul>

              <ul>
                <li className='toplistl'>COMPANY</li>
                <li>Gift Cards</li>
                <li>Promotions</li>
                <li>Find A Store</li>
                <li>Signup</li>
                <li>Nike Jouneral</li>
                <li>Send Us Feeback</li>


              </ul>
            </div>
            <div className='f-20'>
              <span className='footer-last-text'>Copyright© All Reserved Rights JSSTACK DEVELOPERS 2022</span>
            </div>

          </footer>
        </div>
      </div>

    </>

  )
}

export default App
