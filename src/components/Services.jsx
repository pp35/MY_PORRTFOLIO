import React, { useState, useEffect } from 'react';

const Services = () => {
  const servicesData = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 70 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'SQL', percentage: 60 },
  ];

  const [animatedServicesData, setAnimatedServicesData] = useState(servicesData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedServicesData((prevData) =>
        prevData.map((service) => {
          const newPercentage = (service.percentage + 5) % 100;
          const updatedPercentage = Math.min(newPercentage, service.percentage);
          if (updatedPercentage >= service.percentage) {
            clearInterval(intervalId);
          }
          return {
            ...service,
            percentage: updatedPercentage,
          };
        })
      );
    }, 300);

    if (animatedServicesData[0].percentage >= servicesData[0].percentage) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [animatedServicesData, servicesData]);

  return (
    <div className='p-8 md:p-36 lg:p-60 flex flex-col items-center justify-center bg-gradient-to-b'>
      <h1 className='text-4xl md:text-5xl font-bold mb-6 md:mb-10 uppercase text-white text-center lg:text-left'>
        Our Services
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
        {animatedServicesData.map((service) => (
          <div
            key={service.name}
            className='bg-gray-900 p-8 rounded-md text-center shadow-lg hover:shadow-xl transition  duration-300'
          >
            <p className='text-3xl font-semibold text-white mb-4 content-center'>
              <span role='img' aria-label='Service Icon'>
                {service.name === 'HTML5' && (
                  <span style={{ color: 'orange', margin: '0 4px' }}>&#60;&#47;&#62;</span>
                )}
                {service.name === 'CSS3' && '🎨'}
                {service.name === 'JavaScript' && '🚀'}
                {service.name === 'React' && '⚛️'}
                {service.name === 'MongoDB' && '🍃'}
                {service.name === 'SQL' && '📊'}
              </span>
              <br /> {/* Add a line break */}
              {service.name}
            </p>
            <div className='text-fuchsia-300 text-lg mb-4'>{`${service.percentage}% proficiency`}</div>
            <div className='relative w-full bg-fuchsia-400 h-3 rounded' style={{ padding: '0 10px' }}>
              <div
                className='absolute left-0 top-0 h-full bg-blue-600 rounded'
                style={{ width: `calc(${service.percentage}% - 20px)` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
