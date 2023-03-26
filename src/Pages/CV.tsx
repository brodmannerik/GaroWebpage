import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CV = () => {

  const [isEducationVisible, setIsEducationVisible] = useState(false);

  const toggleEducationVisibility = () => {
    setIsEducationVisible(!isEducationVisible);
  }

  const [isLanguagesVisible, setIsLanguagesVisible] = useState(false);

  const toggleLanguagesVisibility = () => {
    setIsLanguagesVisible(!isLanguagesVisible);
  }

  const [isJobsVisible, setIsJobsVisible] = useState(false);

  const toggleJobsVisibility = () => {
    setIsJobsVisible(!isJobsVisible);
  }

  const [isInternshipVisible, setIsInternshipVisible] = useState(false);

  const toggleInternshipVisibility = () => {
    setIsInternshipVisible(!isInternshipVisible);
  }

  return (
    <>
        <div className="py-2 flex justify-center" onClick={toggleEducationVisibility}
        >
            <a className="text-sm">
                CV
            </a>
            <div>
                <h1 className="font-bold">Education</h1>
            </div>

            <button>
                <FontAwesomeIcon icon={!isEducationVisible ? faPlus : faMinus} />
            </button>

            {isEducationVisible && (
             <div>
                09.2022 – 02.2023

                Extended studies, Journalism - live performance
                Chung-Ang University, Seoul, South Korea 

                10.2018 – 12.2022

                Bachelor Studies, Visual communication 
                Bauhaus-Universität, Weimar, Germany 

                10.2020 – 03.2021

                int. Semester, Communication Design
                University of Applied Sciences, Berlin, Germany 

                03.2017 – 05.2017

                Language student, language level: C1
                BZ Nürnberg, Germany 

                10.2016 – 02.2017

                Language student, language level: B2
                Bauhaus Universität, Weimar, Germany 

                09.2013 – 03.2016

                Bachelor Studies, Fine Arts
                Faculty of Fine Arts, Damascus, Syria  

                08.2007 – 05.2013 

                High school diploma in natural sciences
                Lycée de laique, Damascus, Syria
            </div>
            )}
        </div>

        <div className="py-2 flex justify-center"
        onClick={toggleLanguagesVisibility}>
            <h1 className="font-bold">Languages</h1>

            <button>
                <FontAwesomeIcon icon={!isLanguagesVisible ? faPlus : faMinus} />
            </button>

            {isLanguagesVisible && (
             <div>
                German
Language level: C1 + 

English 
Native speaker 

Arabic 
native speaker

Armenian
mother tongue   

French
Advanced 

Korean
Beginner
            </div>
            )}
        </div>

        <div className="py-2 flex justify-center"
        onClick={toggleJobsVisibility}>
            <h1 className="font-bold">Jobs</h1>

            <button>
                <FontAwesomeIcon icon={!isJobsVisible ? faPlus : faMinus} />
            </button>

            {isJobsVisible && (
             <div>
             09.2021 – 06.2022 

CO33 Exklusive Beton Designermöbel
Store-Manager / PR / International Sales 

08.2020 – 08.2021

diptyque Paris 
Retail Sales Associate / Customer service 

06.2020 – 07.2020

CO33 Exklusive Beton Designermöbel  Retailer/ PR 

07.2019

Evangelische kirche in Berlin
Illustrations and Art direction for CSD Wagen 

08.2017 – 01.2018

Gottfried Wicklein Lebkuchnerei GmbH & Co. KG
Seller/ Baker 

11.2014 

Damarose Hotel
Christmas Decoration Design 

05.2009 – 04.2010

Yamaha Music Center 
Store-Manager / Retailer
            </div>
            )}
        </div>

        <div className="py-2 flex justify-center"
        onClick={toggleInternshipVisibility}>
            <h1 className="font-bold">Internship</h1>

            <button onClick={toggleInternshipVisibility}>
                <FontAwesomeIcon icon={!isInternshipVisible ? faPlus : faMinus} />
            </button>

            {isInternshipVisible && (
             <div>
                Schildhain UG & Co. KG
Graphics / Junior Art director 

02.2017 – 04.2017 

LANDSCHAFT & GARTEN
 Garden design and landscaping
            </div>
            )}
        </div>
    </>
  )
}

export default CV