import React from 'react'
import Section from '../ui/Section';

import { experience } from '../../data/experience';
import { skills } from '../../data/skills';

const Experience = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and skills acquired">
        <div className='max-w-4xl mx-auto'>
            {
                experience.map((job,index)=>(
                    <div key={job.id} className="relative">
                        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 mb-8 hover:bg-white/10 transition-all">
                            
                        
                            <div className='flex items-start gap-6'>
                                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-xl'>
                                    💼
                                </div>
                                <div className='flex-1'>
                                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                                        <h3 className='text-2xl font-bold text-blue-400'>{job.position}</h3>
                                        <span className='text-sm text-gray-400'>{job.period}</span>
                                    </div>
                                    <p className='text-lg text-blue-400 mb-3'>{job.company}</p>
                                    <p>{job.description}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {job.skills.map(skill =>(
                                            <span className='px-3 py-1 text-sm  bg-white/10 border border-white/20 text-gray-300 rounded-full mt-2'>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )) 
            }

        </div>
    </Section>
    
  )
}

export default Experience