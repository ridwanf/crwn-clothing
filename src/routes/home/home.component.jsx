import "../../directory-item/directory-item.styles.scss";
import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <Directory />

      <Outlet />
    </div>
  );
};

export default Home;
