import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom"
import Work from "./Work";
import Experiments from "./Experiments";
import Photography from "./Photography";
import PrintAndScreen from "./PrintAndScreen";
import CV from "./CV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    
    const [isIntroVisible, setIsIntroVisible] = useState(false);
    
    const toggleIntroVisibility = () => {
    setIsIntroVisible(!isIntroVisible);
    }

    const email = 'example@example.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

 return (
    <>
    <div className="pt-5">
        <div className="flex justify-center" onClick={toggleIntroVisibility}>
           <h1 className="font-bold">Intro</h1>

            <button>
                <FontAwesomeIcon icon={!isIntroVisible ? faPlus : faMinus} />
            </button>

            {isIntroVisible && 
            <div>
               Intro
                Communication is essential and fundamental for the human race.
                Whether it’s with signs, noise, gestures, or letters, our ancestors always found a way to tell their stories.

                The oldest method of communication is visual, dating back to nearly 43,900 years when the first cave illustrators inspired the world and carried their legacy using just lines, colors, forms, and shades. Since then, it became a part of our culture, it evolved into art, sculpting, painting, theater, graphics, fashion, and design, and merged with our everyday life and surrounding.

                But of course, we can’t ignore the fact that each region developed its own variety of visual communication, based on culture, tradition, and condition.
                Those aspects of reality also determined what different groups of people found appealing or attractive.

                It is crucial to understand and celebrate those differences in the design world.
                Intuitively, the more exposure one has to different backgrounds in design and communication, the larger their work impact is, and the more well-rounded and diversely beautiful the output becomes.

                As a French/Armenian person who is raised in the second-oldest Metropolis, Damascus, and relocated to Germany, I realize the different set of cultural backgrounds and the visual data that I carry, and I consciously incorporate them into my work.

                During my time at the Faculty of Fine Arts in Damascus, I experienced a highly structured academic approach to learning. In that system, I had the opportunity to learn about and enhance my technique in five majors, that I consider interconnected: painting, sculpting, interior design, graphic, and visual communication.
                Having this exposure, I found myself searching for an application for my skills.

                I soon realized that all those majors and their content pour into my ability to visually communicate information to viewers of my work. Therefore, I realized that I want to use my skills to communicate, whether that is to inspire people or to deliver a message or a political statement to raise awareness.

                As a result of what I learned in the faculty of fine arts, I executed my first solo exhibition in the Opera House of Damascus when I was 20 years old. 
                In the exhibition, I displayed 23 pieces, all of which delivered a message about societal issues that needed to be addressed. For example, women’s rights, poverty, corruption, and depression.

                Due to the war in Syria, I had to move to Germany in 2016.
                Living in Weimar, inspired me. The city’s historical and cultural vibe, as a place where Bauhaus was born and Goethe, Schiller, Anna Amalia, Wiland, and many more lived, opened my eyes to yet another cultural input, which made my personal cultural background richer.

                As a former student at Bauhaus University, I was allowed to apply my outside-of-the-box thinking. Compared to the structured academic curriculum that I followed in Damascus which taught me hard skills, at Bauhaus, I found myself breaking free from the frameworks I had to do and think within, to become a more inspired and creative artist. 

                Nevertheless, at some point, Weimar felt small. It was time to set new goals and start new, somewhere bigger and more diverse, like Damascus was. So, in search of inspiration and advancement, I decided to move to the German Metropolis, Berlin, and dig deeper into the recent history to get even more visual input.

                I absolved a semester at HTW Berlin, where I found myself using both, the hard skills I learned in Damascus next to my ability to think freely, and applied what I gained from Bauhaus to my new work. I started working as a junior art director at a small marketing agency among other jobs to sustain my livelihood.

                In 2022, I moved to Seoul, South Korea, and extended my studies in Journalism and live performance at Chung-Ang University.
                Living in Seoul opened my eyes to yet another wonderful world of rich culture and different visual inputs. It also taught me how to be more disciplined.  

                Looking forward, I am aspiring and working toward taking my skills and ideas to the next step. I am gaining more knowledge in the field of Journalism and creative writing while continuing my experiments and diving into the world of Photography, Print, and Directing. This type of artistic expression will allow me to put my ideas and visual data out for the world to see, get inspired by, and enjoy. 
            </div>}
        </div>

        <hr className="bg-black" /> 

        <div className="py-2 flex justify-center">
            <a className="text-sm">
                01
            </a>
            <Link to="/work">
                <h1 className="underline font-bold">My work world</h1>
            </Link>
        </div>

        <div className="py-2 flex justify-center">
             <a className="text-sm">
                02
            </a>
            <Link to="/experiments">
                <h1 className="underline font-bold">My Nerdy Experiments</h1>
            </Link>
        </div>

        <div className="py-2 flex justify-center">
            <a className="text-sm">
                03
            </a>
            <Link to="/photography">
                <h1 className="underline font-bold">Photography</h1>
            </Link>
        </div>

        <div className="py-2 flex justify-center">
            <a className="text-sm">
                04
            </a>
            <Link to="/printandscreen">
                <h1 className="underline font-bold">Print & screen</h1>
            </Link>
        </div>

        <hr className="bg-black" /> 

        <CV/>

        <hr className="bg-black" /> 

         <div className="py-2">
            <h1 className="font-bold underline" onClick={handleEmailClick}>Get in Touch.</h1>
        </div>

    </div>

    <div>
       <Routes>

        <Route 
            path="/work" 
            element={<Work />} 
        />

        <Route 
            path="/cv" 
            element={<CV />} 
         />

        <Route 
            path="/experiments" 
            element={<Experiments />} 
        />

        <Route path="/photography" element={<Photography />} />
        <Route path="/printandscreen" element={<PrintAndScreen />} />
      </Routes>
    </div>
    </>
    );
};

export default Home;