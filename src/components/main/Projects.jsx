import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="asdadas asd asd as dasd asaljnd aslndaklsnd akd kamsd kams aldiaod amsd klam doiad i"
            />
            <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="asdadas asd asd as dasd asaljnd aslndaklsnd akd kamsd kams aldiaod amsd klam doiad i"
            />
            <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="asdadas asd asd as dasd asaljnd aslndaklsnd akd kamsd kams aldiaod amsd klam doiad i"
            />
        </div>
    </div>
  )
}

export default Projects