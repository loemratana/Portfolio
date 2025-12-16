import React from 'react'
import Section from '../ui/Section';
import { skills } from '../../data/skills';
const Skills = () => {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I excel at">
            <div className='grid md:grid-cols-3 gap-8'>
                {skills.map((skillCategory,i)=>(
                    <div 
                    className='bgbackdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 mb-6 hover:bg-white/10 transition-all'
                    key={i}>
                    <h3 className='text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text'>
                        {skillCategory.category}
                    </h3>
                    <div>
                        {skillCategory.items.map((skill,j)=>(
                             <div
                             key={j}
                             className='flex items-center gap-3 mb-4 group cursor-pointer'
                             >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                              <span className='text-gray-300 group-hover:text-white transition'>{skill}</span>  

                             </div>

                        ))}
                    </div>
                    </div>
                ))}
            </div>

           {/* Expanded Expertise Cards - Including Creative Skills */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {[
          {
            title: 'Frontend Development',
            desc: 'Crafting pixel-perfect, responsive, and interactive user interfaces with modern frameworks and design systems.',
            tools: 'React, Next.js, Tailwind CSS, TypeScript, Framer Motion',
            icon: '🎨',
          },
          {
            title: 'Backend & Database',
            desc: 'Building robust server-side logic and efficient database architectures to power scalable applications.',
            tools: 'PHP, Java Spring Boot, MySQL, PostgreSQL, REST APIs',
            icon: '⚙️',
          },
          {
            title: 'Graphic Design',
            desc: 'Creating stunning visual identities, branding materials, UI mockups, and marketing assets that stand out.',
            tools: 'Adobe Photoshop, Illustrator, Figma, Canva, Affinity Designer',
            icon: '✨',
          },
          {
            title: 'Video Editing & Motion',
            desc: 'Producing engaging video content, promotional videos, animations, and social media reels with cinematic quality.',
            tools: 'Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut',
            icon: '🎬',
          },
          // {
          //   title: 'UI/UX Design',
          //   desc: 'Designing intuitive and user-centered experiences with wireframing, prototyping, and usability testing.',
          //   tools: 'Figma, Adobe XD, Prototyping, User Research',
          //   icon: '💡',
          // },
          {
            title: 'Problem Solving & Growth',
            desc: 'Analytical mindset with a passion for tackling complex challenges and rapidly mastering new technologies through hands-on projects.',
            tools: 'Algorithms, Data Structures, System Design, Continuous Learning',
            icon: '🚀',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 hover:from-white/10 hover:to-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-600/20 overflow-hidden"
          >
            {/* Subtle animated background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

            <div className="relative z-10">
              <div className="text-5xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-sm text-gray-400">
                <span className="font-medium text-purple-300">Tools:</span>{' '}
                {item.tools}
              </div>
            </div>
          </div>
        ))}
      </div>

    </Section>
  )
}

export default Skills