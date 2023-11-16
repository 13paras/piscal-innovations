import Btn from "../Btn";
import Wrapper from "../Wrapper";

const StaffRecruitmentPP = () => {
  return (
    <Wrapper>
      <section className='body-font overflow-hidden text-gray-600'>
        <div className='mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl'>
              Pricing
            </h1>
            <p className='mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap justify-center'>
            {/* -----> Basic Plan <----- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  BASIC PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*1 managed channel/activity</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $199</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Talent Acquisition </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700'> Recruitment Process Outsourcing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700'> Executive Search for IT Leadership </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Skill Assessment and Testing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700'> Talent Pool Management </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> Contract Staffing Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> IT Recruitment Consultancy </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Employer Branding and Talent Attraction{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Diversity and Inclusion Hiring Solutions{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> Candidate Onboarding Support </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-green w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>

            {/* -----> Standard <----- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  STANDARD PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*4 managed channel/activities</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $299</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Talent Acquisition </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Recruitment Process Outsourcing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Executive Search for IT Leadership </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Skill Assessment and Testing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700'> Talent Pool Management </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> Contract Staffing Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> IT Recruitment Consultancy </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Employer Branding and Talent Attraction{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Diversity and Inclusion Hiring Solutions{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> Candidate Onboarding Support </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-green w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>
            {/* -----> Advanced <-------- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  ADVANCED PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>*6 managed channel/activities</h1>
                <p className='mb-4 border-b border-gray-200 pb-4'>
                  starting from:{" "}
                  <strong className='text-3xl font-bold text-zinc-800 sm:text-4xl'> $399</strong>{" "}
                </p>
                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Startegy + Consultancy </span>
                    </li>
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Talent Acquisition </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Recruitment Process Outsourcing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Executive Search for IT Leadership </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Skill Assessment and Testing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Talent Pool Management </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '> Contract Staffing Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> IT Recruitment Consultancy </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Employer Branding and Talent Attraction{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Diversity and Inclusion Hiring Solutions{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-red-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>

                      <span className='text-gray-700 '> Candidate Onboarding Support </span>
                    </li>
                  </ul>
                </div>
                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-green w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>

            {/* ------> Premium <------- */}
            <div className='p-4 sm:w-[80%] lg:w-[50%] '>
              <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6'>
                <h2 className='title-font mb-2 text-base font-medium tracking-widest '>
                  PREMIUM PLAN
                </h2>
                <h1 className='mb-3 mt-2 font-bold text-zinc-800'>
                  Full customisable plans depending upon business Needs.
                </h1>

                <div className=''>
                  <p className='text-lg font-medium text-gray-900 sm:text-xl'>
                    What&apos;s included:
                  </p>

                  <ul className='mb-4 mt-2 space-y-2 sm:mt-4'>
                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Talent Acquisition </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Recruitment Process Outsourcing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Executive Search for IT Leadership </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> IT Skill Assessment and Testing </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700'> Talent Pool Management </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '> Contract Staffing Solutions </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '> IT Recruitment Consultancy </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Employer Branding and Talent Attraction{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '>
                        {" "}
                        Diversity and Inclusion Hiring Solutions{" "}
                      </span>
                    </li>

                    <li className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 text-indigo-700'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>

                      <span className='text-gray-700 '> Candidate Onboarding Support </span>
                    </li>
                  </ul>
                </div>

                <div className='mt-2'>
                  <Btn
                    navigateTo={"/checkout"}
                    text={"CONNECT WITH US"}
                    classes={"bg-green w-full hover:bg-darkGreen text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default StaffRecruitmentPP;
