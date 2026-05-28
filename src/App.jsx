import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Car, CalendarCheck, ShieldCheck, MapPin, Star, Phone, CheckCircle, Menu, X } from "lucide-react";
import logo from "./assets/logo.png";
const Button = ({ children, className = "", ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export default function EasyPassDriveFL() {
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_8frz4ax",
      "template_a9c2edp",
      {
  
   name: e.target.elements.name.value,
email: e.target.elements.email.value,
phone: e.target.elements.phone.value,
service: e.target.elements.service.value,
date: e.target.elements.date.value,
location: e.target.elements.location.value,
message: e.target.elements.location.value,
},
      "Yu3Tx8h1wGc-phNmE"
    )
    .then(() => {
      alert("Booking request sent!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send.");
    });
}; 
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Beginner Driving Lessons",
      desc: "Calm, step-by-step instruction for new drivers, teens, and adults.",
      icon: Car,
    },
    {
      title: "Road Test Car Rental",
      desc: "Use a clean, test-ready vehicle for your Florida road test appointment.",
      icon: CalendarCheck,
    },
  ];

  const packages = [
    {
      name: "Private Driving Lessons",
      price: "$55/hr",
      details: "One-on-one driving instruction for teens and adults (3-hour minimum)",
    },
    {
      name: "Road Test Car Rental",
      price: "$150",
      details: "Use a clean, test-ready vehicle for your Florida road test appointment",
    },
  ];

  const faqs = [
    ["Do you offer pickup and drop-off?", "Yes. Pickup may be available depending on your location and instructor availability."],
    ["Can I use your car for the road test?", "Yes. We offer road test vehicle rental packages for eligible students."],
    ["Do you teach nervous drivers?", "Absolutely. Our lessons are calm, patient, and designed to build confidence."],
    ["Do I need a permit?", "Most students need a valid learner permit or license before driving lessons."],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <img
  src={logo}
  alt="Easy Pass Drive FL"
  className="h-16 w-16 rounded-full object-cover"
/>

            </div>
            Easy Pass Drive FL
          </a>

          <nav className="hidden items-center gap-6 md:flex text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#booking">Book</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition" asChild>
            <a href="#booking">Book Now</a>
          </Button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#booking" onClick={() => setMenuOpen(false)}>Book</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <div className="mx-auto max-w-4xl text-center px-6 py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                Florida driving lessons & test-day car rental
              </p>
              <h1 className="text-6xl font-bold tracking-tight md: text-7x1">
                Learn to drive safely. Pass with confidence.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
                Easy Pass Drive FL helps teens and adults prepare for the road with patient instructors, flexible booking, and service throughout Miami-Dade and Broward County.
              </p>
              <div className="mt-10 mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-md hover:bg-slate-100 transition" asChild>
                  <a href="#booking">Book a Lesson</a>
                </Button>
                <Button size="lg" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition" asChild>
                  <a href="tel:+17868625928">Call Now</a>
                </Button>
              </div>
            </motion.div>

            
          </div>
        </section>

        <section className="border-b bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-5">
            {[
              "Miami-Dade & Broward",
              "Patient instructors",
              "Flexible scheduling",
              "Pay in Person",
              "Road test prep",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-5xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="font-semibold text-blue-700">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Professional driving lessons designed to help you pass with confidence.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Patient instruction, clear guidance, and simple online booking for students across Miami-Dade and Broward County.
            </p>
          </div>
          
<div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="rounded-3xl bg-white p-0 shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-slate-600">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold text-blue-700">Simple Pricing</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Choose your package</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              {packages.map((pkg) => (
                <Card key={pkg.name} className="h-full rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <div className="mt-4 text-4xl font-extrabold text-blue-700">{pkg.price}</div>
                    <p className="mt-3 text-slate-600">{pkg.details}</p>
                    <Button className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-500">
                      <a href="#booking">Book This</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-10 px-4 md:px-6 py-16">
          <div>
            <p className="font-semibold text-blue-700">Booking Flow</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Reserve your lesson online</h2>
            <div className="mt-8 space-y-5">
              {["Select your service", "Choose your preferred date and time", "Enter pickup address and student details", "Submit your booking request", "Receive confirmation by email or text"].map((step, idx) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">{idx + 1}</div>
                  <p className="pt-1 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold">Request a Booking</h3>
              <form onSubmit={sendEmail} className="mt-6 space-y-4">
                <input name="name" className="w-full rounded-xl border px-4 py-3" placeholder="Student name" />
                <input name="email" className="w-full rounded-xl border px-4 py-3" placeholder="Email address" />
                <input name="phone" className="w-full rounded-xl border px-4 py-3" placeholder="Phone number" />
                <select name="service" className="w-full rounded-xl border px-4 py-3">
                  <option>Beginner Driving Lesson</option>
                  
                  <option>Road Test Car Rental</option>
                 
                </select>
                <input name="date" className="w-full rounded-xl border px-4 py-3" type="date" />
                
                
                
<textarea name="location" className="w-full rounded-xl border px-4 py-3" placeholder="Pickup address, city, and notes" rows={4}></textarea>
                <Button type="submit" className="w-full rounded-2xl bg-blue-600 py-6 font-semibold text-white shadow-md hover:bg-blue-500 transition">
                  Request Booking
                </Button>
                <p className="mt-3 text-sm text-slate-600">
  Payment is collected in person at the time of the lesson. No online payment required.
</p>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
            <div className="flex gap-4">
              <CalendarCheck className="text-blue-400" />
              <div>
                <h3 className="font-bold">Flexible Payment Options</h3>
                <p className="mt-2 text-slate-300">Cash and Zelle payments accepted in person for lessons and road test services.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-blue-400" />
              <div>
                <h3 className="font-bold">Florida Service Areas</h3>
                <p className="mt-2 text-slate-300">Serving students across Miami-Dade County and Broward County with flexible pickup options.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="text-blue-400" />
              <div>
                <h3 className="font-bold">Review Growth</h3>
                <p className="mt-2 text-slate-300">Request Google reviews after completed lessons and road tests.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
          <div className="text-center">
            <p className="font-semibold text-blue-700">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Common questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map(([q, a]) => (
              <Card key={q} className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold">{q}</h3>
                  <p className="mt-2 text-slate-600">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="font-semibold text-blue-700">Contact</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Ready to start driving?</h2>
              <p className="mt-4 text-slate-600">Call, text, or request a lesson online. We’ll help you choose the right driving service.</p>
              <div className="mt-8 space-y-4">
                <a className="flex items-center gap-3 font-semibold" href="tel:+17868625928">
                  <Phone className="text-blue-600" /> (786) 862-5928
                </a>
                <p className="flex items-center gap-3 font-semibold">
                  <MapPin className="text-blue-600" /> Serving Miami-Dade & Broward County by appointment
                </p>
              </div>
            </div>
            <Card className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <div className="mt-6 space-y-4">
                  <input className="w-full rounded-xl border px-4 py-3" placeholder="Name" />
                  <input className="w-full rounded-xl border px-4 py-3" placeholder="Email or phone" />
                  <textarea className="w-full rounded-xl border px-4 py-3" placeholder="How can we help?" rows={5}></textarea>
                  <Button className="w-full bg-blue-600 text-white py-6 hover:bg-blue-700">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <a
        href="tel:+17868625928"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>

      <footer className="bg-slate-950 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="rounded-xl bg-blue-600 p-2">
                <Car size={20} />
              </div>
              <span className="font-bold">Easy Pass Drive FL</span>
            </div>
            <p className="mt-3 text-sm">
              Professional driving lessons and road test car rental across Miami-Dade and Broward County.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#booking" className="hover:text-white">Book</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} Easy Pass Drive FL. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
