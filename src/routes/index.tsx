export default function Home() {
  return (
    <div className="bg-white dark:bg-black h-screen">
      
      <div className="space-y-6">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            What is Phishing?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Phishing is a type of social engineering attack often used to steal
            user data, including login credentials and credit card numbers.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            How to Protect Yourself
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Be cautious of unsolicited emails and messages.Be cautious of unsolicited emails and messages.Be cautious of unsolicited emails and messages.</li>
            <li>Verify the sender's email address.</li>
            <li>Do not click on suspicious links or attachments.</li>
            <li>Use multi-factor authentication.</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Resources
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            For more information on cybersecurity best practices, visit our{" "}
            <a
              href="/resource-tools"
              className="text-indigo-600 dark:text-indigo-400"
            >
              Resources
            </a>
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
