import { ReactNode } from 'react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
