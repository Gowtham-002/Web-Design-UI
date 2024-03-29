import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'G',
    'o',
    'w',
    't',
    'h',
    'a',
    'm',
    ' ',
    'R',
    'a',
    'g',
    'h',
    'u',
    'r',
    'a',
    'm',
    'a',
    'n',
  ]
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={33}
            />
          </h1>
          <h2>Frontend Developer / Backend Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Logo />
      <Loader type="pacman" />
    </>
  )
}

export default Home
