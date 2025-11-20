import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


// Sample apartments data
const featuredApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Double Room - Private Bathroom",
    description: "2 persons room with a double bed and a private bathroom",
    capacity: 2,
    image: "https://static.cubilis.eu/securereservations/photos/amigo-budget-hostel-amsterdam/v3/658197123.jpg?width=800&height=600&mode=crop&format=jpg&quality=90",
    features: ["Wi-Fi", "Private Bathroom"]
  },
  {
    id: "2",
    name: "Bed in Female 8-Bed Dormitory Room",
    description: "Bed in Female 8 Person Dormitory Room - Shared Bathroom. Upper Floor. Accessible Only By Steep And Narrow Staircase - No Elevator.",
    capacity: 8,
    image: "https://static.cubilis.eu/securereservations/photos/amigo-budget-hostel-amsterdam/v3/20250213161529.png?width=558&height=418&mode=crop&scale=both&format=jpg&quality=90",
    features: ["Wi-Fi", "Public Bathroom"]
  },
  {
    id: "3",
    name: "Double Basic Room - Shared Bathroom",
    description: "Room For 2 Persons - Double Bed - Shared Bathroom Outside the Room. Upper Floor. Accessible Only By Steep And Narrow Staircase - No Elevator.",
    capacity: 2,
    image: "https://static.cubilis.eu/securereservations/photos/amigo-budget-hostel-amsterdam/v3/PHOTO-2025-03-18-14-24-17-2.jpg?width=558&height=418&mode=crop&scale=both&format=jpg&quality=90",
    features: ["Wi-Fi", "Public Bathroom"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                {/* <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600711269860-ff440f53ed42?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Amsterdam canals" 
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
  <div className="container relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
          {t.home.booking.subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
          {t.home.booking.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t.home.booking.description}
        </p>
        <ul className="space-y-3 mb-8">
          {t.home.booking.benefits.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
              <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center mr-3">
                <ArrowRight className="h-3 w-3" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredApartments.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredApartments.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.featuredApartments.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredApartments.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">

              <Button asChild className="btn-primary">
                  <a 
                    href="https://bookingengine.mylighthouse.com/amigo-budget-hostel-amsterdam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t.home.featuredApartments.viewAll}
                  </a>
                </Button>
            </div>
            
          {/* Google Maps Section */}
          <section className="section">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.findUs.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.findUs.location}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.findUs.description}
                </p>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg animate-fade-in [animation-delay:200ms]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.762273692016!2d4.92506447779338!3d52.35659677201886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60970c2a2299b%3A0x8bdb9d061cbef81!2sAmigo%20Hotel!5e0!3m2!1snl!2snl!4v1763647400947!5m2!1snl!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
            
            
          </div>

          
          
        </section>
        
        
      </main>
      
      <Footer />
    </div>
  );
}
