import { Video } from "../types";
import Image from "next/image";
import Link from "next/link";
// import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
// import { BsPlay, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import { MdOpenInNew } from "react-icons/md";

// import postedBy from "../sanity-backend/schemas/postedBy";
import VideoPlayer from "./video/Video";

interface IProps {
  post: Video;
}

function VideoCard({ post }: IProps) {
  // const [isHover, setIsHover] = useState(false);

  // const [playing, setPlaying] = useState(false);
  // const [isVideoMuted, setIsVideoMuted] = useState(false);

  // const videoRef = useRef<HTMLVideoElement>(null);

  // const onVideoPress = () => {
  //   if (playing) {
  //     videoRef?.current?.pause();
  //     setPlaying(false);
  //   } else {
  //     videoRef?.current?.play();
  //     setPlaying(true);
  //   }
  // };

  // useEffect(() => {
  //   if (videoRef?.current) {
  //     videoRef.current.muted = isVideoMuted;
  //   }
  // }, [isVideoMuted]);

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2  font-semibold rounded">
          <Link href={`/profile/${post.postedBy._id}`}>
            <div className="md:w-16 md:h-16 w-10 h-10 cursor-pointer">
              <Image
                width={62}
                height={62}
                className="rounded-full"
                src={post.postedBy.image}
                alt="profile photo"
                layout="responsive"
              />
            </div>
          </Link>

          <div className="relative w-full">
            <Link href={`/profile/${post.postedBy._id}`}>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                  {post.postedBy.userName}
                  {` `}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
            <Link href={`/detail/${post._id}`}>
              <button className="absolute right-5 top-[45%] bottom-[45%]">
                <MdOpenInNew className="text-black text-2xl" />
              </button>
            </Link>
            <p>{post.caption}</p>
          </div>
        </div>
      </div>

      <div className="lg:ml-20 flex gap-4 relative ">
        <div
          // onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          className="rounded-3xl "
        >
          {/* <Link href={`/detail/${post._id}`}> */}
          {/* <video
              ref={videoRef}
              loop
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl
              cursor-pointer bg-gray-100
              "
              src={post.video.asset.url}
            ></video>
             */}
          <VideoPlayer
            src={post.video.asset.url}
            loop
            className=" rounded-2xl
              cursor-pointer bg-gray-100"
            newOptions={{
              controls: [
                "restart", // Restart playback
                "rewind", // Rewind by the seek time (default 10 seconds)
                "play", // Play/pause playback
                "fast-forward", // Fast forward by the seek time (default 10 seconds)
                "mute", // Toggle mute
                "volume", // Volume control
                "settings", // Settings menu
              ],
            }}
          />
          {/* </Link> */}
          {/* {isHover && (
            <div
              className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px]
            md:w-[50px] p-3
            "
            >
               {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button>
                  <BsFillPlayFill
                    onClick={onVideoPress}
                    className="text-black text-2xl lg:text-4xl"
                  />
                </button>
              )} 
               {isVideoMuted ? (
                <button>
                  <HiVolumeOff
                    onClick={() => setIsVideoMuted(false)}
                    className="text-black text-2xl lg:text-4xl"
                  />
                </button>
              ) : (
                <button>
                  <HiVolumeUp
                    onClick={() => setIsVideoMuted(true)}
                    className="text-black text-2xl lg:text-4xl"
                  />
                </button>
              )} 
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
