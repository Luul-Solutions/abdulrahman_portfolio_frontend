export default function Footer() {
  return (
    <footer className="w-full text-center py-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white shadow-lg">
      <p className="text-lg">
        © {new Date().getFullYear()} abdulrahman – Built with ❤️ using React, TS
        & TailwindCSS
      </p>
      <p className="mt-1 text-sm text-white/80">
        Follow me on{" "}
        <a
          href="https://github.com/example"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-yellow-300 transition-colors"
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://linkedin.com/in/example"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-yellow-300 transition-colors"
        >
          LinkedIn
        </a>{" "}
        &{" "}
        <a
          href="https://twitter.com/example"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-yellow-300 transition-colors"
        >
          Twitter
        </a>
      </p>
    </footer>
  );
}
