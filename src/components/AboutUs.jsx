import React from "react";
import { WhoAreV } from "../assets";
import Wrapper from "./Wrapper";

const AboutUs = () => {
  return (
    <div className='bg-pinkish py-32' id='aboutUs'>
      <Wrapper>
        <div className='flex flex-col items-center gap-4 lg:flex-row'>
          <div className='flex-1 space-y-4'>
            <h4 className='text-4xl font-bold'>Who are we?</h4>
            <p className='space-y-4 text-lg tracking-wide text-zinc-700'>
              
              <span className='inline-block'>
                We are a dedicated IT consultation and services company, committed to enriching the
                lives of our employees, stakeholders, and the broader business community. Our
                primary goal is to deliver cutting-edge technology consulting solutions that empower
                our clients and partners to operate, interoperate, and compete more effectively in
                the digital landscape.
              </span>{" "}
              <br />{" "}
              <span className='inline-block'>
                We pride ourselves on our flexible staffing solutions, tailored to meet the unique
                needs of your business. We specialize in matching job seekers with employers in
                various fields, including IT, accounting, finance, healthcare, and more. By aligning
                our services with your business objectives, we strive to bring unparalleled value to
                your organization and contribute to your success in the ever-evolving world of
                technology.
              </span>{" "}
            </p>
          </div>
          <img className='mt-10 w-[90%] flex-1 lg:mt-0 lg:w-[50%]' src={WhoAreV} alt='' />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
