import React, { useEffect, useState } from "react";
import { useUserContext, User } from "./ContextProvider";
import { StyledUserInfo } from "./styles/UserInfo.styled";

//Opens clicked link in a new tab.
export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

//This component prints out data about the currently chosen user.
export const UserInfo = () => {
  const user: User = useUserContext();
  const [userName, setUserName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [profileUrl, setProfileUrl] = useState<string>("");

  useEffect(() => {
    setUserName(user.name);
    setAvatarUrl(user.avatarUrl);
    setProfileUrl(user.githubLink);
    console.log(userName);
  }, [user]);

  if (userName !== "" && avatarUrl !== "" && profileUrl !== "") {
    return (
      <StyledUserInfo avatar={avatarUrl}>
        <div className="avatar"></div>
        <div className="data">
          <div className="name" onClick={() => openInNewTab(profileUrl)}>
            <div className="text">{userName}</div>
            <div className="textUrl">{profileUrl}</div>
          </div>
        </div>
      </StyledUserInfo>
    );
  } else return <div></div>;
};
