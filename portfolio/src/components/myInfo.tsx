import gitHubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/InBug-White.png";
import MailIcon from "../assets/mail-512.png";
import Experience from "./experience";
export default function MyInfo(){
    return (
        <div className="flex justify-center mt-6 pb-4">
              <div className="flex flex-col gap-2 bg-neutral-800 p-6 rounded-lg w-80 md:w-190 sm:w-150 border-blue-100  border-1">
                <div className="flex flex-row justify-between items-center w-full">
                  <h1 className="text-green-50 font-mono font-bold text-3xl md:text-5xl">Rudy Xie</h1>
                  <div className="flex flex-row pr-3">
                    <a href="https://github.com/ydureix" target="_blank" className="pr-3">
                      <img src={gitHubLogo} alt="Github" className="w-7 h-7"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rudy-xie-60142226a/" target="_blank" className="pr-3">
                      <img src={LinkedInLogo} alt="Github" className="w-7 h-7"/>
                    </a>
                    <a href="mailto:rudy11923@gmail.com" target="_blank">
                      <img src={MailIcon} alt="Github" className="w-7 h-7"/>
                    </a>
                  </div>
                </div>
                <p className="text-neutral-300 font-mono">Fullstack Developer</p>
                <p className="text-green-50 font-mono">Hello! I am Rudy, a fullstack developer with 4+ years of experience programming. I am currently pursuing a Bachelor's of Science for Software Engineering at the University of California-Irvine.</p>

              </div>
            </div>
    )
}