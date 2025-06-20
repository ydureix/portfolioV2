import gitHubLogo from "../assets/github-mark-white.png";
import LinkedInLogo from "../assets/InBug-White.png";
import MailIcon from "../assets/mail-512.png";

export default function ContactMe(){
    return (
        <div className="flex justify-center mt-6 pb-4">
              <div className="flex flex-col gap-2 bg-neutral-800 p-6 rounded-lg w-80 md:w-190 sm:w-150 border-blue-100  border-1">
                <div className="flex flex-row justify-between items-center w-full"></div>
                    <h1 className="text-green-50 font-mono font-bold text-3xl md:text-5xl"> Contact Me</h1>
                    <p> You can contact me via LinkedIn or Email @ rudyx923@gmail.com</p>
                    <div className="flex flex-row justify-center pt-4">
                        <a href="https://github.com/ydureix" target="_blank" className="pr-20">
                        <img src={gitHubLogo} alt="Github" className="w-10 h-10 md:w-20 md:h-20"/>
                        </a>
                        <a href="https://www.linkedin.com/in/rudy-xie-60142226a/" target="_blank" className="pr-20">
                        <img src={LinkedInLogo} alt="LinkedIn" className="w-10 h-10 md:w-20 md:h-20"/>
                        </a>
                        <a href="mailto:rudy11923@gmail.com" target="_blank">
                        <img src={MailIcon} alt="Mail" className="w-10 h-10 md:w-20 md:h-20"/>
                        </a>
                    </div>
                </div>
        </div>
    )
}