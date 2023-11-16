import { staffConsult } from "../assets";
import ServicesNav from "../components/ServicesNav";
import Wrapper from "../components/Wrapper";
import StaffRecruitmentPP from "../components/pricingNplans/StaffRecruitmentPP";

const StaffRecruit = () => {
  return (
    <Wrapper>
      <div className='mt-20 lg:flex lg:gap-4'>
        {/* left */}
        <div className='lg:mt-12 lg:flex-1'>
          <ServicesNav />
        </div>

        {/* Right */}
        <section className='my-14 px-2 text-zinc-700 lg:flex-[2_2_0]'>
          <h2 className='text-xl  text-zinc-800'>
            Piscal Innovations is your trusted partner in IT staff recruitment, offering a
            comprehensive range of services to elevate your workforce and drive success in the
            rapidly evolving technology landscape.
          </h2>
          <img src={staffConsult} className='mt-10 rounded-lg' alt='' />

          <article className='py-14'>
            <ol className='list-decimal space-y-6 pt-6 text-zinc-700'>
              <li className=''>
                <ul className='list-disc space-y-2 pt-2'>
                  <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                    IT Talent Acquisition:{" "}
                  </h3>
                  <li>
                    Piscal Innovations specializes in identifying and recruiting top-tier IT talent
                    to meet your organizations specific needs.
                  </li>
                  <li>
                    Our experts leverage extensive networks and industry insights to source
                    candidates with the right skills, experience, and cultural fit.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Recruitment Process Outsourcing (RPO):
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Streamline your hiring process with Piscal Innovations RPO services, where we
                    manage the end-to-end recruitment cycle.
                  </li>
                  <li>
                    From initial candidate sourcing to onboarding, our dedicated team ensures a
                    seamless and efficient recruitment process.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Executive Search for IT Leadership:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Secure the future of your IT leadership team with our executive search services.
                  </li>
                  <li>
                    Piscal Innovations identifies and recruits high-caliber executives, ensuring
                    alignment with your organizations vision and strategic goals.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  IT Skill Assessment and Testing:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Validate the technical proficiency of candidates through our skill assessment
                    and testing services.
                  </li>
                  <li>
                    Piscal Innovations ensures that the candidates presented to you possess the
                    required technical expertise for their designated roles.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Talent Pool Management:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Build and maintain a robust talent pool for your ongoing and future hiring
                    needs.
                  </li>
                  <li>
                    Piscal Innovations proactively manages candidate relationships, keeping a pool
                    of qualified professionals ready to meet your staffing requirements.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Contract Staffing Solutions:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    Address short-term project needs or fill skill gaps with Piscal Innovations
                    contract staffing solutions.
                  </li>
                  <li>
                    We provide flexible and scalable IT professionals for the duration of your
                    projects.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  IT Recruitment Consultancy:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>Rely on our expertise for strategic advice on IT recruitment.</li>
                  <li>
                    Piscal Innovations offers insights into market trends, salary benchmarks, and
                    recruitment best practices to support your talent acquisition strategy.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Employer Branding and Talent Attraction:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>Enhance your employer brand to attract top IT talent.</li>
                  <li>
                    Piscal Innovations collaborates with you to create compelling employer branding
                    strategies that resonate with the IT workforce.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Diversity and Inclusion Hiring Solutions:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>Foster diversity in your IT teams with our specialized hiring solutions.</li>
                  <li>
                    Piscal Innovations is committed to promoting inclusivity, helping you build
                    diverse and high-performing IT teams.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className='title-font mb-3 text-lg font-semibold text-zinc-800'>
                  Candidate Onboarding Support:
                </h3>
                <ul className='list-disc space-y-2 pt-2'>
                  <li>
                    - Facilitate a smooth transition for new hires with our candidate onboarding
                    support. - Piscal Innovations ensures that candidates integrate seamlessly into
                    your organization, maximizing their contribution from day one.
                  </li>
                  <li>
                    Piscal Innovations is your trusted partner in IT staff recruitment, offering a
                    comprehensive range of services to elevate your workforce and drive success in
                    the rapidly evolving technology landscape.
                  </li>
                </ul>
              </li>
            </ol>
          </article>

          {/* -----> PlansNPricing <----- */}
          <div>
            <StaffRecruitmentPP />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default StaffRecruit;
