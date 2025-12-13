import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/kite-logo.png';
import ipslogo from '../assets/ips.webp';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header - Matching Faculty/Event style */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="relative">
            <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-800 to-blue-900"></div>

            <div className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-white p-3 rounded-lg shadow-md border border-blue-100">
                  <img
                    src={logo}
                    alt="KITE Logo"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="pl-2">
                  <h2 className="text-2xl font-bold text-blue-900 tracking-tight">Letter Generator Portal</h2>
                  <div className="flex items-center mt-1">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <p className="text-black-600 text-sm font-medium">KGiSL Institute of Technology</p>
                  </div>
                </div>
              </div>
              <img
                src={ipslogo}
                alt="IPS Logo"
                className="h-26 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-sky-900 to-blue-700 px-8 py-6">
            <h1 className="text-white text-3xl font-bold tracking-tight">Choose Your Letter Type</h1>
            <p className="text-blue-50 text-sm mt-1">Select the type of letter you need to generate</p>
          </div>

          <div className="px-8 py-8 space-y-6 bg-gradient-to-br from-blue-50 to-sky-50">

            {/* Faculty Request Button */}
            <button
              onClick={() => navigate("/Faculty_Request")}
              className="group w-full bg-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 shadow-md border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-indigo-800 group-hover:w-2 transition-all"></span>

              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-800 to-blue-900 flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-blue-900 tracking-tight">
                  Faculty Request Letter
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Generate official request letters for faculty members
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:translate-x-2 transition-all">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </button>

            {/* Event Approval Button */}
            <button
              onClick={() => navigate("/Event_Approval")}
              className="group w-full bg-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 shadow-md border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-indigo-800 group-hover:w-2 transition-all"></span>

              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-800 to-blue-900 flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-blue-900 tracking-tight">
                  Event Approval Letter
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Generate approval letters for events and activities
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:translate-x-2 transition-all">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </button>

          </div>
        </div>

        {/* Footer */}
              <footer className="mt-12">
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex items-center mb-4 md:mb-0">
                        <span className="text-blue-600 font-mono text-xl mr-2">&lt;/&gt;</span>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">KGISL Institute of Technology</h3>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 mt-6 pt-6">
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm mb-4 md:mb-0">
                          © {new Date().getFullYear()} KGISL Institute of Technology. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                        <span>Powered by IPS Tech Community</span>
                        <img
                          src={ipslogo}
                          alt="IPS Logo"
                          className="h-7 w-auto object-contain"
                        />
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>

      </div>
    </div>
  );
};

export default LandingPage;
