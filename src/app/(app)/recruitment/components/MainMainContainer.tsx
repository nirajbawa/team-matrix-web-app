"use client";
import React, { useState } from "react";
import {
  Play,
  Users,
  Target,
  Trophy,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MainMainContainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const router = useRouter();

  const handleJoin = () => {
    setIsJoining(true);
    // Simulate application process
    setTimeout(() => {
      setIsJoining(false);
      router.replace(
        "https://docs.google.com/forms/d/e/1FAIpQLSeusmP6mDjOnrvZJr5SJ4_Qn8IWXCYMBSqc_qWDXh-DXp8JEQ/viewform?usp=dialog"
      );
    }, 2000);
  };

  const features = [
    {
      icon: Target,
      title: "Innovation in Action",
      description:
        "Work on robotics projects that push boundaries and create real-world impact.",
    },
    {
      icon: Users,
      title: "Power of Collaboration",
      description:
        "Work alongside a team of driven innovators shaping the future.",
    },
    {
      icon: Trophy,
      title: "Limitless Learning",
      description: "Grow your expertise with every challenge.",
    },
  ];

  const benefits = [
    "Gain national & international exposure",
    "Participate in hands-on workshops and competitions",
    "Build cutting-edge autonomous solutions",
    "Collaborate with passionate innovators",
    "Learn and grow with every project",
    "Think big, experiment freely",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 uppercase">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight mt-32">
              Team <span className="text-[#ff0002]">Matrix</span>
            </h1>
            <p className="text-xl md:text-2xl  dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the future of innovation. We&apos;re building tomorrow&apos;s
              technology today.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                {!isPlaying ? (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <Play className="w-8 h-8 text-white ml-1 group-hover:text-blue-300 transition-colors" />
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Team Matrix Recruitment Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            <p className="text-center dark:text-gray-400 mt-4">
              Watch our 2-minute introduction to Team Matrix culture and
              opportunities
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleJoin}
              disabled={isJoining}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isJoining ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Join Team Matrix
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-8 leading-tight">
              Where Robots Rise and
              <span className="text-[#ff0002]"> Boundaries Fall</span>
            </h2>
            <p className="text-lg dark:text-gray-300 mb-8 leading-relaxed">
              Team Matrix is where Engineering Sparks Life Into Machines. Since
              2022, we have grown from a small group building simple line
              followers and RoboRace bots into a diverse, multidisciplinary
              team. We specialize in designing autonomous sumo bots, maze
              solvers, and advanced projects like autonomous drones, moon
              rovers, and submarine robots, combining creativity, collaboration,
              and technical expertise.
            </p>
            <p className="text-lg dark:text-gray-300 mb-8 leading-relaxed">
              Our achievements speak for themselves — we have been finalists in
              the ISRO Robotics Challenge for the past two years, and have won
              national competitions including Robotex. With a focus on practical
              innovation and real-world impact, we turn ideas into solutions
              that challenge limits and redefine possibilities. At Team Matrix,
              every challenge is an opportunity to rise, innovate, and push the
              boundaries of what’s possible.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-white/10">
          <h3 className="text-3xl font-bold dark:text-white mb-8 text-center">
            Why Join Team Matrix?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
            Ready to Redefine Robotics?
          </h3>
          <p className="text-lg dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join Team Matrix to develop groundbreaking robotics projects that
            redefine what’s possible. Start your adventure in innovation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleJoin}
              disabled={isJoining}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isJoining ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Join Team Matrix
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>

            <Link href={"/#about"}>
              <button className="dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:text-white hover:bg-white/5 transition-all duration-300 border dark:border-gray-600 hover:border-gray-400">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMainContainer;
