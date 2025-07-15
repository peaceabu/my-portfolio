function Contact() {
  return (
    <section className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="mb-6 text-lg">
          You can reach out to me via email or through my social media:
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            Email:{' '}
            <a
              href="mailto:you@example.com"
              className="underline hover:text-pink-300"
            >
              you@example.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-300"
            >
              linkedin.com/in/yourusername
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-300"
            >
              github.com/yourusername
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
