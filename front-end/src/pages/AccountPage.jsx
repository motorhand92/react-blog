import { useSelector } from "react-redux";
import UpdateBio from "../components/UpdateBio";
import AddArticle from "../components/AddArticle";
import UpdateAvatar from "../components/UpdateAvatar";

const AccountPage = () => {
  const userId = useSelector((state) => state.auth.userId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const users = useSelector((state) => state.user.users);
  const user = users.find((user) => user.userId === userId);

  if (isAuthenticated) {
    const title = user.title;
    if (title === "admin" || title === "moderator") {
      return (
        <div className="account-wrap">
          <UpdateBio />
          <AddArticle />
          <UpdateAvatar />
        </div>
      );
    } else {
      return (
        <div className="account-wrap">
          <UpdateAvatar />
        </div>
      );
    }
  }
};

export default AccountPage;
