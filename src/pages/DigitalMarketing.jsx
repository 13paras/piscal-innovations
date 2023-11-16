import Wrapper from "../components/Wrapper";
import { dm, dm2 } from "../assets";

const DigitalMarketing = () => {
  return (
    <Wrapper>
      <div className='my-32 flex flex-col items-center space-y-6 lg:flex-row lg:gap-8 lg:space-y-0'>
        <div className='space-y-4 pb-6 text-center lg:pb-0 lg:text-start'>
          <h2 className='text-3xl font-bold text-zinc-800'>
            Driven by Passion, <br /> Powered by Data.
          </h2>
          <p className='text-zinc-700 lg:w-[80%]'>
            {" "}
            we believe that digital marketing is not just a tool, but a craft. We combine our
            passion for creativity and innovation with our data-driven approach to deliver results
            that exceed expectations. Whether you need SEO, social media, email marketing, or
            content marketing, we have the expertise and experience to help you grow your online
            presence and reach your target audience. We are not just a digital marketing agency, we
            are your partners in success.
          </p>
        </div>
        <img src={dm2} alt='' className='mx-auto w-[70%] rounded-md lg:w-[40%]' />
      </div>
      <section className=' text-zinc-800'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div>
            <div className='mx-auto mb-10 max-w-lg space-y-6 text-center lg:text-start'>
              <h2 className='text-3xl font-bold sm:text-4xl'>Kickstart your marketing</h2>

              <p className='mt-4 text-zinc-700'>
                Grow your online presence with our web design and development team.
              </p>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-10 w-10 text-indigo-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                />
              </svg>

              <h2 className='mt-4 text-xl font-bold'>Unleash Your Brand&apos;s Potential</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                Our comprehensive digital marketing services will elevate your brand to new heights.
              </p>
            </a>

            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className=' lucide lucide-goal h-10 w-10 text-indigo-500'
              >
                <path d='M12 13V2l8 4-8 4' />
                <path d='M20.55 10.23A9 9 0 1 1 8 4.94' />
                <path d='M8 10a5 5 0 1 0 8.9 2.02' />
              </svg>

              <h2 className='mt-4 text-xl font-bold'>Target Your Ideal Audience</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                We&apos;ll help you connect with the right people at the right time, maximizing your
                marketing ROI.
              </p>
            </a>

            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-keyboard h-10 w-10 text-indigo-500'
              >
                <rect width='20' height='16' x='2' y='4' rx='2' ry='2' />
                <path d='M6 8h.001' />
                <path d='M10 8h.001' />
                <path d='M14 8h.001' />
                <path d='M18 8h.001' />
                <path d='M8 12h.001' />
                <path d='M12 12h.001' />
                <path d='M16 12h.001' />
                <path d='M7 16h10' />
              </svg>

              <h2 className='mt-4 text-xl font-bold'>Craft Compelling Content</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                Engaging content is the key to capturing attention and driving conversions.
                We&apos;ll help you create it.
              </p>
            </a>

            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-wand-2 h-10 w-10 text-indigo-500'
              >
                <path d='m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z' />
                <path d='m14 7 3 3' />
                <path d='M5 6v4' />
                <path d='M19 14v4' />
                <path d='M10 2v2' />
                <path d='M7 8H3' />
                <path d='M21 16h-4' />
                <path d='M11 3H9' />
              </svg>

              <h2 className='mt-4 text-xl font-bold'>Optimize Your Website</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                Your website is your digital storefront. We&apos;ll make sure it&apos;s search
                engine friendly and user-friendly.
              </p>
            </a>

            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-instagram h-10 w-10 text-indigo-500'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
              </svg>

              <h2 className='mt-4 text-xl font-bold'>Harness the Power of Social Media</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                Social media is a powerful tool for connecting with your audience and building brand
                awareness. Let us show you how to use it effectively.
              </p>
            </a>

            <a className='hover:shadow-greenborder-green block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-bar-chart-4 h-10 w-10 text-indigo-500'
              >
                <path d='M3 3v18h18' />
                <path d='M13 17V9' />
                <path d='M18 17V5' />
                <path d='M8 17v-3' />
              </svg>

              <h2 className='mt-4 text-xl font-bold '>Measure and Analyze Results</h2>

              <p className='mt-1 text-sm text-zinc-700'>
                Data is key to making informed marketing decisions. We&apos;ll help you track your
                progress and make adjustments as needed.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className='my-16'>
        <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
            <div className='relative z-10 lg:py-16'>
              <div className='relative h-64 sm:h-80 lg:h-full'>
                <img alt='House' src={dm} className='absolute inset-0 h-full w-full object-cover' />
              </div>
            </div>

            <div className='relative flex items-center bg-gray-100'>
              <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

              <div className='p-8 sm:p-16 lg:p-24'>
                <h2 className='text-2xl font-bold sm:text-3xl'>
                  Transforming Digital Marketing with Creativity and Innovation Customer-Focused
                  Solutions:
                </h2>

                <p className='mt-4 text-gray-600'>
                  We believe that the best digital marketing solutions are tailored to the specific
                  needs and goals of our customers. We listen to our customers, understand their
                  challenges, and provide them with customized solutions that deliver value and
                  satisfaction. <br />- Proven Results: Our mission is to create digital marketing
                  campaigns that generate real and lasting results for our customers. <br />
                  - We use data and analytics to measure our performance and optimize our
                  strategies, ensuring that we achieve the highest return on investment for our
                  customers. <br />- Local Presence, Global Vision: We are a digital marketing
                  agency with a global vision and a local presence. We have the expertise and
                  experience to help our customers reach new markets and audiences, while also
                  adapting to the local culture and preferences of their customers. <br />- Constant
                  Growth: We are always learning and evolving as a digital marketing agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default DigitalMarketing;
