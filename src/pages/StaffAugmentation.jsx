import Wrapper from "../components/Wrapper";
import ServicesNav from "../components/ServicesNav";
import { chooseUs, staffAugmentation } from "../assets";

const StaffAugmentation = () => {
  return (
    <Wrapper>
      <div className='mt-20 lg:flex lg:gap-4'>
        {/* Left */}
        <div className='lg:mt-12 lg:flex-1'>
          <ServicesNav />
        </div>
        {/* Rigth */}
        <div className='my-14 px-2 text-zinc-700 lg:flex-[2_2_0]'>
          <h2 className='text-3xl font-bold text-zinc-800 sm:text-4xl'>
            Piscal Innovations: Overview of IT Consulting Services - Staff Augmentation
          </h2>
          <img src={staffAugmentation} className='mt-10 rounded-lg' alt='' />

          <article className='py-14'>
            <h4 className='text-xl font-semibold'>Service Overview:</h4>
            <p>
              Piscal Innovations is a leading IT Consulting firm that specializes in Staff
              Augmentation services. Staff Augmentation is a strategic approach that allows
              businesses to enhance their existing workforce by temporarily integrating specialized
              IT professionals to address specific projects or skill gaps. Piscal Innovations
              understands the ever-evolving nature of the IT industry and offers a range of Staff
              Augmentation services to help organizations achieve their technology and project
              goals.
            </p>

            <ol className='list-decimal space-y-6 pt-6 px-1 text-zinc-700'>
              <h4>Key Features of Piscal Innovations Staff Augmentation Services:</h4>
              <li className=''>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Flexible Staffing Solutions:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Piscal Innovations offers flexible and scalable staffing solutions to meet the
                    unique needs of your organization. Whether you require short-term project
                    support or long-term resource augmentation, our services are designed to adapt
                    to your specific requirements.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Specialized IT Professionals:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    We maintain an extensive network of highly skilled and experienced IT
                    professionals across various domains, including software development, network
                    administration, cybersecurity, data analysis, and more. Our pool of talent
                    allows us to match the right professionals to your project.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Rapid Resource Deployment:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Piscal Innovations understands the importance of agility in the IT sector. We
                    can quickly deploy our resources to your organization, ensuring that your
                    projects remain on track and that you can respond promptly to market demands.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Cost-Effective Solutions:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Our Staff Augmentation services can help you save on recruitment, onboarding,
                    and training costs. You only pay for the resources you need, reducing the burden
                    on your HR and administrative departments.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Streamlined Onboarding:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    We work closely with you to ensure a seamless onboarding process for the
                    augmented IT professionals. This includes aligning them with your companys
                    culture, policies, and project objectives, so they can quickly start
                    contributing to your team.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Quality Assurance:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Piscal Innovations is committed to maintaining the highest quality standards.
                    Our professionals undergo rigorous selection and vetting processes to ensure
                    they meet your projects requirements and expectations.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Project Management Support:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    In addition to providing skilled IT professionals, we offer project management
                    support to ensure that the integration of augmented staff is successful. Our
                    team can assist in project planning, monitoring, and delivery to meet your
                    project milestones effectively.
                  </li>
                </ul>
              </li>
            </ol>
          </article>

          {/* <------- companies we serve SECTION ----> */}
          <img src={chooseUs} className='py-16' alt='' />
          <section>
            <div className='max-w-screen-xl px-4 py-14 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
              <div className='grid grid-cols-1 gap-y-8 items-center lg:gap-x-3'>
                <div className='mx-auto max-w-full text-center place-items-center lg:mx-0'>
                  <h2 className='text-3xl font-bold sm:text-4xl'>Industries We Serve:</h2>

                  <p className='mt-4 text-gray-600'>
                    Piscal Innovations provides Staff Augmentation services to a wide range of
                    industries, including but not limited to:
                  </p>

                  <button className='mx-auto mt-5  flex rounded border-0 bg-green px-8 py-2 text-lg text-white hover:bg-darkGreen focus:outline-none'>
                    Contact Us
                  </button>
                </div>

                <div className=' grid w-full grid-cols-2 gap-4 sm:grid-cols-3'>
                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-indigo-500 h-8 w-8 lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Technology and Software Development
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Healthcare
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                    </span>

                    <p className='sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Finance and Banking
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucide-factory"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Manufacturing
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Retail and E-commerce
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucideLandmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Government and Public Sector
                    </p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                      <svg
                        className='h-8 w-8 text-indigo-500'
                        strokeWidth={2}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        ></path>
                      </svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>Education</p>
                  </a>

                  <a
                    className='block rounded-xl border border-gray-100 p-4 shadow-lg hover:border-green hover:ring-1 hover:ring-green focus:outline-none focus:ring'
                    
                  >
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-500 lucide lucide-drama"><path d="M 10 11h.01"/><path d="M 14 6h.01"/><path d="M 18 6h.01"/><path d="M 6.5 13.1h.01"/><path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/><path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/><path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/></svg>
                    </span>

                    <p className=' sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Entertainment and Media
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 my-14">
            <h3 className="text-3xl font-bold sm:text-4xl">Why Choose Piscal Innovations for Staff Augmentation:</h3>
            <ul className="list-disc space-y-4">
              <li>
                <p>
                  <strong>Proven Track Record: </strong> Piscal Innovations has a proven track
                  record of delivering top-tier Staff Augmentation services to organizations of all
                  sizes.
                </p>
              </li>
              <li>
                <strong>Customized Solutions:</strong>
                We understand that every organization has unique requirements. Our services are
                tailored to match your specific needs, ensuring the best fit for your projects.
              </li>
              <li>
                <strong>Cost-Efficiency: </strong>
                By leveraging our Staff Augmentation services, you can reduce recruitment and
                training costs, making your IT projects more cost-effective.
              </li>
              <li>
                <strong>Timely Delivery:</strong>
                Our agile approach ensures that we can swiftly deploy resources to meet your project
                timelines and maintain your competitive edge.
              </li>
              <li>
                <strong>Quality Assurance:</strong>
                Piscal Innovations places a strong emphasis on quality, and we take pride in
                providing professionals who are not only skilled but also aligned with your
                organizational culture.
              </li>
            </ul>
          </section>

          <div className="bg-greenGradient rounded-md my-16 py-10 space-y-4 px-6">
                <h3 className='text-xl font-semibold text-white'>Contact Piscal Innovations:</h3>
                <p className="text-slate-200">
                If youre looking to enhance your IT projects with skilled professionals through Staff Augmentation, contact Piscal Innovations today. Well work closely with you to understand your needs and deliver the right IT talent to drive your projects to success.
                <br />
                <br />
Piscal Innovations is your trusted partner in IT Staff Augmentation, helping you achieve your business objectives while maintaining a competitive edge in the dynamic IT landscape.

                </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaffAugmentation;
