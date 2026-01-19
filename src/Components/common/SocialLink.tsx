import { InstagramIcon, TwitterIcon, YoutubeIcon } from "../../utils/icons";

function SocialLink({ className = "", size = 25 }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <a href="">
        <InstagramIcon size={size} />
      </a>
      <a href="">
        <TwitterIcon size={size} />
      </a>
      <a href="">
        <YoutubeIcon size={size} />
      </a>
    </div>
  );
}

export default SocialLink;
