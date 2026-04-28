import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/content/profile";

export default function Contacts() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="space-y-8 text-sm leading-relaxed text-neutral-400">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contacts</h2>
            <p>Phone: {profile.phone}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${profile.email}`} className="text-blue-500">
                {profile.email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={profile.linkedin}
                className="text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                {profile.linkedin}
              </a>
            </p>
            {"website" in profile ? (
              <p>
                Website:{" "}
                <a
                  href={profile.website}
                  className="text-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.website}
                </a>
              </p>
            ) : null}
            {/* <p>GitHub: {profile.github}</p>
            <p>Twitter: {profile.twitter}</p>
            <p>Facebook: {profile.facebook}</p>
            <p>Instagram: {profile.instagram}</p>
            <p>YouTube: {profile.youtube}</p>
            <p>LinkedIn: {profile.linkedin}</p> */}
          </section>
        </div>
      </div>
    </main>
  );
}
