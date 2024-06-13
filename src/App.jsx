import './App.css';
import logo from './images/logo.svg';
import bruceLee from './images/bruselee.svg';
import iconsNav from './images/icons.svg';
import avatarHero from './images/avatar.svg';

import firstArticles from './images/card1.png'
import fisrtAvatarka from './images/card1avatarka.svg';

import secondArticles from './images/card2.png'
import secondAvatarka from './images/card2avatarka.svg';

import thirdArticles from './images/card3.png'
import thirdAvatarka from './images/card3avatarka.svg';

import fourthArticles from './images/card4.png'
import fourthAvatarka from './images/card4avatarka.svg';

import fifthArticles from './images/card5.png'
import fifthAvatarka from './images/card5avatarka.svg';

import sizthArticles from './images/card6.png'
import sixthAvatarka from './images/card6avatarka.svg';

import travelfirst from './images/firstcontent.png';
import travelsecond from './images/secondcontent.png';
import travelthird from './images/thirdcontent.png';
import travelfourth from './images/fourthcontent.png';
import travelfifth from './images/fifthcontent.png';

import joinButton from './images/joinusbutton.svg'



function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="nav">
          <span className="logo">
           <a href="#"> 
            <img src={logo}  alt="logo" />
            </a>
          </span>
          <span className="nav_profile">
            <a href="#">
              <img src={bruceLee}  alt="brucelee" />
            </a>
            <a href="#">
            <img src={iconsNav} alt="" />
            </a>
          </span>
        </div>
      </div>
     
        <div className="hero">
          <div className="container">
            <div className="hero__wraper">
                <div className="hero-card">
                  <h3>5 mind blowing facts about the iPhone 14</h3>
                  <span className='hero__name'>
                    <img src={avatarHero} alt="" />
                    <p>Farok Rastegar  .  1 hour ago</p>
                  </span>
                </div>
            </div>
          </div>
      </div>

      <div className="container">
        <div className="articles">
          <p className='articles__header'>Featured articles</p>
          <div className="article__wraper">
            <div className="article__card">
              <img src={firstArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={fisrtAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>

            <div className="article__card">
              <img src={secondArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={secondAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous 
                 indignation and dislike men who are so beguiled and 
                 demoralized by the charms of pleasure of the…</p>
              </div>
            </div>

            <div className="article__card">
              <img src={thirdArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={thirdAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous 
                 indignation and dislike men who are so beguiled and 
                 demoralized by the charms of pleasure of the…</p>
              </div>
            </div>

            <div className="article__card">
              <img src={fourthArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={fourthAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous 
                 indignation and dislike men who are so beguiled and 
                 demoralized by the charms of pleasure of the…</p>
              </div>
            </div>

            <div className="article__card">
              <img src={fifthArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={fifthAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous 
                 indignation and dislike men who are so beguiled and 
                 demoralized by the charms of pleasure of the…</p>
              </div>
            </div>

            <div className="article__card">
              <img src={sizthArticles} className='article__img' alt="" />
              <div className='article-card__text'>
                 <strong>10 beaches you must visit</strong>
                 <span className='articles__profile'>
                  <img src={sixthAvatarka} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                 </span>
                 <p>On the other hand, we denounce with righteous 
                 indignation and dislike men who are so beguiled and 
                 demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="content__wraper">
            <div className="content__text">
              <a href="#">Featured</a>
              <b>Beached to take you somewhere else</b>
              <span className='content__name'>
                <img src={avatarHero} alt="" />
                <p>Farok Rastegar  .  1 hour ago</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="travel">
          <p className='travel__header'>Featured articles</p>
          <div className="travel__cards">
              <img src={travelfirst} alt="" />
              <span className='travel__text'>
                <strong>Pathway to the Mediterranean</strong>
                <span className='articles__profile'>
                  <img src={avatarHero} alt="" />
                  <p>Farok Rastegar  .  1 hour ago</p>
                </span>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </span>
          </div>

          <div className="travel__cards">
            <img src={travelsecond} alt="" />
            <span className='travel__text'>
              <strong>My awesome safari in Lahbab Desert, United Arab Emirates</strong>
              <span className='articles__profile'>
                <img src={avatarHero} alt="" />
                <p>Farok Rastegar  .  1 hour ago</p>
              </span>
              <p>On the other hand, we denounce with righteous indignation and dislike men who 
                are so beguiled and demoralized by the charms of pleasure of the moment, so 
                blinded by desire, that they cannot foresee the pain a…</p>
            </span>
          </div>

          <div className="travel__cards">
            <img src={travelthird} alt="" />
            <span className='travel__text'>
              <strong>10 amazing things to do in Cuba</strong>
              <span className='articles__profile'>
                <img src={avatarHero} alt="" />
                <p>Farok Rastegar  .  1 hour ago</p>
              </span>
              <p>On the other hand, we denounce with righteous indignation and dislike men who 
                are so beguiled and demoralized by the charms of pleasure of the moment, so 
                blinded by desire, that they cannot foresee the pain a…</p>
            </span>
          </div>

          <div className="travel__cards">
            <img src={travelfourth} alt="" />
            <span className='travel__text'>
              <strong>The best street food in the world. Ranked!</strong>
              <span className='articles__profile'>
                <img src={avatarHero} alt="" />
                <p>Farok Rastegar  .  1 hour ago</p>
              </span>
              <p>On the other hand, we denounce with righteous indignation and dislike men who 
                are so beguiled and demoralized by the charms of pleasure of the moment, so 
                blinded by desire, that they cannot foresee the pain a…</p>
            </span>
          </div>

          <div className="travel__cards">
            <img src={travelfifth} alt="" />
            <span className='travel__text'>
              <strong>Travel Packing guide for beginners</strong>
              <span className='articles__profile'>
                <img src={avatarHero} alt="" />
                <p>Farok Rastegar  .  1 hour ago</p>
              </span>
              <p>On the other hand, we denounce with righteous indignation and dislike men who 
                are so beguiled and demoralized by the charms of pleasure of the moment, so 
                blinded by desire, that they cannot foresee the pain a…</p>
            </span>
          </div>
          <div className="button">
             <a href="#">Load More</a>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="joinus">
          <form className='joinus__form'>
            <input type="text" placeholder='PLaceholder' />
            <img src={joinButton} alt="" />
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
