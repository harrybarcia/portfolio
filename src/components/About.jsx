import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Harry, nice to meet you.</p>
            </div>
            <div>
              <p>With 7+ years working in GIS (Geographic and Information System) and Web-mapping applications, I have excellent data management, strong reasoning and troubleshooting abilities.</p>
              <br />
              <p>   I particularly love working with back-end environments, servers and large data sets. If you're interested please send me an email at barcia.harry@gmail.com</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
