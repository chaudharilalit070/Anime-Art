import logo from './logo.png';
import banner from './banner.mp4';
import { Quote } from 'lucide-react';
import money from './money.png';
import imgslider from "./imgslider.png";
import imgslider2 from "./imgslider2.png";
import imgslider3 from "./imgslider3.png";
import imgslider1 from "./imgslider1.png";


export const assets = {
  logo,//menubar
  banner,//header
  money,
  imgslider2,
  imgslider,
  imgslider1,
  imgslider3

};




// inside bgremover
export const steps = [
  {
    step: "Step 1",
    title: "🎨 Choose Your Input Style",
    description: `You can start by uploading a photo or entering a creative text prompt. Upload a clear portrait image for transformation, or type a detailed description like “warrior girl with blue hair in futuristic armor.”`,
  },
  {
    step: "Step 2",
    title: "🧠 Let the Anime AI Transform It",
    description: `Our AI engine will analyze your image or prompt and generate a high-quality anime-style character. Whether you're creating an avatar, fan art, or a fantasy scene — it's handled with artistic precision.`,
  },
  {
    step: "Step 3",
    title: "⬇️ Download or Recreate",
    description: `Preview your anime-style result instantly. Love what you see? Download it in HD, or go back and try a new style, prompt, or image until it's just right for you.`,
  },
];
// bgslider
export const category=["People","Products","Animals","Cars","Graphics"]

//bgprice
export const plans = [
  {
    id: "Basic",
    name: "Basic Package",
    price: 499,
    credits: "100 credits",
    description: "Best for personal use",
    popular: false
  },
  {
    id: "primium",
    name: "primium Package",
    price: 899,
    credits: "250 credits",
    description: "Best for Business use",
    popular: true
  },
  {
    id: "ultimate",
    name: "ultimate Package",
    price: 1499,
    credits: "10000 credits",
    description: "Best for Business use",
    popular: true
  }
];


// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "We are impressed by the AI and think it's the best choice on the market.",
    author: "Anthony Walker",
    handle: "@_webChitect",
  },
  {
    id: 2,
    quote: "This product has drastically improved our workflow and creativity.",
    author: "Sara Thompson",
    handle: "@sara.codes",
  },
  {
    id: 3,
    quote: "The user experience is outstanding — smooth, fast, and intuitive.",
    author: "David Kim",
    handle: "@david_uiux",
  },
  
];


// footer
export const footer = [
  {
    url: "http://facebook.com",
    logo: "https://img.icons8.com/fluent/30/000000/facebook-new.png",
  },
  {
    url: "http://instagram.com",
    logo: "https://img.icons8.com/fluent/30/000000/instagram-new.png",
  },
  {
    url: "http://twitter.com",
    logo: "https://img.icons8.com/fluent/30/000000/twitter.png",
  },
  {
    url: "http://linkedin.com",
    logo: "https://img.icons8.com/fluent/30/000000/linkedin.png",
  },
];
// 2:40 min