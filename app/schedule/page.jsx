import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import leftLeaf from "@/public/schedulePage/leftLeaf.svg";
import rightLeaf from "@/public/schedulePage/rightLeaf.svg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Schedule | HackSphere",
  description:
    "Check out the schedule for HackSphere! Stay updated with the timeline of events and activities happening during  Hackathon.",
  keywords:
    "Hackathon schedule, Timeline, Events, Hacksphere, Coding, Programming, Tech",
  openGraph: {
    title: "Schedule | HackSphere",
    description:
      "Check out the schedule for HackSphere! Stay updated with the timeline of events and activities happening during  hackathon.",
    url: "https://hacksphere.vercel.app/schedule",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackSphere -  Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Schedule() {
  const day1 = [
    {
      event: "Submission Starts",
      time: "01.07.2024",
    },
    {
      event: "Submission Ends",
      time: "24.07.2024",
    },
    {
      event: "Extended Submission",
      time: "26.07.2024",
    },
    
  ];

  const day2 = [
    {
      event: "Release of Finalists",
      time: "05.08.2024",
    },
    {
      event: "Mentorship Sessions",
      time: "07.05.2024 - 09.05.2024",
    },
    
  ];

  const day3 = [
    {
      event: "CheckIn",
      time: "07:00 AM - 07:30 AM",
      duration: "30mins",
    },
    {
      event: "Breakfast",
      time: "7:00 AM - 07:45AM",
      duration: "45mins",
    },
    {
      event: "Inauguration",
      time: "8:00 AM - 08:30AM",
      duration: "30mins",
    },
    {
      event: "Hack Begins",
      time: "08:30 AM",
      duration: "NA",
    },
    {
      event: "Snack",
      time: "10:30 AM",
      duration: "15mins",
    },
    {
      event: "Mentoring - 1",
      time: "11:00 AM",
      duration: "NA",
    },
    {
      event: "Lunch",
      time: "01:00 PM",
      duration: "35mins",
    },
    {
      event: "Mentoring - 2",
      time: "04:30 PM",
      duration: "NA",
    },
    {
      event: "Snacks",
      time: "05:30 PM",
      duration: "15mins",
    },
    {
      event: "Mentoring - 3",
      time: "07:30 PM",
      duration: "NA",
    },
    {
      event: "Dinner",
      time: "08:30 PM",
      duration: "35mins",
    },
    {
      event: "Snacks",
      time: "12:00 AM",
      duration: "15mins",
    },
    {
      event: "Chill Night",
      time: "12:00 AM",
      duration: "NA",
    },
    {
      event: "Mentoring - 4",
      time: "3:00 AM",
      duration: "NA",
    },
    {
      event: "Snacks",
      time: "5:00 AM",
      duration: "15mins",
    },
    {
      event: "Breakfast",
      time: "7:00 AM",
      duration: "35mins",
    },
    {
      event: "Hackends",
      time: "8:30 AM",
      duration: "NA",
    },
    {
      event: "Final Presentation",
      time: "08:30 AM - 10:00 AM",
      duration: "90mins",
    },
    {
      event: "Closing Ceremony",
      time: "11:00 AM",
      duration: "NA",
    },
    {
      event: "Lunch",
      time: "12:00 PM",
      duration: "35mins",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 2xl:px-48 py-40"
      >
        <div className="w-full flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#FFFFFF] font-normal text-[2.25rem] md:text-[5rem]">
              Show Sequence
            </p>
            <p
              className="w-full xl:max-w-[80%] text-[#FFFFFF] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              Join us for a packed day featuring coding challenges and networking sessions. 
              Level up your skills and collaborate with fellow hackers!
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 
            xl:grid-cols-3 pt-8 md:pt-16"
        >
          {/* Day 1 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#E5FFF1] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[3.1rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Round 1
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    PPT Submission Timeline
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  You should create a PPT upto 4 pages which describes your solution. You can mention your tech stack, tools, flowchart, etc,,.
                </p>
              </div>
            </DialogTrigger>

            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                border border-[#E5F1FF] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Round 1 Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#0275F6]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day1.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Day 2 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#E5FFF1] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 255, 183, 0.10) 0%, rgba(109, 217, 156, 0.02) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[3.8rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Finalists
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Finalist Release & Online Mentoring Session Timeline
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  The selected teams announcement! The selected teams will have Mentoring Sessions from experts.
                </p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                rounded-[8px] border border-[#E5FFF1] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 255, 183, 0.10) 0%, rgba(109, 217, 156, 0.02) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Announcements Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#1FD26C]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day2.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Day 3 */}
          <Dialog>
            <DialogTrigger>
              <div
                className="flex flex-col justify-start items-center h-[300px] md:h-[400px] 
                  gap-6 md:gap-8 px-4 py-8 md:px-8 md:py-16 cursor-pointer rounded-[8px] 
                  border border-[#FFFAEF] hover:scale-[1.01] transition-transform 
                  duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(129.97% 124.9% at 0% 6.52%, #38351C 0%, rgba(56, 53, 28, 0.17) 100%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center gap-0">
                    <Image
                      src={leftLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                    <p
                      className="text-white text-center font-medium text-[3rem] 
                        lg:text-[4.125rem]"
                      style={{
                        textShadow: "0px 0px 100px rgba(242, 210, 59, 0.80)",
                      }}
                    >
                      Finale
                    </p>
                    <Image
                      src={rightLeaf}
                      alt="leaf"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                    />
                  </div>
                  <p
                    className="font-medium text-[1rem] md:text-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    The Final Showdown
                  </p>
                </div>

                <p
                  className="text-[#D1CAC7] font-[Inter] text-center font-normal 
                    text-[1rem] md:text[1.125rem]"
                >
                  The hackathon begins in offline mode at 14/08/2024. Get all your preparations done before that!
                </p>
              </div>
            </DialogTrigger>

            <DialogContent
              className="max-w-[90%] lg:max-w-[800px] py-6 md:py-12 px-0 md:px-[4.5rem] 
                rounded-[8px] border border-[#FFFAEF] backdrop:filter backdrop-blur-[32px]"
              style={{
                borderRadius: "8px",
                background:
                  "radial-gradient(129.97% 124.9% at 0% 6.52%, #38351C 0%, rgba(56, 53, 28, 0.17) 100%)",
              }}
            >
              <DialogHeader>
                <DialogTitle
                  className="text-[#F5F0D8] text-center font-normal text-[2.25rem]
                    md:text-[3rem]"
                >
                  Finale Timeline
                </DialogTitle>
                <DialogDescription className="text-white">
                  <ScrollArea className="h-[500px] lg:h-[350px] w-full overflow-auto">
                    <Table>
                      <TableHeader className="bg-[#F2D23B]">
                        <TableRow className="text-[1rem] md:text-[1.5rem] font-medium">
                          <TableHead>Event</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day3.map((event, index) => (
                          <TableRow
                            key={index}
                            className="text-[1rem] md:text-[1.125rem] font-normal"
                          >
                            <TableCell className="text-left">
                              {event.event}
                            </TableCell>
                            <TableCell className="text-left">
                              {event.time}
                            </TableCell>
                            <TableCell>{event.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
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
