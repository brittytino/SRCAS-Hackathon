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
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

export default function Home() {
  const statisticsData = [
    {
      number: 3,
      label: "Sessions",
      description:
        "To help you get some better knowledge from the experts!",
    },
    {
      number: 15,
      label: "Special Prizes",
      description:
        "Seize the opportunity to pursue prizes beyond the first and second place.",
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
      description:
        "Explore innovative solutions for education and empowerment.",
      problems: [
        {
          title:
            "T1PS01: Develop a Voice-Based Data Entry System for Accessibility",
          description:
            "Create a system enabling individuals with limited typing abilities or visual impairments to input data using natural language commands, promoting accessibility in digital interactions.",
          expectedOutcome:
            "Creation of a voice-based data entry system that enables individuals with limited typing abilities or visual impairments to interact with digital platforms using natural language. This system will promote digital inclusion, aiming to increase digital accessibility for 1 million users globally.",
          SDG: "SDG 10 - Reduced Inequalities",
          type: "Software",
        },
        {
          title:
            "T1PS02: Create a Microfinance Platform for Women Entrepreneurs",
          description:
            "Establish a blockchain-powered platform to provide women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship, empowering gender equality and economic growth.",
          expectedOutcome:
            "Establishment of a blockchain-powered microfinance platform providing women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship. This platform will empower gender equality and economic growth, with a target of supporting 100,000 women entrepreneurs and increasing their business success rates by 40%.",
          SDG:
            "SDG 5 - Gender Equality, SDG 8 - Decent Work and Economic Growth",
          type: "Software",
        },
        {
          title: "T1PS03: Digital Reputation Management",
          description:
            "Offer tools and services to monitor and manage online reputation across social media and search engine results, protecting brand integrity and promoting responsible digital citizenship.",
          expectedOutcome:
            "Development of tools and services for monitoring and managing online reputations across social media and search engines. This service will protect brand integrity and promote responsible digital citizenship, aiming to reduce negative online incidents and improve reputation scores for 5,000 individuals and businesses by 30%.",
          SDG: "SDG 16 - Peace, Justice, and Strong Institutions",
          type: "Software",
        },
      ],
    },
    {
      title: "Theme 2: Sustainable Agriculture and Environmental Conservation",
      description:
        "Explore innovative solutions for sustainable agriculture and environmental conservation.",
      problems: [
        {
          title:
            "T2PS01: Precision Agriculture for Sustainable Food Production",
          description:
            "Implement AI-driven solutions to optimize resource allocation, monitor crop health, and manage pests and diseases, promoting sustainable farming practices and enhancing food security.",
          expectedOutcome:
            "Implementation of AI-driven tools to optimize resource use, monitor crop health, and manage pests in real-time. This approach will enhance sustainable farming practices, increase crop yields by 15%, and contribute to food security and conservation goals.",
          SDG: "SDG 2 - Zero Hunger, SDG 15 - Life on Land",
          type: "Hardware and Software (any one of the solution is enough)",
        },
        {
          title:
            "T2PS02: NFT-Based Conservation Funding Platform",
          description:
            "Establish a platform using NFTs to fund environmental conservation projects, such as wildlife protection and habitat restoration, by tokenizing digital artworks and experiences.",
          expectedOutcome:
            "Establishment of a platform leveraging NFTs to raise funds for environmental conservation projects. By tokenizing digital artworks and experiences, this platform will generate substantial funding for wildlife protection and habitat restoration, targeting an annual increase of $10 million in conservation investments.",
          SDG: "SDG 14 - Life Below Water, SDG 15 - Life on Land",
          type: "Software",
        },
        {
          title:
            "T2PS03: Augmented Reality Farming Simulator",
          description:
            "Design an AR application to simulate farming scenarios, allowing farmers to test crop management strategies virtually before implementation, improving agricultural efficiency and productivity.",
          expectedOutcome:
            "Development of an AR application allowing farmers to simulate and test crop management strategies virtually. This tool will improve agricultural efficiency and productivity, reducing trial-and-error in actual farming and increasing crop yields by 10% through better planning and resource management.",
          SDG: "SDG 2 - Zero Hunger, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software",
        },
      ],
    },
    {
      title: "Theme 3: Smart Renewable Energy",
      description:
        "Explore innovative solutions for integrating renewable energy sources into smart grids to promote sustainable and efficient energy management.",
      problems: [
        {
          title:
            "T3PS01: Decentralized Renewable Energy Systems",
          description:
            "Develop a decentralized renewable energy system that integrates solar, wind, and other renewable sources into local energy grids. This system should optimize energy distribution and storage at the community level.",
          expectedOutcome:
            "Creation of a decentralized energy system that integrates various renewable sources, reducing dependency on centralized power plants and fossil fuels. This system will increase the adoption of renewable energy by 30% in targeted communities and decrease energy costs by 20%.",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 11 - Sustainable Cities and Communities",
          type: "Hardware and Software (any one of the solution is enough)",
        },
        {
          title:
            "T3PS02: AI-Driven Energy Management Platforms",
          description:
            "Create an AI-driven platform for smart energy management that monitors and optimizes energy usage in real-time for residential and commercial buildings. The platform should also predict and manage peak loads to enhance grid stability.",
          expectedOutcome:
            "Development of an AI-driven energy management platform that reduces energy consumption by 15% and enhances grid stability by predicting and managing peak loads. This platform will contribute to more efficient energy use and lower energy bills for users.",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software",
        },
        {
          title:
            "T3PS03: Blockchain for Renewable Energy Trading",
          description:
            "Implement a blockchain-based platform for peer-to-peer renewable energy trading. This platform will allow individuals and businesses to buy, sell, and trade excess renewable energy directly, promoting decentralized energy markets.",
          expectedOutcome:
            "Establishment of a blockchain-based energy trading platform that facilitates peer-to-peer trading of renewable energy. This will increase the efficiency of energy markets, empower consumers, and potentially reduce energy waste by 25%.",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 12 - Responsible Consumption and Production",
          type: "Software",
        },
      ],
    },
  ];

  const rules = [
    {
      title: "Rules!",
      description:
        "Here the most basic rules are mentioned. Go through the FAQ page to know more about HackSphere' 24!",
      problems: [
        {
          title: "Team up (4 max) for best results.",
        },
        {
          title: "Be original, but use open-source tools ethically.",
        },
        {
          title: "Max 4 teams only per institution.",
        },
        {
          title: "Idea submission:"
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="pb-12">
            <div className="flex flex-col items-center justify-center mb-12 lg:flex-row lg:space-x-8 lg:mb-20">
              <div className="w-full lg:w-1/2">
                <ThemeTitle />
                <TextAnimation />
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <HacksphereLogo />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                href="/register"
                className="text-white bg-hacktober leading-6  text-lg "
              >
                Register Now
                <ArrowTopRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-12 bg-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                HackSphere Statistics
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {statisticsData.map((statistic, index) => (
                  <StatisticCard
                    key={index}
                    number={statistic.number}
                    label={statistic.label}
                    description={statistic.description}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Themes Section */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 text-center">
                Themes and Problem Statements
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-8">
                {themes.map((theme, index) => (
                  <div key={index} className="mt-10">
                    <ThemeTitle title={theme.title} description={theme.description} />
                    <div className="mt-6 grid gap-6">
                      {theme.problems.map((problem, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                          <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            {problem.title}
                          </h3>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            {problem.description}
                          </p>
                          <p className="mt-2 text-sm leading-5 text-gray-600">
                            <strong>Expected Outcome:</strong>{" "}
                            {problem.expectedOutcome}
                          </p>
                          <p className="mt-2 text-sm leading-5 text-gray-600">
                            <strong>SDG:</strong> {problem.SDG}
                          </p>
                          <p className="mt-2 text-sm leading-5 text-gray-600">
                            <strong>Type:</strong> {problem.type}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rules Section */}
          <section className="py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 text-center">
                HackSphere' 24 Rules
              </h2>
              <div className="mt-6 grid gap-6">
                {rules.map((rule, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {rule.title}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      {rule.description}
                    </p>
                    <ul className="mt-2 text-sm leading-5 text-gray-600">
                      {rule.problems.map((item, index) => (
                        <li key={index} className="list-disc ml-6">
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-12">
            <div className="max-w-3xl mx-auto text-center">
              <NewsLetter />
            </div>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <FooterAnimation images={images} />
      <Footer />

      {/* Social Media Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-10 flex space-x-4">
        <SocialMediaIcon
          Icon={TwitterLogoIcon}
          href="https://twitter.com/"
        />
        <SocialMediaIcon
          Icon={InstagramLogoIcon}
          href="https://www.instagram.com/"
        />
        <SocialMediaIcon
          Icon={LinkedInLogoIcon}
          href="https://www.linkedin.com/"
        />
        <SocialMediaIcon
          Icon={DiscordLogoIcon}
          href="https://discord.com/"
        />
      </div>
    </>
  );
}
