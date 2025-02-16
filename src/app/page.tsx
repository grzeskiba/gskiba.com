/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      <nav className="bg-primary-50 border-b border-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary-900">
                Your Blog
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="/"
                className="text-primary-900 hover:text-primary-500 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-primary-900 hover:text-primary-500 font-medium transition-colors"
              >
                Articles
              </a>
              <a
                href="/about"
                className="text-primary-900 hover:text-primary-500 font-medium transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-primary-50 border border-primary-900">
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                About Me
              </h2>
              <p className="text-primary-900 text-lg leading-relaxed mb-6">
                I&apos;m a software engineer and tech leader passionate about
                building great products and teams. Through this blog, I share my
                experiences and insights about technology, leadership, and
                personal development.
              </p>
              <p className="text-primary-900 text-lg leading-relaxed mb-8">
                My goal is to help other engineering leaders navigate the
                challenges of modern software development and team management. I
                write about practical lessons learned from real-world
                experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-primary-900 text-primary-50 transition-colors font-medium hover:bg-primary-700"
                >
                  Read My Articles
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border-2 border-primary-900 text-primary-900 transition-colors font-medium hover:bg-primary-900 hover:text-primary-50"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary-900 text-primary-50 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">© 2025 Your Name. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-primary-50 hover:text-primary-300 transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-50 hover:text-primary-300 transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-50 hover:text-primary-300 transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
