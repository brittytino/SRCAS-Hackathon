import Navbar from "@/components/Navbar";
import ThemeTitle from "@/components/ThemeTitle";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HacksphereLogo } from "@/components/HacksphereLogo";
import TextAnimation from "@/components/TextAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import StatisticCard from "@/components/StatisticCard";
import NewsLetter from "@/components/NewsLetter";
import "./faq/page.css";
import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

export default function Home() {
  const statisticsData = [
    {
      number: 3,
      label: "Sessions",
      description: "To help you get some better knowledge from the experts!",
    },
    {
      number: 15,
      label: "Special Prizes ",
      description: "Seize the opportunity to pursue prizes beyond the first and second place.",
    },
    {
      number: 30,
      label: "Contributors",
      description: "To optimize your experience with HackSphere!",
    },
    {
      number: 20,
      label: "Mentors",
      description: "To Assist you throughout the hackathon!",
    },
  ];

  const images = [
    "/footer/sdg/1.png",
    "/footer/sdg/2.png",
    "/footer/sdg/3.png",
    "/footer/sdg/4.png",
    "/footer/sdg/5.png",
    "/footer/sdg/6.png",
    "/footer/sdg/7.png",
    "/footer/sdg/8.png",
    "/footer/sdg/9.png",
    "/footer/sdg/10.png",
    "/footer/sdg/11.png",
    "/footer/sdg/12.png",
    "/footer/sdg/13.png",
    "/footer/sdg/14.png",
    "/footer/sdg/15.png",
    "/footer/sdg/16.png",
    "/footer/sdg/17.png",
  ];

  const themes = [
  {
    title: "Theme 1: Education and Empowerment",
    description: "Explore innovative solutions for education and empowerment.",
    problems: [
      {
        title: "T1PS01: Develop a Voice-Based Data Entry System for Accessibility",
        description: "Create a system enabling individuals with limited typing abilities or visual impairments to input data using natural language commands, promoting accessibility in digital interactions.",
        expectedOutcome: "Creation of a voice-based data entry system that enables individuals with limited typing abilities or visual impairments to interact with digital platforms using natural language. This system will promote digital inclusion, aiming to increase digital accessibility for 1 million users globally.",
        SDG: "SDG 10 - Reduced Inequalities",
        type: "Software"
      },
      {
        title: "T1PS02: Create a Microfinance Platform for Women Entrepreneurs",
        description: "Establish a blockchain-powered platform to provide women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship, empowering gender equality and economic growth.",
        expectedOutcome: "Establishment of a blockchain-powered microfinance platform providing women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship. This platform will empower gender equality and economic growth, with a target of supporting 100,000 women entrepreneurs and increasing their business success rates by 40%.",
        SDG: "SDG 5 - Gender Equality, SDG 8 - Decent Work and Economic Growth",
        type: "Software"
      },
      {
        title: "T1PS03: Digital Reputation Management",
        description: "Offer tools and services to monitor and manage online reputation across social media and search engine results, protecting brand integrity and promoting responsible digital citizenship.",
        expectedOutcome: "Development of tools and services for monitoring and managing online reputations across social media and search engines. This service will protect brand integrity and promote responsible digital citizenship, aiming to reduce negative online incidents and improve reputation scores for 5,000 individuals and businesses by 30%.",
        SDG: "SDG 16 - Peace, Justice, and Strong Institutions",
        type: "Software"
      }
    ]
  },
  {
    title: "Theme 2: Sustainable Agriculture and Environmental Conservation",
    description: "Explore innovative solutions for sustainable agriculture and environmental conservation.",
    problems: [
      {
        title: "T2PS01: Precision Agriculture for Sustainable Food Production",
        description: "Implement AI-driven solutions to optimize resource allocation, monitor crop health, and manage pests and diseases, promoting sustainable farming practices and enhancing food security.",
        expectedOutcome: "Implementation of AI-driven tools to optimize resource use, monitor crop health, and manage pests in real-time. This approach will enhance sustainable farming practices, increase crop yields by 15%, and contribute to food security and conservation goals.",
        SDG: "SDG 2 - Zero Hunger, SDG 15 - Life on Land",
        type: "Hardware and Software (any one of the solution is enough)"
      },
      {
        title: "T2PS02: NFT-Based Conservation Funding Platform",
        description: "Establish a platform using NFTs to fund environmental conservation projects, such as wildlife protection and habitat restoration, by tokenizing digital artworks and experiences.",
        expectedOutcome: "Establishment of a platform leveraging NFTs to raise funds for environmental conservation projects. By tokenizing digital artworks and experiences, this platform will generate substantial funding for wildlife protection and habitat restoration, targeting an annual increase of $10 million in conservation investments.",
        SDG: "SDG 14 - Life Below Water, SDG 15 - Life on Land",
        type: "Software"
      },
      {
        title: "T2PS03: Augmented Reality Farming Simulator",
        description: "Design an AR application to simulate farming scenarios, allowing farmers to test crop management strategies virtually before implementation, improving agricultural efficiency and productivity.",
        expectedOutcome: "Development of an AR application allowing farmers to simulate and test crop management strategies virtually. This tool will improve agricultural efficiency and productivity, reducing trial-and-error in actual farming and increasing crop yields by 10% through better planning and resource management.",
        SDG: "SDG 2 - Zero Hunger, SDG 9 - Industry, Innovation, and Infrastructure",
        type: "Software"
      }
    ]
  },
  {
    title: "Theme 3: Smart Renewable Energy",
    description: "Explore innovative solutions for integrating renewable energy sources into smart grids to promote sustainable and efficient energy management.",
    problems: [
      {
        title: "T3PS01: Decentralized Renewable Energy Systems",
        description: "Develop a decentralized renewable energy system that integrates solar, wind, and other renewable sources into local energy grids. This system should optimize energy distribution and storage at the community level.",
        expectedOutcome: "Creation of a decentralized energy system that integrates various renewable sources, reducing dependency on centralized power plants and fossil fuels. This system will increase the adoption of renewable energy by 30% in targeted communities and decrease energy costs by 20%.",
        SDG: "SDG 7 - Affordable and Clean Energy, SDG 11 - Sustainable Cities and Communities",
        type: "Hardware and Software (any one of the solution is enough)"
      },
      {
        title: "T3PS02: AI-Driven Energy Management Platforms",
        description: "Create an AI-driven platform for smart energy management that monitors and optimizes energy usage in real-time for residential and commercial buildings. The platform should also predict and manage peak loads to enhance grid stability.",
        expectedOutcome: "Development of an AI-driven energy management platform that reduces energy consumption by 15% and enhances grid stability by predicting and managing peak loads. This platform will contribute to more efficient energy use and lower energy bills for users.",
        SDG: "SDG 7 - Affordable and Clean Energy, SDG 9 - Industry, Innovation, and Infrastructure",
        type: "Software"
      },
      {
        title: "T3PS03: Blockchain for Renewable Energy Trading",
        description: "Implement a blockchain-based platform for peer-to-peer renewable energy trading. This platform will allow individuals and businesses to buy, sell, and trade excess renewable energy directly, promoting decentralized energy markets.",
        expectedOutcome: "Establishment of a blockchain-based energy trading platform that facilitates peer-to-peer trading of renewable energy. This will increase the efficiency of energy markets, empower consumers, and potentially reduce energy waste by 25%.",
        SDG: "SDG 7 - Affordable and Clean Energy, SDG 12 - Responsible Consumption and Production",
        type: "Software"
      }
    ]
  }
];


  const rules = [
  {
    title: "Rules!",
    description: "Here the most basic rules are mentioned. Go through the FAQ page to know more about HackSphere' 24!",
    problems: [
      {
        title: "Team up (4 max) for best results."
      },
      {
        title: "Be original, but use open-source tools ethically."
      },
      {
        title: "Max 4 teams only per institution."
      },
      {
        title: "Idea submission should be in the following PPT format",
        link: "https://docs.google.com/presentation/d/1BB-OEiM0qulFVqKeSRWAhvP5UeMLvNiJ/edit?usp=sharing&ouid=106940595189566853936&rtpof=true&sd=true"
      },
      {
        title: "Present your ideas within the specified time."
      },
      {
        title: "Follow guidelines for a smooth experience."
      }
    ]
  },
];

  return (
    <>
      <div className="bg-black h-auto">
        <Navbar />
        <div className="h-screen w-full relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <video
            src="/hacksphere/HackSphere.webm"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-white text-center p-4">
            <HacksphereLogo className="mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              WELCOME TO HACKSPHERE 2024!
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Unleash Innovation, Embrace Sustainability, Empower Change
            </p>
            <div className="space-x-4">
              <Link href="/hackathon">
                <Button className="px-6 py-2 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowTopRightIcon className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button className="px-6 py-2 text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                  Learn More
                  <ArrowTopRightIcon className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-black p-6">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Ready to hack for a cause?
            </h2>
            <p className="text-lg text-center">
              Get ready for an exciting journey at HackSphere 2024! Join us as we tackle global challenges through technology, innovation, and collaboration. This year, we're focusing on themes that matter. Dive into our problems and find your passion project.
            </p>
          </div>

          <div className="flex flex-col items-center bg-black p-6">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Themes and Problems
              </h2>
              {themes.map((theme, index) => (
                <Accordion key={index} className="mb-4">
                  <AccordionItem value={theme.title}>
                    <AccordionTrigger>{theme.title}</AccordionTrigger>
                    <AccordionContent>
                      <p>{theme.description}</p>
                      <ul className="list-disc ml-5">
                        {theme.problems.map((problem, idx) => (
                          <li key={idx} className="mb-2">
                            <strong>{problem.title}</strong>: {problem.description}
                            <br />
                            <em>Expected Outcome:</em> {problem.expectedOutcome}
                            <br />
                            <em>SDG:</em> {problem.SDG}
                            <br />
                            <em>Type:</em> {problem.type}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statisticsData.map((stat, index) => (
                <StatisticCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 text-white mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Social Media
            </h2>
            <div className="flex justify-center space-x-4">
              <SocialMediaIcon Icon={TwitterLogoIcon} href="https://twitter.com/HackSphere" />
              <SocialMediaIcon Icon={InstagramLogoIcon} href="https://instagram.com/HackSphere" />
              <SocialMediaIcon Icon={LinkedInLogoIcon} href="https://linkedin.com/company/HackSphere" />
              <SocialMediaIcon Icon={DiscordLogoIcon} href="https://discord.com/invite/HackSphere" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-black p-6">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Rules
            </h2>
            <Accordion className="mb-4">
              {rules.map((rule, index) => (
                <AccordionItem key={index} value={rule.title}>
                  <AccordionTrigger>{rule.title}</AccordionTrigger>
                  <AccordionContent>
                    <p>{rule.description}</p>
                    <ul className="list-disc ml-5">
                      {rule.problems.map((problem, idx) => (
                        <li key={idx} className="mb-2">
                          <strong>{problem.title}</strong>
                          {problem.link && (
                            <a href={problem.link} target="_blank" className="text-blue-500 hover:underline ml-2">PPT format</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col items-center bg-black p-6">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Newsletter
            </h2>
            <NewsLetter />
          </div>
        </div>
        
        <FooterAnimation images={images} />
        <Footer />
      </div>
    </>
  );
}
