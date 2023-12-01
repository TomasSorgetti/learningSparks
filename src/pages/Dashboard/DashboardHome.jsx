import { Link } from "react-router-dom";
import Navigation from "../../components/Dashboard/Navigation/Navigation";




const DashboardHome = () => {
  return (
    <div className="w-11/12 m-auto">
      <Navigation/>
      <Link to="/dashboard/add-new-blog">Add New Blog Article</Link>
    </div>
  );
}

export default DashboardHome