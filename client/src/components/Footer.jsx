import React from 'react';
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-neutral-800 text-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Information Section */}
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold uppercase opacity-80"
            >
              Information
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <a
                  href="https://github.com/mario1515"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105 hover:text-neutral-100"
                >
                  About Me
                </a>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <a
                  href="https://github.com/mario1515"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105 hover:text-neutral-100"
                >
                  Pricing
                </a>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <a
                  href="#terms-conditions"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105 hover:text-neutral-100"
                >
                  Terms and Conditions
                </a>
              </Typography>
            </ul>
          </div>

          {/* Contact Me Section */}
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold uppercase opacity-80"
            >
              Contact Me
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <a
                  href="mailto:mariopetkovnfsg@gmail.com"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105 hover:text-neutral-100"
                >
                  Email: mariopetkovnfsg@gmail.com
                </a>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <a
                  href="tel:+359882407945"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105 hover:text-neutral-100"
                >
                  Phone: +359 88 240 7945
                </a>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <span className="inline-block py-1 pr-2">Name: Mario Petkov</span>
              </Typography>
            </ul>
          </div>

          {/* Technologies Section */}
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold uppercase opacity-80"
            >
              Technologies
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <span className="inline-block py-1 pr-2">React</span>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <span className="inline-block py-1 pr-2">Redux</span>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <span className="inline-block py-1 pr-2">Laravel</span>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <span className="inline-block py-1 pr-2">MySQL</span>
              </Typography>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center border-t border-neutral-600 py-4">
          <Typography
            variant="small"
            className="mb-2 text-center font-normal text-neutral-300"
          >
            &copy; {currentYear} <a href="https://my-portfolio-qlv1.onrender.com/" className="hover:text-neutral-100">Mario Petkov</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;