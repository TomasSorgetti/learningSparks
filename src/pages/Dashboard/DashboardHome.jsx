import { Link } from "react-router-dom";




const DashboardHome = () => {
  return (
    <div className="w-11/12 m-auto" >
      <Link to="/dashboard/add-new-blog">Add New Blog Article</Link>
    </div>
  );
}

export default DashboardHome