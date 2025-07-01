import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';



const layout = async ({ children }: { children: ReactNode}) => {

  return <main className='root-container'>
    <div className=' mx-auto '>

        <Navbar />
        <div className=''>
            {children}

        </div>
        <ContactSection/>
        <Footer/>
    

    </div>
  </main>
}

export default layout