import Wrapper from "../components/Wrapper";
import ServicesNav from "../components/ServicesNav";
import { itConsulting } from "../assets";
import ITConsultingServicePP from "../components/pricingNplans/ITConsultingServicePP";

const ITConsultingServices = () => {
  return (
    <Wrapper>
      <div className='mt-20 lg:flex lg:gap-4'>

          {/* Left/top */}
          <div className='lg:mt-12 lg:flex-1'>
            <ServicesNav />
          </div>

        {/* Right/bottom */}
        <section className='my-14 lg:flex-[2_2_0] px-2 text-zinc-700'>

            <h2 className='text-3xl font-bold text-zinc-800'>
              Piscal Innovations: Transforming Businesses through IT Excellence
            </h2>
            <img src={itConsulting} alt='' />

            <article className='py-14'>
              <h4 className='text-xl font-semibold'>Our Services:</h4>
              <ol className='list-decimal space-y-6 pt-6 text-zinc-700'>
                <li className=''>
                  <p>
                    <strong>Strategic IT Consulting:</strong> Piscal Innovations aligns your
                    business goals with advanced IT strategies. We provide insights into emerging
                    technologies, conduct thorough IT assessments, and offer guidance to optimize
                    your overall IT infrastructure.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Develop and implement IT strategies aligned with your business goals.</li>
                    <li>Provide insights into emerging technologies to gain a competitive edge</li>
                    <li>Conduct IT assessments and audits for optimization.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Digital Transformation: </strong> We lead your business through a
                    seamless digital transformation, streamlining processes through digitalization.
                    Our experts integrate cutting-edge technologies like AI, IoT, and Blockchain to
                    enhance efficiency, ensuring your business stays competitive in the digital age.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Streamline business processes through digitalization</li>
                    <li>Streamline business processes through digitalization</li>
                    <li>Ensure a smooth transition to a digital-first business model.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Cloud Solutions: </strong> Piscal Innovations designs, implements, and
                    optimizes secure and scalable cloud infrastructures. We specialize in smooth
                    migration to cloud environments, maximizing performance, and ensuring
                    cost-effectiveness for your business operations.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Design and implement secure and scalable cloud infrastructure.</li>
                    <li>Migration services for a seamless transition to cloud environments.</li>
                    <li>Cloud optimization to maximize performance and cost-efficiency.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Cybersecurity: </strong> Our robust cybersecurity solutions protect your
                    digital assets. Piscal Innovations offers threat intelligence, risk assessments,
                    and implements advanced security measures, ensuring the confidentiality,
                    integrity, and availability of your data.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Robust cybersecurity strategies to safeguard your digital assets.</li>
                    <li>Threat intelligence and risk assessments to identify vulnerabilities.</li>
                    <li>Implementation of advanced security measures and compliance solutions.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Managed IT Services: </strong> Piscal Innovations provides proactive
                    monitoring, maintenance, and 24/7 helpdesk support for your IT systems. We
                    ensure quick issue resolution, regular updates, and patches, guaranteeing the
                    reliability and stability of your IT environment.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Proactive monitoring and maintenance of IT systems.</li>
                    <li>24/7 helpdesk support for quick issue resolution.</li>
                    <li>Regular updates and patches to ensure system reliability.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Data Analytics: </strong>Unlock the power of your data with Piscal
                    Innovations data analytics services. We offer business intelligence solutions to
                    facilitate informed decision-making, employing predictive analytics to
                    anticipate market trends and customer behavior.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Unlock the power of data through advanced analytics.</li>
                    <li>Business intelligence solutions for informed decision-making.</li>
                    <li>Predictive analytics to anticipate market trends and customer behavior.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Custom Software Development </strong> Piscal Innovations specializes in
                    developing tailored software solutions to meet your unique business
                    requirements. Our agile development methodologies ensure rapid and flexible
                    project delivery, integrating seamlessly with your existing systems.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Tailored software solutions to meet unique business requirements.</li>
                    <li>
                      Agile development methodologies for rapid and flexible project delivery.
                    </li>
                    <li>Integration with existing systems for a seamless workflow.</li>
                  </ul>
                </li>

                <li>
                  <p>
                    <strong>Cloud Solutions: </strong> Piscal Innovations designs, implements, and
                    optimizes secure and scalable cloud infrastructures. We specialize in smooth
                    migration to cloud environments, maximizing performance, and ensuring
                    cost-effectiveness for your business operations.
                  </p>
                  <ul className='list-disc space-y-2 pt-2'>
                    <li>Design and implement secure and scalable cloud infrastructure.</li>
                    <li>Migration services for a seamless transition to cloud environments.</li>
                    <li>Cloud optimization to maximize performance and cost-efficiency.</li>
                  </ul>
                </li>
              </ol>
            </article>

          {/* Why choose us section */}
          <section className='  text-gray-600'>
              <div className='container mx-auto px-5 py-24'>
                <div className='mb-20 text-center'>
                  <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
                    Why Choose Piscal Innovations:
                  </h1>
                  <div className='mt-6 flex justify-center'>
                    <div className='inline-flex h-1 w-16 rounded-full bg-indigo-500'></div>
                  </div>
                </div>
                <div className='-mx-4 gap-2 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0'>
                  <div className='flex bg-pinkish hover:shadow-lg rounded-sm flex-col items-center p-4 text-center md:w-[32%]'>
                    <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-10 w-10'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                      </svg>
                    </div>
                    <div className='flex-grow '>
                      <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>
                        Expertise
                      </h2>
                      <p className='text-base leading-relaxed'>
                        Our team comprises seasoned professionals with a proven track record.
                      </p>
                    </div>
                  </div>
                  <div className='flex bg-pinkish hover:shadow-lg rounded-md flex-col items-center p-4 text-center md:w-[32%]'>
                    <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-10 w-10'
                        viewBox='0 0 24 24'
                      >
                        <circle cx='6' cy='6' r='3'></circle>
                        <circle cx='6' cy='18' r='3'></circle>
                        <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>
                        Innovation
                      </h2>
                      <p className='text-base leading-relaxed'>
                        We stay ahead of the curve, integrating the latest technologies into your
                        business
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col bg-pinkish hover:shadow-lg rounded-md items-center p-4 text-center md:w-[32%]'>
                    <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-10 w-10'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                        <circle cx='12' cy='7' r='4'></circle>
                      </svg>
                    </div>

                    <div className='flex-grow'>
                      <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>
                        Client-Centric Approach
                      </h2>
                      <p className='text-base leading-relaxed'>
                        Your success is our priority; we work closely with you to understand and
                        meet your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <div>
            <ITConsultingServicePP />
          </div>

            <p className="mt-10 text-white bg-greenGradient rounded-md my-16 py-10 space-y-4 px-6">
              At Piscal Innovations, we dont just provide IT services; we deliver transformative
              solutions that drive your business forward. Join us on the journey to IT excellence
            </p>
        </section>
      </div>
    </Wrapper>
  );
};

export default ITConsultingServices;
