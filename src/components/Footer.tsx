import { Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[12px] opacity-60">
            &copy; 2021 Rumah Inovasi - IT Consulting Group. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[12px] text-white opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-[12px] text-white opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-[12px] text-white opacity-80 hover:opacity-100 transition-opacity">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
