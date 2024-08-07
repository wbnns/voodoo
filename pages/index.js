import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/base-org/web/master/apps/web/src/data/ecosystem.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const extractedUrls = json.map((entry) => entry.url).filter(Boolean);
      setUrls(extractedUrls);
    } catch (e) {
      console.error("Error fetching or parsing data:", e);
      setError("Failed to load data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-md">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
            Voodoo
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Extract URLs from projects on{" "}
            <a href="https://base.org/ecosystem">base.org/ecosystem</a>
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 dark:border-white"></div>
            <p>Loading data...</p>
          </div>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!isLoading && !error && urls.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Extracted URLs:
              </h2>
              <button
                onClick={copyToClipboard}
                className={`${
                  copied
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out`}
              >
                {copied ? "Copied!" : "Copy All"}
              </button>
            </div>
            <textarea
              ref={textAreaRef}
              readOnly
              value={urls.join("\n")}
              className="w-full h-64 p-2 border rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        <button
          onClick={fetchData}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
}
