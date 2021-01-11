import React from 'react';

import Layout from '../components/Layout';

import Typewriter from 'typewriter-effect';


import Scroll from '../components/Scroll';

import pic1 from '../assets/images/MountainScene.jpg';
import pic2 from '../assets/images/FrankShip.jpg';
import pic3 from '../assets/images/Maya.jpg';
import pic4 from '../assets/images/Truman.jpg';
import pic5 from '../assets/images/Impostor.gif';
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
                Why Fear The Creature?
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
            A Fear of Intelligence
          </h2>
          <p>
          In Mary Shelley’s <i>Frankenstein</i>, Victor and The Creature do not hold diametrically opposed viewpoints; 
          however, they find themselves at odds with each other after failing to properly communicate their desires.   
          <b> Shelley shows that when we perceive someone as more intelligent than ourselves, 
          we avoid communicating in fear of being manipulated. </b>  
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
            Victor vs. the Monster
            </h2>
            <p>A Battle of Intellect</p>
          </header>
          <p>
          Victor first began to see the monster as more intelligent than himself after agreeing to make him a female companion.  
          As the Monster’s emotional narrative story wears off of Victor, Berman argues in his book, <i><a href="http://knarf.english.upenn.edu/Articles/berman.html">In Narcissism and the Novel</a></i>, 
          that Victor “destroys the nearly completed figure, 
          citing the fear that the two monsters might propagate a race of devils upon the earth” (Berman, 61).   
          In destroying the unfinished companion, Victor realizes that the monster is intelligent and manipulative, 
          and he is unable to trust himself not to be manipulated against his best interests.  
          For the rest of the novel, Victor avoids another discussion, like the one he had in the mountains, 
          with the monster out of fear of being manipulated by the monster who he considers to be smarter than him. 
<br></br><br></br>
          The monster continues to prove his intelligence when eluding Victor on their journey to the north.  
          Victor sees the monster board a ship, so he took “passage in the same ship, but he escaped, I know not how” (Shelley).  
          Victor remains scared of the monster’s ability to manipulate him and chases after him with the sole purpose of killing him, 
          vowing “never will I give up my search until he or I perish” (Shelley).
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
        <header>
            <h2>
            Victor's Warning to Walton
            </h2>
            <p>Expressing His Fear of Manipulation</p>
          </header>
          <p>
          When speaking with Walton before death, Victor makes it clear that the monster’s intelligence is so 
          profound that Walton should avoid communicating with him entirely in fear of manipulation.  In his <a href="http://knarf.english.upenn.edu/Articles/kincaid.html">article</a> in 
          the academic journal <i>Novel: A Forum on Fiction</i>, James Kincaid adds that the monster’s “dangerous fluency very 
          nearly has the power to neutralize or obliterate the evidence of the senses and trap one within its eloquence” (Kincaid, 26).
            Victor warns Walton flatly by saying the monster is “eloquent and persuasive… but trust him not,” adding that 
            “once his words had even power over my heart” (Shelley).  
            Victor see’s the monster’s intelligence and eloquence as a direct reason to not trust him; 
            he would rather cease communication, and abandon future attempts at a peaceful resolve, 
            than be manipulated to the monster’s will.  
            <br></br><br></br>
            When Walton finally meets the monster after Victor’s death, 
            we see again that people avoid communication in order to avoid manipulation.  
            Walton immediately recognizes the monster’s charisma and eloquence: 
            “I was at first touched by the expressions of his misery” (Shelley).  
            But, he remembers Victor’s warning and verbally reaffirms himself from sympathizing with the monster by calling him a 
            “Wretch!”  Walton is quick to show empathy for the monster, but in knowing from Victor that the monster is intelligent, 
            Walton chooses to interrupt the monster’s speech, and accuse him for causing Victor’s death, to avoid giving the monster an opportunity to manipulate him.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
        <header>
            <h2>
            Why Victor's Fears Are Relevant
            </h2>
            <p>An Analysis of Victor's Imposter Syndrome</p>
          </header>
          <p>
          A <a href="https://time.com/5312483/how-to-deal-with-impostor-syndrome/">TIME Magazine article</a> by 
          Abigail Abrams defines Imposter Syndrome as 
          “the idea that you’ve only succeeded due to luck, and not because of your talent or qualifications.”  
          It is often seen in high achieving individuals—like Victor with his groundbreaking experiment—who do not value their success, 
          and leads to them doubting their abilities and feeling like failures.  
          <br></br><br></br>
          A <a href="https://www.nytimes.com/2015/10/26/your-money/learning-to-deal-with-the-impostor-syndrome.html">New York Times article</a> by 
          Carl Richards documents <b>Maya Angelou's experience with imposter syndrome. </b>  
          Angelou’s writing career is marked by her “winning three Grammys and being nominated for a Pulitzer Prize and a Tony Award.”  
          But despite these concrete examples of extreme talent and success, Angelou still fears that when writing a new novel,  
          “they’re going to find out now.  I’ve run a game on everybody, and they’re going to find me out." 
          <br></br><br></br>
          Imposter Syndrome was first identified in 1978 by psychologist Pauline Clance, 
          however the phenomenon is clearly seen in the character Victor Frankenstein in Mary Shelley’s novel <i>Frankenstein</i>.  
          Victor is an intelligent scientist who, despite his successful experiment, 
          continually questions his intelligence and sees himself as a failure.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
        <header>
            <h2>
            The Role of Environment
            </h2>
            <p>An Analysis of Victor's Imposter Syndrome</p>
          </header>
          <p>
          TIME Magazine also notes that <b>“factors outside of a person, such as their environment”</b> can induce Imposter Syndrome.  
          Victor reflects on his childhood environment as perfect, 
          stating that “no human being could have passed a happier childhood than myself” (Shelley).  
          But what Victor saw as perfection was in fact <b>seclusion</b>, 
          protecting Victor from ever challenging himself or struggling in his studies.  
          Victor’s secluded childhood allowed him to establish his ego around always being the smartest person in the room.  
          He surrounded himself with people like Elizabeth and Clerval who he did not see as intellectuals, 
          but people “full of kindness and tenderness” and “perfectly humane” (Shelley).
          <br></br><br></br>
          Victor’s <b>environment</b> changes when he meets the Creature: a being smarter than Victor, 
          and one which he can’t seem to remove from his life.  
          Victor’s identity of always being the smartest person is crushed by the Creature.  
          Victor almost explicitly acknowledges this environmental change when telling Walton 
          “I feel exquisite pleasure in dwelling on the recollections of childhood, 
          before misfortune had tainted my mind and changed its bright visions of extensive usefulness into gloomy and narrow 
          reflections upon self” (Shelley).  When Victor was the smartest person around, 
          he had “bright visions of extensive usefulness,” but when overcome with Imposter Syndrome 
          from being less intelligent than The Creature, he has “gloomy and narrow reflections upon self.”  
          Victor’s abrupt change—similar to that of Truman Burbank leaving the dome in The Truman Show—from a secluded childhood to being confronted by the intelligent 
          Creature created the perfect conditions for Imposter Syndrome in Victor.
         </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic5} alt="" />
        </div>
        <div className="content">
        <header>
            <h2>
            Imposter Syndrome Among Students
            </h2>
            <p>AP Lit; or, The Modern Imposter Syndrome</p>
          </header>
          <p>
            Although monsters born in labs exist only in the world of science fiction, 
            Imposter Syndrome and Victor’s feeling of intellectual inferiority exist in many forms today.  
            Most notably for high school students, competitive AP classes often breed Imposter Syndrome in students.  
            Most students enrolled in AP classes are used to being the best—with lifelong praise from parents and teachers—but now in AP classes, 
            the material is harder to grasp, and everyone else in class is also a high achieving student.  
            <br></br><br></br>
            The New York Times offers that “when ‘natural genius’ has to struggle or work hard to accomplish something, 
            he or she thinks this means they aren’t good enough. They are used to skills coming easily, and when they have to put in effort, 
            their brain tells them that’s proof they’re an impostor.”  
            <b> Students in AP classes often refrain from asking questions in order to protect their image of being smart, 
              just as Victor refrained from speaking to the monster to protect himself from manipulation.</b>
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Recognize and Avoid Imposter Syndrome</h2>
          <p>
            Take this 20 question quiz developed by <a href="https://www.paulineroseclance.com/impostor_phenomenon.html">Dr. Clance</a> to recognize your own Imposter Syndrome feelings.
            </p>
            <a href="/ImposterTest" className="button primary">
                Imposter Syndrome Quiz
              </a>
              <br></br><br></br>
            <p>
            Learn to deal with Imposter Syndrome by using these tips from an <a href="https://blog.hubspot.com/marketing/impostor-syndrome-tips">article</a> by Lindsay Kolowich Cox.
          </p>
        </header>
        <ul className="features">
        <li className="icon solid fa-search">
            <h3>Know the Signs</h3>
            <p>
              Stop saying "I got lucky" when you actually prepared well and worked hard.
            </p>
          </li>
          <li className="icon solid fa-hands-helping">
            <h3>Know you're not alone</h3>
            <p>
            Successful people, from Tina Fey to Michelle Obama, have built amazing careers even while coping with Imposter Syndrome.
            </p>
          </li>
          <li className="icon solid fa-medal">
            <h3>Distinguish humility and fear</h3>
            <p>
            Take humility in your accomplishments, but don't be afraid to acknowledge your hard work</p>
          </li>
          <li className="icon solid fa-user-graduate">
            <h3>Let Go of Perfectionism</h3>
            <p>
            When you feel like a fraud, it's usually because you're comparing yourself to some *perfect* outcome that's either impossible or unrealistic.
            </p>
          </li>
          <li className="icon solid fa-heart">
            <h3>Be Kind to Yourself</h3>
            <p>
            Negative self-talk is a bad habit, and it can heavily influence our stress and anxiety levels.
            </p>
          </li>
          <li className="icon solid fa-chart-line">
            <h3>Track Your Success</h3>
            <p>
            To help show yourself that you're actually doing well, keep track of your wins in a private document.
            </p>
          </li>
          <li className="icon solid fa-volume-up">
            <h3>Talk With A Mentor</h3>
            <p>
            Sharing your thoughts and experiences with someone else will make you better equipped to deal with your impostor syndrome.
            </p>
          </li>
          <li className="icon fa-check-circle">
            <h3>Say Yes to New Opportunities.</h3>
            <p>
            Taking on challenging new work and doing well at it can open a lot of doors for you.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
