import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import sample from "@/public/humansPage/Prof.png";
import priyansh from "@/public/humansPage/priyansh.jpg";
import bhavik from "@/public/humansPage/bhavik.jpg";
import samyak from "@/public/humansPage/samyak.jpeg";
import divyansh from "@/public/humansPage/divyansh.jpeg";
import vansh from "@/public/humansPage/vansh.jpeg";
import aditya from "@/public/humansPage/aditya.jpg";
import varun from "@/public/humansPage/varun.jpg";
import deepanshu from "@/public/humansPage/deepanshu.jpg";
import sambhav from "@/public/humansPage/sambhav.jpg";
import tushir from "@/public/humansPage/tushir.jpeg";
import aman from "@/public/humansPage/aman.jpeg";
import aish from "@/public/humansPage/aish.jpg";
import prajjwal from "@/public/humansPage/prajjwal.jpg";
import aryan from "@/public/humansPage/aryan.jpg";
import prajwal from "@/public/humansPage/prajwal.jpg";
import manoj from "@/public/humansPage/manoj.jpeg";
import nitya from "@/public/humansPage/nitya.jpg";

// Mentors
import aanchal from "@/public/humansPage/aanchal.jpeg";
import khushi from "@/public/humansPage/khushi.jpg";
import manan from "@/public/humansPage/manan.jpg";
import priyansh_garg from "@/public/humansPage/priyansh_garg.jpeg";
import akshat from "@/public/humansPage/akshat.jpg";
import sanskriti from "@/public/humansPage/sanskriti.jpg";
import yashika from "@/public/humansPage/yashika.jpeg";
import sagar from "@/public/humansPage/sagar.jpg";
import siddhant from "@/public/humansPage/siddhant.jpeg";
import vedant from "@/public/humansPage/vedant.jpeg";
import ashu from "@/public/humansPage/ashu.jpg";
import ashish from "@/public/humansPage/ashish.jpg";
import gautam from "@/public/humansPage/gautam.jpg";
import chaitanya from "@/public/humansPage/chaitanaya.jpg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Humans | HackSphere",
  description:
    "Meet the team behind HackSphere'24! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, SRCAS, HackSphere, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | HackSphere",
    description:
      "Meet the team behind HackSphere'24! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://hackbyte.in/humans",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackSphere - SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  const organizerData = [
    {
      name: "Bhavik",
      role: "Event Coordinator",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Samyak",
      role: "Event Coordinator",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Priyansh",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Divyansh",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Vansh",
      role: "Web Lead",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Aditya",
      role: "Design Lead",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Varun",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Deepanshu",
      role: "PR & Marketing Lead",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Sambhav",
      role: "Speaker & Workshop Lead",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Tushir",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Aman",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Aishwarya",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Prajjwal",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Aryan",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Prajwal",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Manoj",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Nitya",
      role: "Organizer",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
  ];

  const mentorData = [
    {
      name: "Mark",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Elon",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Sundar",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Narender",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Akshat",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Sanskriti",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Yashika",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Sagar",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Siddhant",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Vedant",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Ashu",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Ashish",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Gautam",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
    {
      name: "Chaitanya",
      profilepic: sample,
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                  text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                THE TEAM
              </p>
            </div>
            <p
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Meet the humans of
              <br /> Hacksphere' 24
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Mentors"
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <TabsList className="mb-8 md:mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Mentors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Mentors
            </TabsTrigger>
            <TabsTrigger
              value="Organizers"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl 
                text-xl leading-7"
            >
              Organizers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Mentors">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {mentorData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Organizers">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                place-content-center place-items-center gap-10"
            >
              {organizerData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Code to
            <br /> Innovate !
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
