import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-neutral-200">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-300">
            Project Not Found
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-lg hover:bg-white transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          View All Projects
        </Link>
      </div>
    </div>
  );
}
