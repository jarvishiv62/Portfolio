import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">
          I'm a passionate developer building amazing web experiences.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A brief description of the project and what it does.
              </p>
            </div>
            <div className="p-6 border rounded-lg dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A brief description of the project and what it does.
              </p>
            </div>
            <div className="p-6 border rounded-lg dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A brief description of the project and what it does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
