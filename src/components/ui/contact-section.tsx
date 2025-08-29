import { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { MapPin, Mail, Star, Clock, Phone, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    hours: "",
    privateEvent: "",
    barOption: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Event Inquiry - ${formData.eventType}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Event Type: ${formData.eventType}
Date: ${formData.date}
Number of Guests: ${formData.guests}
Number of Hours: ${formData.hours}
Private or Semi-Private: ${formData.privateEvent}
Bar Option: ${formData.barOption}

Additional Details:
${formData.message}
    `;
    
    const mailtoLink = `mailto:torobardc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Event Inquiry Sent!",
      description: "Your email client will open with the inquiry details. We'll get back to you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Event Type *</label>
                  <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="bachelor">Bachelor/Bachelorette</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="networking">Networking Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Event Date *</label>
                    <Input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Number of Guests *</label>
                    <Input
                      type="number"
                      required
                      value={formData.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="25"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Duration (Hours) *</label>
                  <Input
                    type="number"
                    required
                    value={formData.hours}
                    onChange={(e) => handleInputChange("hours", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="3"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Event Type *</label>
                  <Select onValueChange={(value) => handleInputChange("privateEvent", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Private or Semi-Private?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private Event (Entire Venue)</SelectItem>
                      <SelectItem value="semi-private">Semi-Private (Section)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Bar Option *</label>
                  <Select onValueChange={(value) => handleInputChange("barOption", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select bar option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open-bar">Open Bar Package</SelectItem>
                      <SelectItem value="pay-as-go">Pay-As-You-Go</SelectItem>
                      <SelectItem value="discuss">Let's Discuss Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Additional Details</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Tell us more about your event, special requests, music preferences, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="luxury-button w-full">
                  Send Event Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">14th Street NW, Washington, DC</p>
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

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Wednesday</span>
                  <span className="text-white">5PM - 12AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Thursday - Saturday</span>
                  <span className="text-white">5PM - 2AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">6PM - 11PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="mailto:torobardc@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>torobardc@gmail.com</span>
                </a>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/torobar14thst/reviews" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook Reviews</span>
                  </a>
                  <a 
                    href="https://www.google.com/search?q=toro+bar+14th+street+washington+dc+reviews&oq=toro+bar+14th+street+washington+dc+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Star className="h-4 w-4" />
                    <span>Google Reviews</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};