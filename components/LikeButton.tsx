import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";

function LikeButton() {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile } = useAuthStore();

  return (
    <div className="gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer"></div>
    </div>
  );
}

export default LikeButton;
