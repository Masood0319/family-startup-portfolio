import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  Building2,
  Code2,
  GraduationCap,
  HeartPulse,
  Layers3,
  Megaphone,
  ShoppingBag,
  Workflow,
  Wrench,
} from "lucide-react";

export const company = {
  name: "JanJa",
  tagline: "Build. Automate. Grow.",
  email: "info@janja.com",
  phone: "+92 XXX XXXXXXX",
  location: "Pakistan",
  description:
    "JanJa helps businesses move forward with thoughtful software, digital experiences, and practical automation.",
};

// Replace these platform homepages with JanJa's confirmed social profiles.
export const socialLinks = [
  { label: "LinkedIn", shortLabel: "in", href: "https://www.linkedin.com/" },
  { label: "Instagram", shortLabel: "ig", href: "https://www.instagram.com/" },
  { label: "Facebook", shortLabel: "fb", href: "https://www.facebook.com/" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Our work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  items: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    title: "Web & digital presence",
    description: "Distinctive, fast websites that make it easier for the right people to find and trust you.",
    icon: Layers3,
    category: "Web & Digital Presence",
    items: ["Corporate websites", "Business websites", "School websites", "Doctor and clinic websites", "E-commerce websites", "Landing pages", "Portfolios", "Website redesign", "Website maintenance"],
    outcome: "A clearer first impression and a digital home built around your goals.",
  },
  {
    title: "Custom software",
    description: "Purpose-built tools that bring your team's daily work into one intuitive place.",
    icon: Code2,
    category: "Custom Software & Management Systems",
    items: ["School management systems", "Clinic management systems", "Hospital management systems", "CRM systems", "ERP solutions", "HRM systems", "Inventory management", "Warehouse management", "POS systems", "Booking and appointment systems", "Project management systems"],
    outcome: "Less time spent juggling disconnected tools and repetitive admin.",
  },
  {
    title: "AI & automation",
    description: "Practical automation that takes repetitive work off your team's plate.",
    icon: Bot,
    category: "AI & Business Automation",
    items: ["AI website assistants", "AI customer support agents", "AI receptionists", "AI appointment assistants", "AI lead qualification", "AI document processing", "Workflow automation", "WhatsApp and email automation", "AI-powered knowledge assistants"],
    outcome: "More responsive customer experiences and smoother internal workflows.",
  },
  {
    title: "Digital marketing",
    description: "Consistent brand and growth foundations designed to reach your audience.",
    icon: Megaphone,
    category: "Digital Marketing & Branding",
    items: ["Search engine optimization", "Social media management", "Paid advertising", "Brand identity", "Graphic design", "Content creation", "Lead generation"],
    outcome: "A focused online presence that supports your next stage of growth.",
  },
  {
    title: "Digital transformation",
    description: "A thoughtful path from manual processes to connected digital operations.",
    icon: Workflow,
    category: "Digital Transformation & IT Consulting",
    items: ["Business process digitization", "Database design", "API integrations", "Cloud migration", "Process automation", "Technical consulting"],
    outcome: "A practical roadmap that makes technology work for your organization.",
  },
  {
    title: "Ongoing support",
    description: "Reliable care for the products and platforms your business depends on.",
    icon: Wrench,
    category: "Hosting, Maintenance & Support",
    items: ["Domain and hosting setup", "Website maintenance", "Software maintenance", "Backups", "Security updates", "Deployment", "Technical support"],
    outcome: "A partner to help keep your digital tools maintained and improving.",
  },
];

export type Industry = {
  name: string;
  short: string;
  challenge: string;
  solutions: string[];
  website: string;
  systems: string;
  ai: string;
  image: string;
  icon: LucideIcon;
  tone: string;
};

export const industries: Industry[] = [
  { name: "Education & schools", short: "Make learning operations easier to manage.", challenge: "Disconnected records, manual administration, and limited communication slow down school teams.", solutions: ["School websites & portals", "Student and fee management", "Admissions workflow automation"], website: "Accessible school websites, admissions pages, and family portals.", systems: "Student, fee, attendance, and school-management tools.", ai: "Admissions FAQs, document sorting, and routine message assistance.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80", icon: GraduationCap, tone: "mint" },
  { name: "Healthcare & medical", short: "Create calmer, more connected care journeys.", challenge: "Appointment coordination and paper-heavy records can pull attention away from patients.", solutions: ["Clinic websites & booking", "Patient and appointment systems", "AI-assisted FAQs and reminders"], website: "Clear clinic pages with clinician information and appointment requests.", systems: "Clinic, patient, and appointment-management workflows.", ai: "Care navigation FAQs and appointment reminders, with appropriate human oversight.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80", icon: HeartPulse, tone: "rose" },
  { name: "Manufacturing & industry", short: "Bring everyday operations into clearer view.", challenge: "Inventory, production, and reporting often live across disconnected spreadsheets and tools.", solutions: ["Inventory and warehouse systems", "Operations dashboards", "Workflow and report automation"], website: "Product and capability websites that help buyers understand your offering.", systems: "Inventory, warehouse, and operations-management dashboards.", ai: "Document processing and repeatable workflow assistance for internal teams.", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80", icon: Activity, tone: "amber" },
  { name: "Corporate & professional", short: "Give teams the digital tools to work in sync.", challenge: "Growing teams need better ways to organize client relationships, projects, and internal knowledge.", solutions: ["Corporate websites", "CRM and project platforms", "Knowledge assistants and integrations"], website: "Corporate websites that explain your expertise and make inquiries easy.", systems: "CRM, project-management, and internal knowledge platforms.", ai: "Knowledge assistants grounded in approved company information.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80", icon: Building2, tone: "blue" },
  { name: "Retail & e-commerce", short: "Make browsing, buying, and managing simpler.", challenge: "Customer expectations rise while product, order, and stock management get more complex.", solutions: ["E-commerce storefronts", "POS and stock management", "Customer support automation"], website: "Responsive storefronts, product catalogs, and campaign landing pages.", systems: "E-commerce, POS, order, and stock-management tools.", ai: "Product discovery and common customer-question assistance.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", icon: ShoppingBag, tone: "purple" },
  { name: "Real estate & construction", short: "Connect your projects with the people they serve.", challenge: "Listings, leads, and project details are hard to keep consistent across teams and channels.", solutions: ["Property and project portals", "Lead and inquiry management", "Project update automation"], website: "Property listing, project showcase, and inquiry websites.", systems: "Property, lead, booking, and project-management systems.", ai: "Lead qualification prompts and property information assistants.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80", icon: Building2, tone: "blue" },
  { name: "Hospitality & tourism", short: "Turn discovery into a smoother guest experience.", challenge: "Guests expect quick answers and seamless booking across every touchpoint.", solutions: ["Booking-ready websites", "Reservation management", "AI guest assistants"], website: "Destination and hospitality websites with clear booking journeys.", systems: "Reservation, appointment, and guest-communication workflows.", ai: "Guest assistants for common questions and local information.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", icon: Layers3, tone: "mint" },
  { name: "NGOs & institutions", short: "Make your mission easier to discover and support.", challenge: "Small teams need clear communication and dependable ways to coordinate programs.", solutions: ["Accessible organization websites", "Program and donor tools", "Impact reporting workflows"], website: "Accessible organization websites for programs, updates, and giving.", systems: "Program, volunteer, donor, and reporting-management tools.", ai: "Internal knowledge search and routine document-processing support.", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80", icon: GraduationCap, tone: "amber" },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  skills: string[];
  image: string;
  linkedin: string;
  github?: string;
  isPlaceholder: boolean;
};

// Replace sample names, portraits, roles, and social links with confirmed team information.
export const team: TeamMember[] = [
  { id: "member-01", name: "Nadeem Jamal", role: "Founder & Managing Director", department: "Leadership & Strategy", bio: "Leads company vision, business strategy, technology direction, and client relationships.", skills: ["Product strategy", "Software", "AI & technology"], image: "https://media.licdn.com/dms/image/v2/D4D35AQGAJqBuxLPf4w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1734107023807?e=1795528800&v=beta&t=V4UwA9DM_uOQlsIQIvk63_-Hc7jBXyKLXydTi5r-RaA", linkedin: "#", github: "#", isPlaceholder: true },
  { id: "member-02", name: "Muhammad Idress", role: "Co-founder and Marketing", department: "Engineering", bio: "Oversees technical architecture, software engineering, development standards, and product delivery.", skills: ["Full-stack", "Architecture", "APIs"], image: "#", linkedin: "#", github: "#", isPlaceholder: true },
  { id: "member-03", name: "Ashraf Ali", role: "Management Director", department: "Engineering", bio: "Builds modern web applications, responsive interfaces, and scalable digital experiences.", skills: ["React", "Next.js", "JavaScript"], image: "#", linkedin: "#", github: "#", isPlaceholder: true },
  { id: "member-04", name: "Zubair Jamal", role: "Sales and Marketing", department: "Engineering", bio: "Develops APIs, database structures, management systems, and backend integrations.", skills: ["Python", "Node.js", "Databases"], image: "https://media.licdn.com/dms/image/v2/D4D35AQF6hY-7nxdZvA/profile-framedphoto-shrink_400_400/B4DZdjs2a9HwAc-/0/1749724391371?e=1795528800&v=beta&t=lK-qWC67NKwR36XNrsYz2TEnztxiS_CeR9VTABu2JhQ", linkedin: "#", github: "#", isPlaceholder: true },
  { id: "member-05", name: "Tariq Masood", role: "Software Developer and AI Specialist", department: "Design", bio: "Creates intuitive user experiences, visual identities, and modern digital interfaces.", skills: ["Figma", "UI/UX", "Branding"], image: "https://media.licdn.com/dms/image/v2/D4D03AQF6SQr7M4ZXhg/profile-displayphoto-scale_400_400/B4DaGX6baqGcAg-/0/1793550042036?e=1796256000&v=beta&t=7juJvZRu_VmxKScSWJj-sLeLXgg-032X7rcRFjiYEjY", linkedin: "#", isPlaceholder: true },
];

export type Project = {
  name: string;
  category: "Websites" | "Management Systems" | "AI & Automation" | "E-commerce";
  description: string;
  technologies: string[];
  label: string;
  theme: string;
};

// These are illustrative demo concepts, not verified client engagements.
export const projects: Project[] = [
  { name: "EduCore", category: "Management Systems", description: "A concept platform for bringing school administration and communication together.", technologies: ["Next.js", "TypeScript", "PostgreSQL"], label: "Education platform", theme: "project-green" },
  { name: "MediFlow", category: "Management Systems", description: "A clinic operations concept focused on appointments and patient journeys.", technologies: ["React", "Node.js", "PostgreSQL"], label: "Clinic system", theme: "project-blue" },
  { name: "Invenza", category: "Management Systems", description: "A clear inventory dashboard concept for tracking everyday stock movement.", technologies: ["Next.js", "Charts", "API"], label: "Inventory platform", theme: "project-amber" },
  { name: "Nexora", category: "Websites", description: "A polished corporate web concept built to tell a company's story with clarity.", technologies: ["Next.js", "Tailwind CSS", "Motion"], label: "Corporate website", theme: "project-purple" },
  { name: "AssistIQ", category: "AI & Automation", description: "A sample AI assistant experience for answering common business questions.", technologies: ["AI", "Knowledge base", "API"], label: "AI assistant", theme: "project-violet" },
  { name: "EstatePro", category: "E-commerce", description: "A real estate portal concept that makes property discovery feel effortless.", technologies: ["React", "Maps", "CMS"], label: "Property portal", theme: "project-sand" },
];

export const processSteps = [
  { number: "01", title: "Discover", description: "We listen, ask better questions, and understand the challenge behind the brief." },
  { number: "02", title: "Strategize", description: "We shape a clear solution, priorities, and a practical project roadmap." },
  { number: "03", title: "Design", description: "We map the experience and create a thoughtful interface for real people." },
  { number: "04", title: "Develop", description: "We build, test, and refine the solution with care." },
  { number: "05", title: "Launch", description: "We prepare a smooth handover and help bring your solution to life." },
  { number: "06", title: "Support", description: "We stay available to maintain, improve, and help you scale." },
];
