import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <svg
          className="absolute bottom-0 left-0 right-0 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <pattern
            id="grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 40M40 0L40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="1440" height="320" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="BioShop Logo" width={240} height={80} />
        </div>

        <div className="mt-8">
          <form className="mt-3 flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              required
              className="flex-grow"
              placeholder="Enter your email"
            />
            <Button type="submit" className="w-full sm:w-auto p-5">
              Get Notified
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
