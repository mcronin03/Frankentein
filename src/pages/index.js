import React from 'react';

import Layout from '../components/Layout';

import Typewriter from 'typewriter-effect';


import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/Impostor.gif';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p><Typewriter
  options={{
    strings: ['Am I an Imposter?', 'Is Everyone in AP Lit Smarter Than Me?', 'Am I a Fraud?', 'Am I Even Smart?', 'Am I Qualified to Be Here?'],
    autoStart: true,
    loop: true,
  }}
/></p>

        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                What is Imposter Syndrome?
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style7 special">
      <div className="inner">
        <header className="major">
          <h2>
            Imposter Syndrome
          </h2>
          <p>
          Imposter Syndrome was first identified by Dr. Pauline Clance and Dr. Suzanne Imes in 1978, 
          and described as <b>"high achievers who are unable to internalize and accept their success. 
          They often attribute their accomplishments to luck rather than to ability, 
          and fear that others will eventually unmask them as a fraud."</b>  
          <br></br>
          A <a href="https://www.nytimes.com/2015/10/26/your-money/learning-to-deal-with-the-impostor-syndrome.html">New York Times article</a> by Carl Richards uses author and poet Maya Angelou as an example of imposter syndrome.  
          Angelou’s career is marked by her “winning three Grammys and being nominated for a Pulitzer Prize and a Tony Award.”  
          But despite these concrete examples of extreme talent and success, Angelou still fears that when a new novel,  
          “they’re going to find out now.  I’ve run a game on everybody, and they’re going to find me out."  
          <br></br>
          A <a href="https://time.com/5312483/how-to-deal-with-impostor-syndrome/">TIME Magazine article</a> by Abigail Abrams identifies several patterns among people who experience Imposter Syndrome, inlcuding “when the ‘natural genius’ has to struggle or work hard to accomplish something, he or she thinks this means they aren’t good enough”
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <header>
            <h2>
            Victor vs. the Monster's intellect
            </h2>
            <p>Victor's percieved inferior intelligence is the precurser to his Imposter Syndrome</p>
          </header>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendre rit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Victor's responce to the monster's intellect
            <br />
            Does he exhibit imposter syndrome?
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            AP Lit: A Modern Example
            <br />
            Do we have imposter syndrome?
          </h2>
          <p>
            Link to quiz page.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
