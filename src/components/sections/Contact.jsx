import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Section from '../ui/Section';
import Button from '../ui/Button';
const Contact = () => {
    const [formData,setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmited] = useState(false);
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmited(true);
        setTimeout(()=>setSubmited(false),3000);
        setFormData({name: '', email: '', message: '' })

    }

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect and create something amazing">
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
                {[
          { icon: IoIosMail, title: 'Email', value: 'loemratana63@gmail.com', href: 'mailto:loemratana63@gmail.com' },
          { icon: FaGithub, title: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
          { icon: FaLinkedin, title: 'LinkedIn', value: 'linkedin.com/in/loem-ratana', href: 'https://www.linkedin.com/in/loem-ratana-b922a8297/' }
        ].map((contact,index)=>{
             const Icon = contact.icon;
             return (
                <a 
                key={index}
                href={contact.href}
                target='_blank'
                className="group backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 hover:border-white/40 transition-all text-center cursor-pointer"
                >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                         <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300">{contact.value}</p>
                   
                </a>

             )
        })

        }
        </div>

        <div className='max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8'>
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    id="" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='backdrop-blur-sm bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition'
                    />
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="backdrop-blur-sm bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"

                    />
                </div>
                <textarea 
                name="message" 
                placeholder='Your Message' 
                rows="5" 
                required  
                id=""
                className="w-full backdrop-blur-sm bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition resize-none"
                ></textarea>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                    {submitted?'✓ Message Sent!':'Send Message'}
                </Button>
            </form>
        </div>
    </Section>
  )
}

export default Contact