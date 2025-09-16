"use client";

import { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { X, Play } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  description: string;
  points: { title: string; text: string }[];
  thumbnail: string;
  videoUrl: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The sessions have definitely shown a great improvement in her academic performance.",
    description:
      "Hear directly from Ms. Saritha Poosa's family about the impact of Study Monks approach on their daughter's vocabulary and confidence.",
    points: [
      {
        title: "Learning to Applying",
        text: "She doesn’t just memorize vocabulary; she now uses new words with confidence and in the right context.",
      },
      {
        title: "Renewed Interest",
        text: "Their interactive approach transformed reading into a subject she finds genuinely interesting and engaging.",
      },
      {
        title: "Proven Results",
        text: "As a parent, I'm highly satisfied. We've seen a definite improvement not just in her grades, but in her confidence to express her own ideas.",
      },

    ],
    thumbnail: "/assets/img/test.png",
    videoUrl: "assets/video/tetsione.mp4",
    name: "Ditya's Story",
  },
];

export default function ParentsTestimonial() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  return (
    <section className="mb-[30px] md:mb-[50px]">
      <div className="max-w-screen-xl container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#001F3F] mb-3 text-center">
          Parent&apos;s Testimonial
        </h2>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 5000,
            arrows: false,
            pagination: true,
          }}
        >
          {testimonials.map((t) => (
            <SplideSlide key={t.id}>
              <div className="bg-blue-50 rounded-3xl md: px-10 py-20 flex flex-col md:flex-row items-center gap-6">
                {/* Left Side */}
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="w-full md:w-[65%]">
                    <h5 className="text-[22px] text-[#212529] mb-3 tfd font-bold">
                      “{t.quote}”
                    </h5>
                    <p className="text-gray-600 mb-4">{t.description}</p>

                    <ul className="space-y-3">
                      {t.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-6 h-6"><Image
                            src="/assets/img/tick-square.png"
                            alt="testimonial"
                            className=""
                            width={20} height={20}
                          /></span>
                          <p>
                            <span className="font-semibold text-gray-800">
                              {point.title}:
                            </span>{" "}
                            {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side (Thumbnail + Play Button) */}
                  <div className="relative w-full md:w-[35%]">
                    <Image
                      src={t.thumbnail}
                      alt="testimonial"
                      className="w-full rounded-xl"
                      width={400} height={300}
                    />
                    <button
                      onClick={() => setSelectedVideo(t.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src="/assets/img/play-btn.png"
                        alt="Play"
                        width={70}
                        height={70}
                        className="animate-playpulse absolute top-1/2 left-1/2 "
                      />
                    </button>
                    <p className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-white font-semibold">
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-[#000000c2] bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-sm">
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
