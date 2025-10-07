import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ChatBot from "@/components/ChatBot";
import {
  BadgeCheck,
  Download,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ExternalLink,
  Briefcase,
  Award,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const experiences = [
    {
      company: "Cultus Education & Technology Services",
      role: "AI Programmer Trainee",
      period: "Aug 2025 – Present",
      description: "Building intelligent AI solutions and learning cutting-edge technologies",
    },
    {
      company: "Google Cloud Arcade Facilitator Program",
      role: "Student",
      period: "Jul–Aug 2024",
      description: "Mastering cloud technologies through hands-on labs and challenges",
    },
    {
      company: "Pantechelearning",
      role: "Data Science Intern",
      period: "Apr–May 2023",
      description: "Analyzed datasets and built predictive models",
    },
    {
      company: "Gateway Software Solutions",
      role: "Android Developer Intern",
      period: "Feb 2023",
      description: "Developed mobile applications with modern Android tools",
    },
    {
      company: "Quantum Learnings",
      role: "Cyber Security Intern",
      period: "Dec 2022 – Jan 2023",
      description: "Explored security protocols and ethical hacking",
    },
  ];

  const certifications = [
    "Neo4j Certified Professional",
    "IBM Transfer Learning",
    "Google Generative AI",
    "NPTEL Programming in C",
    "Edunet TechSaksham AI",
    "Skill Nation Power BI",
    "Jetson AI",
    "AR/VR with Naan Mudhalvan",
    "Great Learning Arduino vs Raspberry Pi",
  ];

  const projects = [
    {
      title: "Automated Weather Classification",
      description: "ML model for weather pattern recognition using IBM Watson",
      tech: "Python • TensorFlow • IBM Cloud",
    },
    {
      title: "Jetson AI Prototype",
      description: "Edge AI application on NVIDIA Jetson platform",
      tech: "Python • CUDA • Deep Learning",
    },
    {
      title: "Power BI Business Dashboard",
      description: "Interactive analytics dashboard for business insights",
      tech: "Power BI • DAX • SQL",
    },
    {
      title: "Android App Development",
      description: "Feature-rich mobile applications with modern UI/UX",
      tech: "Java • Android Studio • Firebase",
    },
    {
      title: "AI Chatbot Assistant",
      description: "Conversational AI with natural language processing",
      tech: "Python • NLP • TensorFlow",
    },
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "HTML/CSS", level: 88 },
    { name: "JavaScript", level: 82 },
    { name: "SQL", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Cloud Tech", level: 78 },
    { name: "TensorFlow", level: 85 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Scikit-learn", level: 87 },
  ];

  const codingProfiles = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LeetCode", icon: Code2, url: "#" },
    { name: "Kaggle", icon: Award, url: "#" },
    { name: "HackerRank", icon: Code2, url: "#" },
  ];

  const socialProfiles = [
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:malini@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins">
              Malini P
            </h1>
            <BadgeCheck className="h-10 w-10 text-primary" fill="currentColor" />
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground mb-2 font-medium">
            She/Her
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            AI Programmer (TNSDC × Cultus Education)
          </h2>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Mastering Cloud Tech at Google Cloud Arcade
          </p>
          
          <p className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl mx-auto">
            "Building intelligent systems with data, code, and creativity."
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-smooth">
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-smooth border-2">
              <Mail className="mr-2 h-5 w-5" />
              Connect with Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            About Me
          </h2>
          
          <Card className="p-8 shadow-card hover-lift">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I'm Malini — an <span className="font-semibold text-primary">AI Programmer</span> passionate about exploring 
              Artificial Intelligence, Cloud Technology, and Data Science. Currently associated with Cultus Education and TNSDC, 
              I love turning data into insights and ideas into intelligent applications.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My foundation in Electronics and Communication Engineering helps me merge creativity with logic to craft 
              smart, efficient tech solutions.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {["AI", "Cloud", "Data Science", "Python", "Java", "Developer", "Innovator"].map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-sm px-4 py-1">
                  {keyword}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold font-poppins text-primary">
                    {exp.company}
                  </h3>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="font-medium mb-2">{exp.role}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Certifications & Achievements
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-4 text-center shadow-soft hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="font-medium text-sm">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code2 className="h-8 w-8 text-primary" />
            Projects
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold font-poppins mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm font-medium mb-4 text-secondary">{project.tech}</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary transition-all duration-1000 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          
          <Card className="max-w-3xl mx-auto p-8 shadow-card hover-lift">
            <h3 className="text-2xl font-semibold font-poppins mb-2 text-primary">
              B.E. Electronics and Communication Engineering
            </h3>
            <p className="text-lg mb-4">
              Dr. Sivanthi Aditanar College of Engineering, Thoothukudi
            </p>
            <Badge variant="secondary" className="mb-4">2020 – 2024</Badge>
            <p className="text-muted-foreground">
              Actively participated in intercollege and IEEE events, developing technical and leadership skills.
            </p>
          </Card>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            💻 Coding Profiles
          </h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 text-center shadow-soft hover-lift cursor-pointer group">
                  <profile.icon className="h-12 w-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-smooth" />
                  <p className="font-medium">{profile.name}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            🌐 Social Media
          </h2>
          
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6">
            {socialProfiles.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-16 w-16 p-0 hover:scale-110 hover:shadow-glow transition-smooth"
                >
                  <social.icon className="h-7 w-7" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 text-center shadow-card hover:shadow-glow transition-smooth">
            <Download className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-semibold font-poppins mb-4">
              Download My Resume
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive overview of my experience, skills, and achievements
            </p>
            <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-smooth">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's build something intelligent together 💡
          </p>
          
          <Card className="max-w-2xl mx-auto p-8 shadow-card">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-primary">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Malini P. Built with passion and code. ✨
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;
