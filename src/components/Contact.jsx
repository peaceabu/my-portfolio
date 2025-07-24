import { useState } from 'react';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Check,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { Helmet } from 'react-helmet';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const experience = 3;

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Create mailto link with form data
      const subject = `Message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:peaceabu333@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/peaceabu',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abupps',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:peaceabu333@gmail.com',
      color: 'hover:text-pink-400'
    }
  ];

  const inputFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: User,
      placeholder: 'Abdul Malik Abu'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: Mail,
      placeholder: 'peaceabu@pps.com'
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-2 sm:px-4 lg:px-8 bg-[radial-gradient(circle,rgba(1,28,74,1)_12%,rgba(4,37,94,1)_36%,rgba(0,18,74,1)_76%)] overflow-hidden"
    >

                <Helmet>
              <title>Contact | Peace Abu</title>
              <meta
                name="description"
                content={`Learn more about Peace Abu – a passionate, coffee-fueled web developer with ${experience}+ years of experience. I specialize in React and modern frontend tech, building accessible and blazing-fast web apps with a dash of humor.`}
              />
              <meta name="author" content="Peace Abu" />
              <meta
                name="keywords"
                content="Peace Abu, PeaceAbu, about Peace Abu, React developer, web developer bio, freelance developer, frontend engineer, web artisan, JavaScript expert, funny developer, developer with personality, Peace Abu web developer, developer in Tenkasi"
              />
              <meta property="og:title" content="About | Peace Abu – Web Developer in Tenkasi" />
              <meta
                property="og:description"
                content="Meet Peace Abu – Web designer and Web Developer in Tenkasi"
              />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="https://peaceabu.site/myself_favicon.png" />
              <meta property="og:url" content="https://peaceabu.site/contact" />
              <link rel="canonical" href="https://peaceabu.site/contact" />
            </Helmet>

      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl bg-transparent grid gap-10 md:gap-16 md:grid-cols-2 items-center">
        {/* Left - Info */}
        <div className="space-y-8">
          <div className="space-y-5 md:space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-pink-400">Available for work</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's create something
              <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text">
                amazing together
              </span>
            </h1>

            
          </div>  

          {/* Social Links */}
 

          {/* Quick Info */}
          <div className="p-4 sm:p-6 rounded-2xl bg-black/20 border border-indigo-500/30">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Quick Response</h3>
            <p className="text-blue-100 text-xs sm:text-sm">
              I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via email directly.
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl pointer-events-none"></div>
          <form
            className="relative bg-black/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-4 sm:p-6"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Send a Message</h2>
              {/* <p className="text-blue-200 text-xs sm:text-sm">Tell me about your project or just say hello!</p> */}
            </div>

            <div className="space-y-4">
              {/* Name and Email Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                {inputFields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name} className="relative">
                      <label className="block text-xs sm:text-sm font-medium text-blue-100 mb-1">
                        {field.label}
                      </label>
                      <div className="relative">
                        <Icon
                          className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === field.name ? 'text-pink-400' : 'text-blue-300'
                            }`}
                        />
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField('')}
                          placeholder={field.placeholder}
                          required
                          className={`w-full pl-11 pr-3 py-2.5 bg-black/40 border rounded-xl text-white placeholder-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 ${focusedField === field.name ? 'border-pink-500/50' : 'border-indigo-500/40'
                            }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-blue-100 mb-1">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className={`absolute left-3 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-pink-400' : 'text-blue-300'
                      }`}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    rows={4}
                    className={`w-full pl-11 pr-3 py-2.5 bg-black/40 border rounded-xl text-white placeholder-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 resize-none ${focusedField === 'message' ? 'border-pink-500/50' : 'border-indigo-500/40'
                      }`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full min-h-[44px] py-3 px-6 rounded-xl font-semibold text-white text-base transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${isSubmitted
                  ? 'bg-pink-500 hover:bg-pink-600'
                  : 'bg-black hover:bg-indigo-600 border border-indigo-500/50 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25'
                  } disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

