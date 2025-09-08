import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { MapPin, Mail, Star, Clock, Phone, Facebook, Instagram } from "lucide-react";

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Let Netlify handle the form submission
    // On successful submit, show success message
    setTimeout(() => {
      setFormSubmitted(true);
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[hsl(var(--section-contact-from))] to-[hsl(var(--section-contact-to))] section-diagonal-top section-curve-bottom relative overflow-hidden">
      {/* Hidden form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message"></textarea>
      </form>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact & Events</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Book Your Event</CardTitle>
              <CardDescription className="text-gray-400">
                Planning a private party, corporate event, or special celebration? Let's make it unforgettable.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* 
                IMPORTANT: After deployment, enable Netlify Form notifications:
                1. Go to Netlify Dashboard → Forms → contact → Notifications → Email notification
                2. Set Recipient: torobardc@gmail.com
                3. Add another notification with BCC: waseem@tranquilmedia.com
              */}
              {!formSubmitted ? (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <label htmlFor="name" className="text-white text-sm font-medium mb-2 block">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-xl border border-gray-600 bg-[#1E293B] px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-white text-sm font-medium mb-2 block">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="flex h-10 w-full rounded-xl border border-gray-600 bg-[#1E293B] px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-white text-sm font-medium mb-2 block">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="flex h-10 w-full rounded-xl border border-gray-600 bg-[#1E293B] px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-white text-sm font-medium mb-2 block">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your event: type, date, guest count, special requests…"
                      rows={5}
                      className="flex min-h-[120px] w-full rounded-xl border border-gray-600 bg-[#1E293B] px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="luxury-button w-full"
                  >
                    Send Event Inquiry
                  </button>
                </form>
              ) : (
                <div id="form-success" className="text-center p-8">
                  <div className="text-green-400 text-lg font-medium mb-2">Thanks! We got your request.</div>
                  <p className="text-gray-300">A team member will reach out within 24 hours.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card premium-shadow">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400 animate-glow-pulse" />
                  <span className="gradient-text">Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">3708 14th St NW, Washington, DC 20010</p>
                <div className="bg-gray-800 rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1524687084097!2d-77.0327999!3d38.9173744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7f8b1234567%3A0x1234567890abcdef!2s14th%20St%20NW%2C%20Washington%2C%20DC!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Toro Bar Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card premium-shadow">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400 animate-glow-pulse" />
                  <span className="gradient-text">Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday - Thursday</span>
                  <span className="text-white">5PM - 2AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Friday - Saturday</span>
                  <span className="text-white">5PM - 3AM</span>
                </div>
                <div className="border-t border-gray-700 mt-3 pt-3">
                  <div className="flex justify-between">
                    <span className="text-blue-400 font-medium">Happy Hour</span>
                    <span className="text-blue-400 font-medium">5PM - 9PM Daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card premium-shadow">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400 animate-glow-pulse" />
                  <span className="gradient-text">Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="tel:202-723-2393"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(202) 723-2393</span>
                </a>
                
                <a 
                  href="mailto:torobardc@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>torobardc@gmail.com</span>
                </a>
                
                <div className="space-y-3">
                  <a 
                    href="https://instagram.com/torobar14th_st" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@torobar14th_st</span>
                  </a>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/torobardc3708/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.google.com/search?q=torobar+reveiws+dc&sca_esv=1e116d9a69546cc9&ei=Ixq5aN20H-Kywt0PzPH_6A8&ved=0ahUKEwid0uH4pr6PAxVimbAFHcz4H_0Q4dUDCBA&uact=5&oq=torobar+reveiws+dc&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnRvcm9iYXIgcmV2ZWl3cyBkYzIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIFECEYqwIyBRAhGKsCSM4DUKkBWN4CcAF4AZABAJgBaaABtAKqAQMxLjK4AQPIAQD4AQGYAgSgAsQCwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgUQABjvBcICCBAAGIAEGKIEmAMA4gMFEgExIECIBgGQBgqSBwMxLjOgB5MUsgcDMC4zuAfAAsIHBTAuMy4xyAcL&sclient=gws-wiz-serp#lrd=0x89b7c9c9eb31f69d:0xebfb790199902506,1,,,,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Star className="h-4 w-4" />
                      <span>Google Reviews</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};