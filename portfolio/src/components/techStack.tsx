import CPlusPlusLogo from "../assets/c-.png"
import PythonLogo from "../assets/python.png"
import CSSLogo from "../assets/css-3.png"
import HTMLLogo from "../assets/html-5.png"
import JavaLogo from "../assets/java.png"
import MySqlLogo from "../assets/mysql.png"
import NextJSLogo from "../assets/Next.js.png"
import ReactLogo from "../assets/react.png"
import ViteLogo from "../assets/Vite.js.png"
import GitLogo from "../assets/social.png"
export default function TechStack(){
    return (
        <div className="flex flex-col justify-between items-center w-full pb-4">
            <h1 className="text-green-50 font-mono font-extrabold text-6xl pb-5">Tech Stack</h1>
            <div className="flex flex-wrap justify-center w-8/10 xl:w-5/10">
                <div className="pr-3 pb-">
                    <img src={CPlusPlusLogo} className="w-20 h-20"/>
                </div>
                 <div className="pr-3 pb-5">
                    <img src={PythonLogo} className="w-20 h-20"/>
                </div>
                 <div className="pr-3 pb-5">
                    <img src={CSSLogo} className="w-20 h-20"/>
                </div>
                 <div className="pr-3 pb-5">
                    <img src={HTMLLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={MySqlLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={NextJSLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={JavaLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={ReactLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={ViteLogo} className="w-20 h-20"/>
                </div>
                <div className="pr-3 pb-5">
                    <img src={GitLogo} className="w-20 h-20"/>
                </div>

                
            </div>
        </div>
    )
}