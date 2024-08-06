import { useLocation } from "react-router-dom";
const EditManger = () => {
  const location = useLocation();
  const { detail } = location.state;

  return (
    <div>
      <h2>Edit Manager</h2>
      <p>الاسم: {detail.first_name}</p>
      <p>البريد الإلكتروني: {detail.email}</p>
      <p>رقم الهاتف: {detail.phone_number}</p>
      {/* Add your form or editing logic here */}
    </div>
  );
};
export default EditManger;
