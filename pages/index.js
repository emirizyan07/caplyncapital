"use client";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f6f1] to-white text-[#0e1a2b]">
      <header className="flex items-center justify-between px-8 py-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold">Caplyn Capital</span>
        </div>
        <nav className="space-x-6 font-medium">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#whyus">Why Us</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Quietly Compounding</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Strategic investments, elite market insights, and smart capital growth — all under one roof.
        </p>
        <Button className="text-lg px-6 py-3" onClick={() => setShowForm(true)}>
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700">
            Caplyn Capital is a modern investment firm offering personalized advisory in stock markets, forex copy trading,
            and smart capital deployment. We help you grow, steadily and silently.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            Diversified offerings to help you build and protect your wealth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Stock Market Advisory</h3>
              <p className="text-gray-700">Custom research, signals, and strategies tailored to your risk and growth goals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Forex Copy Trading</h3>
              <p className="text-gray-700">Mirror high-performance trades with transparency and security built in.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Capital Growth Management</h3>
              <p className="text-gray-700">We invest your capital with precision strategies and share profits transparently.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="whyus" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Caplyn?</h2>
          <p className="text-lg text-gray-700 mb-4">
            We blend market expertise with cutting-edge strategy and a core philosophy of sustainable, long-term growth.
          </p>
          <ul className="text-gray-700 list-disc list-inside text-left max-w-xl mx-auto">
            <li>Data-backed decision making</li>
            <li>Transparent profit-sharing model</li>
            <li>Real-time copy trading options</li>
            <li>Access to exclusive investment deals</li>
          </ul>
        </div>
      </section>

      <section id="vision" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To build India's most trusted capital management firm — one that grows with its clients and creates opportunity for all.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Let’s Grow Together</h2>
          <p className="text-lg text-gray-700 mb-6">Reach out to partner, invest, or learn how Caplyn Capital can quietly grow your wealth.</p>
          <Button className="text-lg px-6 py-3" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Contact Us"}
          </Button>

          {showForm && (
            <form 
              className="mt-6 space-y-4 text-left" 
              action="https://formspree.io/f/mwkgywyo" 
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" required />
              <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded" required />
              <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 border border-gray-300 rounded" required />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          )}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Caplyn Capital. All rights reserved.
      </footer>
    </div>
  );
}
