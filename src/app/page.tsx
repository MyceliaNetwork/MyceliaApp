import Link from "next/link";

import { Hero } from "./hero";
import { ContactForm } from "./contact-form";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ABBBB4]/50 to-[#FAE7DF] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="absolute right-0 top-0 p-8">
          <Link href="https://github.com/MyceliaNetwork/mycelia">
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900/60 transition-colors duration-200 hover:text-gray-900/80"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </Link>
        </div>
        <Hero />

        <div className="flex flex-wrap justify-between text-gray-700">
          <div className="w-full p-4 md:w-1/4">
            <svg
              className="pb-2"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path>
              <path d="M12 16v5"></path>
              <path d="M16 16v4a1 1 0 0 0 1 1h4"></path>
              <path d="M8 16v4a1 1 0 0 1 -1 1h-4"></path>
            </svg>
            <h2 className="bg-gradient-to-r from-gray-900 to-[#ABBBB4] bg-clip-text text-2xl font-bold text-transparent">
              Effortless Function Deployment
            </h2>
            <p className="text-md">
              Harness the flexibility of our RustSDK to create scalable
              stateless actors, that respond to HTTP requests with speed and
              ease.
            </p>
          </div>
          <div className="w-full p-4 md:w-1/4">
            <svg
              className="pb-2"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
              <path d="M9 13l3 3l-3 3"></path>
            </svg>
            <h2 className="bg-gradient-to-r from-gray-900 to-[#ABBBB4] bg-clip-text text-2xl font-bold text-transparent">
              Build Processing Pipelines with Ease
            </h2>
            <p className="text-md">
              We make it simple to develop robust, continuous workers, enabling
              high performance data processing to meet your application demands.
            </p>
          </div>
          <div className="w-full p-4 md:w-1/4">
            <svg
              className="pb-2"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path>
              <path d="M4 6v6c0 1.453 2.755 2.665 6.414 2.941"></path>
              <path d="M20 11v-5"></path>
              <path d="M4 12v6c0 1.579 3.253 2.873 7.383 2.991"></path>
              <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
            </svg>
            <h2 className="bg-gradient-to-r from-gray-900 to-[#ABBBB4] bg-clip-text text-2xl font-bold text-transparent">
              Integrated Data Management
            </h2>
            <p className="text-md">
              Access relational databases, enjoy seamless object storage, and
              leverage caching capabilities, all through our intuitive RustSDK,
              simplifying your data management needs.
            </p>
          </div>
          <div className="w-full p-4 md:w-1/4 ">
            <svg
              className="pb-2"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M10 20h-6"></path>
              <path d="M14 20h6"></path>
              <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z"></path>
              <path d="M12 6v2"></path>
              <path d="M12 11v.01"></path>
            </svg>
            <h2 className="bg-gradient-to-r from-gray-900 to-[#ABBBB4] bg-clip-text text-2xl font-bold text-transparent">
              Unified Event & Configuration Solutions
            </h2>
            <p className="text-md ">
              Iterate quickly using our managed Event Queues, PubSub, Config
              Management, and Secret Management services, all effortlessly
              accessible through our SDK for unparalleled scalability and
              simplicity.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
