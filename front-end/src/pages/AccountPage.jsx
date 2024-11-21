import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UpdateBio from "../components/UpdateBio";
import AddArticle from "../components/AddArticle";
import UpdateAvatar from "../components/UpdateAvatar";
import UpdatePassword from "../components/UpdatePassword";

const AccountPage = () => {
  const userId = useSelector((state) => state.auth.userId);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [users, updateUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/api/users");
      const usersInfo = response.data;
      updateUsers(usersInfo);
    };
    loadUsers();
  }, []);

  if (users.length > 0) {
    const user = users.find((user) => user.userId === userId);

    if (isAuthenticated) {
      const title = user.title;
      if (title === "admin" || title === "moderator") {
        return (
          <div className="account-wrap">
            <UpdatePassword />
            <UpdateBio />
            <AddArticle />
            {/* <UpdateAvatar /> */}
          </div>
        );
      } else {
        return (
          <div className="account-wrap">
            <UpdatePassword />
            {/* <UpdateAvatar />{" "} */}
          </div>
        );
      }
    }
  }
};

export default AccountPage;
