export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Vulnerability Scanner
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        Enter your website URL below to check for potential vulnerabilities.
        Your first scan is free!
      </p>

      <form className="w-full max-w-md flex space-x-2">
        <input
          type="url"
          placeholder="https://example.com"
          className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Scan
        </button>
      </form>
    </main>
  )
}

