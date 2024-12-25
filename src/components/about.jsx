import React from 'react'

const About = () => {
  return (
    <div className='bg-[#18061d] min-h-[100vh] overflow-hidden'>
      <div className='text-white py-10 px-10 md:px-20 flex flex-col gap-10'>
        <h1 className='text-xl font-serif flex justify-between'>
            About Me
            <div>
                  <a href="/AbdulSamad.pdf">
              <h1>Resume</h1>
                  </a>
                </div>
        </h1>
        <h1 className='text-l font-serif'>
        Self-taught Python developer with a comprehensive skill set in software engineering and a proven track record of developing versatile, high-impact applications. Skilled in Python, JavaScript, and TypeScript, with expertise in building robust backend systems using Django and Flask, and creating engaging frontends with React, Next.js, and Tailwind CSS. Experienced in deploying containerized microservices architectures across cloud environments like AWS, Azure, and DigitalOcean, leveraging Docker, Kubernetes, and RabbitMQ for efficient, scalable solutions.        </h1>
        <h1 className='text-l font-serif'>
        With a strong portfolio of projects, including telemedicine, taxi services, and e-commerce platforms, I have developed and implemented complex functionalities like role-based scheduling, real-time communication, and user-centric features such as drag-and-drop interfaces and location-based services. My work reflects a deep understanding of database management and optimization, using MySQL and MongoDB to ensure fast, reliable data handling.        </h1>
      <h1 className='text-l font-serif'>
      In addition to technical development, I am skilled in DevOps and deployment practices, utilizing tools like Helm and NGINX for configuration and Kubernetes for orchestration to maintain seamless scalability and security. My commitment to creating user-friendly, high-performing applications is complemented by a passion for continual learning and staying updated on the latest technology trends. I am eager to bring my problem-solving abilities, technical expertise, and collaborative mindset to meaningful projects that drive results and deliver exceptional user experiences.
      </h1>
      </div>
      


    </div>
  )
}

export default About
