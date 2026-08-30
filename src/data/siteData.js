import {
  Search, PhoneCall, Handshake, ClipboardList,
  Truck, Snowflake, Container, PackageOpen, Box, Mountain,
  ShieldCheck, MessageSquare, Eye, UserCheck,
  Linkedin, Facebook, Instagram, Layers, Youtube
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export const trustIndicators = [
  { icon: ShieldCheck, label: 'Reliable Dispatch' },
  { icon: MessageSquare, label: 'Broker Communication' },
  { icon: Handshake, label: 'Rate Negotiation' },
  { icon: UserCheck, label: 'Carrier Focused' },
]

export const stats = [
  { value: 15000, suffix: '+', label: 'Loads Dispatched' },
  { value: 1000, suffix: '+', label: 'Carrier Partners' },
  { value: 50, suffix: '', label: 'States Covered' },
  { value: 24, suffix: '/7', label: 'Dispatch Support' },
]

export const whyCards = [
  {
    icon: Search,
    title: 'Find the Right Loads',
    text: 'We search for freight opportunities based on your equipment, preferred lanes, and availability.',
  },
  {
    icon: PhoneCall,
    title: 'Broker Communication',
    text: 'We communicate with brokers and help manage load details throughout the booking process.',
  },
  {
    icon: Handshake,
    title: 'Rate Negotiation',
    text: 'We discuss rates with brokers and work toward competitive opportunities for our carrier partners.',
  },
  {
    icon: ClipboardList,
    title: 'Dispatch Management',
    text: 'We help coordinate load information, paperwork, pickup details, and delivery updates.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Truck',
    text: 'Share your equipment type, preferred lanes, and availability.',
  },
  {
    number: '02',
    title: 'We Search for Freight',
    text: 'Our dispatch team looks for loads that match your requirements.',
  },
  {
    number: '03',
    title: 'We Handle the Broker',
    text: 'We communicate with brokers, discuss load details, and negotiate rates.',
  },
  {
    number: '04',
    title: 'You Drive, We Manage',
    text: 'Once the load is booked, we help coordinate the dispatch process and paperwork.',
  },
]

export const equipmentList = [
  { icon: Container, name: 'Dry Van', text: 'Reliable dispatch support for general freight and dry van carriers.' },
  { icon: Snowflake, name: 'Reefer', text: 'Dedicated dispatch support for temperature-controlled freight.' },
  { icon: Truck, name: 'Flatbed', text: 'Load coordination for open-deck and specialized flatbed hauls.' },
    { icon: Layers, name: 'Step Deck', text: 'Dispatch support for tall or oversized freight needing a lowered deck.' },
  { icon: PackageOpen, name: 'Power Only', text: 'Dispatch support tailored to power-only trailer arrangements.' },

  { icon: Box, name: 'Box Truck', text: 'Freight matching and dispatch help for box truck operators.' },
  { icon: Mountain, name: 'Hotshot', text: 'Dispatch coordination built around hotshot lanes and timelines.' },
]

export const testimonials = [
  {
    name: 'Michael R.',
    role: 'Owner Operator',
    quote: 'Vertex Systems makes the dispatch side much easier. Their team keeps communication organized while I stay focused on the road.',
  },
  {
    name: 'James T.',
    role: 'Fleet Owner',
    quote: 'The communication and load coordination have made my day-to-day operation much smoother.',
  },
  {
    name: 'Daniel K.',
    role: 'Independent Carrier',
    quote: 'Having someone handle load searching and broker communication saves me valuable time.',
  },
  {
    name: 'Robert P.',
    role: 'Owner Operator',
    quote: 'They keep me updated at every step, from pickup to delivery. I always know where things stand.',
  },
  {
    name: 'Anthony M.',
    role: 'Fleet Owner',
    quote: 'Rate negotiation used to take up so much of my time. Now the Vertex team handles that conversation for me.',
  },
  {
    name: 'Carlos V.',
    role: 'Independent Carrier',
    quote: 'Paperwork and documentation are organized and easy to find whenever I need them.',
  },
  {
    name: 'Steven B.',
    role: 'Owner Operator',
    quote: 'Their broker communication is quick and professional, which keeps my loads moving without delays.',
  },
  {
    name: 'Marcus D.',
    role: 'Reefer Carrier',
    quote: 'They understand the specific needs of temperature-controlled freight and plan my lanes accordingly.',
  },
  {
    name: 'William H.',
    role: 'Flatbed Owner Operator',
    quote: 'Dispatch support built around my equipment type has made finding suitable loads a lot simpler.',
  },
]

export const coreValues = [
  { icon: ShieldCheck, title: 'Reliability', text: 'Our carrier partners should be able to depend on consistent dispatch support.' },
  { icon: MessageSquare, title: 'Communication', text: 'Clear and timely communication is at the heart of our service.' },
  { icon: Eye, title: 'Transparency', text: 'We believe in straightforward processes and clear information.' },
  { icon: UserCheck, title: 'Carrier First', text: 'Our approach is built around understanding and supporting carrier needs.' },
]

export const services = [
  {
    title: 'Load Finding',
    summary: 'We search for available freight based on your equipment, preferred lanes, and availability.',
    features: ['Load searching', 'Equipment matching', 'Lane preferences', 'Freight opportunities'],
  },
  {
    title: 'Broker Communication',
    summary: 'We communicate with brokers and help manage the details of your loads.',
    features: ['Broker calls', 'Email communication', 'Load verification', 'Pickup & delivery information'],
  },
  {
    title: 'Rate Negotiation',
    summary: 'We communicate with brokers regarding load rates and work toward competitive opportunities.',
    features: ['Rate discussions', 'Load evaluation', 'Broker communication', 'Carrier requirements'],
  },
  {
    title: 'Documentation',
    summary: 'We help keep important load and dispatch paperwork organized.',
    features: ['Rate confirmations', 'Carrier documents', 'Load paperwork', 'Document organization'],
  },
  {
    title: 'Load Management',
    summary: 'We help coordinate the dispatch process from pickup through delivery.',
    features: ['Pickup updates', 'Delivery updates', 'Broker communication', 'Load status coordination'],
  },
  {
    title: 'Dedicated Dispatch Support',
    summary: 'Get consistent dispatch assistance based on your equipment, preferred lanes, and operating needs.',
    features: ['Dedicated support', 'Load planning', 'Carrier communication', 'Dispatch assistance'],
  },
]

export const equipmentOptions = [
  'Dry Van', 'Reefer', 'Flatbed', 'Power Only', 'Box Truck', 'Hotshot', 'Other',
]

export const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export const footerServices = [
  'Load Finding', 'Broker Communication', 'Rate Negotiation', 'Documentation', 'Load Management',
]
