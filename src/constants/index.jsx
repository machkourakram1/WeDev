import {Settings, Users, Award, Code, Monitor, Layers, Rocket } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", id: "features" },
  { label: "Workflow", id: "workflow" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Software Developer",
    image: user1,
    text: "Thanks to the coding courses provided by WeDev, I was able to transition into a career as a software developer. The courses were comprehensive, easy to follow, and taught me everything I needed to know to succeed in the industry.",
  },
  {
    user: "Jane Smith",
    company: "Web Developer",
    image: user2,
    text: "I'm grateful for the coding education I received from WeDev. It equipped me with the skills and knowledge necessary to become a proficient web developer. The instructors were knowledgeable, and the hands-on projects were invaluable in building my portfolio.",
  },
  {
    user: "David Johnson",
    company: "App Developer",
    image: user3,
    text: "WeDev's coding courses provided me with a solid foundation in app development. The curriculum was well-structured, and the practical exercises allowed me to apply what I learned in real-world scenarios. I highly recommend WeDev to anyone looking to kickstart their career in coding.",
  },
  {
    user: "Emma Wilson",
    company: "Software Engineer",
    image: user4,
    text: "The coding bootcamp at WeDev was a game-changer for me. It provided me with the skills and confidence to pursue a career in software engineering. The instructors were supportive, and the collaborative learning environment fostered growth and innovation.",
  },
  {
    user: "Adam Brown",
    company: "Full Stack Developer",
    image: user5,
    text: "Enrolling in WeDev's coding courses was one of the best decisions I've made for my career. The curriculum covered a wide range of topics, from front-end to back-end development, and the hands-on projects helped me build a diverse skill set. I'm now a confident full stack developer thanks to WeDev.",
  },
  {
    user: "Sophia Davis",
    company: "UI/UX Designer",
    image: user6,
    text: "I owe my success as a UI/UX designer to WeDev's coding courses. The instructors provided valuable insights into user interface design principles, and the practical exercises allowed me to hone my design skills. WeDev's courses are a must for anyone aspiring to break into the field of UI/UX design.",
  },
];


export const features = [
  {
    icon: <Code />,
    text: "Interactive Coding Exercises",
    description:
      "Practice coding concepts through interactive exercises that reinforce your understanding.",
  },
  {
    icon: <Monitor />,
    text: "Real-Time Code Editor",
    description:
      "Write and test your code in a real-time editor with instant feedback and error highlighting.",
  },
  {
    icon: <Users />,
    text: "Community Support",
    description:
      "Join a vibrant community of learners and mentors for support, guidance, and collaboration.",
  },
  {
    icon: <Layers />,
    text: "Project-Based Learning",
    description:
      "Learn coding by building real-world projects, applying your skills to practical scenarios.",
  },
  {
    icon: <Rocket />,
    text: "Career Resources",
    description:
      "Access career resources such as resume reviews, interview preparation, and job postings to kickstart your coding career.",
  },
  {
    icon: <Award />,
    text: "Free certificats",
    description:
      "Gain free cerfificats based on your level of learning.",
  }
];


export const checklistItems = [
  {
    title: "Interactive Learning Modules",
    description:
      "Engage with interactive learning modules that cover a wide range of coding topics.",
  },
  {
    title: "Practice Coding Challenges",
    description:
      "Sharpen your coding skills with a variety of coding challenges and exercises.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Receive instant feedback on your code to improve your coding proficiency.",
  },
  {
    title: "Collaborative Coding Environment",
    description:
      "Collaborate with peers and mentors in a collaborative coding environment to accelerate your learning.",
  },
];


export const pricingOptions = [
  {
    title: "Starter",
    price: "Free",
    features: [
      "Access to basic coding courses",
      "Limited coding exercises",
      "Community support",
    ],
  },
  {
    title: "Pro",
    price: "$29.99/Month",
    features: [
      "Full access to all coding courses",
      "Unlimited coding exercises",
      "Priority support",
      "Career resources",
    ],
  },
  {
    title: "Team",
    price: "$99.99/Month",
    features: [
      "Team access with up to 5 members",
      "Customized learning paths",
      "Dedicated mentorship",
      "Team collaboration tools",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
