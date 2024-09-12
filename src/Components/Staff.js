import linkedinLogo from "../assets/logo-linkedin.svg";
import linkSVG from "../assets/link.svg";
import githubSVG from "../assets/logo-github.svg";
import mailOutlineLogo from "../assets/mail-open-outline.svg";

function Staff(props) {

    return (<article className="flex flex-col items-center" style={{padding:10}}>
    <img
      src={props.image}
      alt={props.name}
      className="sm:w-52 sm:h-52 w-36 h-36 mt-5 object-cover rounded-full"
    />
    <p className="text-xs sm:text-sm font-light mt-2">
      {props.subject}
    </p>
    <p className="text-xs sm:text-sm text-gray-600">
      {props.duty}
    </p>
    <p className="mt-1 sm:text-lg">{props.name}</p>
    <div className="sm:[&>a>img]:h-8 [&>a>img]:h-6 items-center flex gap-2 mt-1">
      {props.linkedin && <a href={props.linkedin}>
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="sm:!h-7 !h-5"
        />
      </a>}
      {props.email && <a href={props.email}>
        <img src={mailOutlineLogo} alt="Mail" />
      </a>}
      {props.homepage && <a href={props.homepage}>
        <img src={linkSVG} alt="Personal Page" />
      </a>}
      {props.github && <a href={props.github}>
        <img src={githubSVG} alt="Github" />
      </a>}
    </div>
  </article>)
}

export default Staff;