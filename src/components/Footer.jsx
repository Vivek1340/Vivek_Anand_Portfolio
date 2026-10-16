import { profile } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto sm:px-16 px-5 py-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <p className="font-mono text-[13px] text-secondary">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6 text-[15px]">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-teal transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-teal transition-colors">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="text-secondary hover:text-teal transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
