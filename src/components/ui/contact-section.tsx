import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { MapPin, Mail, Star, Clock, Phone, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDetails: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS configuration
      const serviceID = "service_jhm3k8j";
      const templateID = "template_2p43ptb";
      const publicKey = "Q8806e5qKIZWdvdv0";
      
      // Template parameters matching your EmailJS template
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        event_details: formData.eventDetails || "No event details provided."
      };
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: "Event Inquiry Sent!",
        description: "Your event inquiry has been submitted successfully. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDetails: ""
      });
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Phone *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Event Details *</label>
                  <Textarea
                    required
                    value={formData.eventDetails}
                    onChange={(e) => handleInputChange("eventDetails", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Tell us about your event: type, date, number of guests, special requests, etc."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="luxury-button w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Event Inquiry"}
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

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Hours</span>
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

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>Get In Touch</span>
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