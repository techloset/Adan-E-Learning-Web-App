import React from 'react'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import Recomended from './components/Recomended'
import Choices from './components/Choices'
import StartNow from './components/StartNow'

const Coursepage = () => {
  return (
    <div>
        <Dashboard/>
        <Courses/>
        <Recomended/>
        <Choices Heading="Get choice of your course" Bg="" />
        <StartNow/>
        <Choices Heading="The course in personal development"  Bg=""/>
        <Choices Heading="Student are viewing"  Bg="bg-[#9DCCFF]"/>
    </div>
  )
}

export default Coursepage