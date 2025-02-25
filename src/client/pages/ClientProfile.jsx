import ppIcon from "../../assets/client/pp.svg";
// import editIcon from "../../assets/client/edit.png";
// import darkEditIcon from "../../assets/client/darkEdit.png";
import { Accordion } from "flowbite-react";
import { EditProfileForm } from "../components/forms/EditProfileForm";
import { ChangePasswordForm } from "../components/forms/ChangePasswordForm";

const ClientProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-6">
        <img src={ppIcon} alt="Profile Icon" className="w-20 h-20 mb-2" />
        <h2 className="text-xl font-bold text-primary">إدارة الملف الشخصي</h2>
      </div>

      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title
            style={{
              color: "black",
              backgroundColor: "lightblue",
              border: "1px solid",
              padding: "25px",
            }}
          >
            تعديل معلومات الملف الشخصي
          </Accordion.Title>
          <Accordion.Content>
            <EditProfileForm />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title
            style={{ color: "black", backgroundColor: "lightblue" ,padding: "25px",}}
          >
            تعديل كلمة المرور
          </Accordion.Title>
          <Accordion.Content>
            <ChangePasswordForm />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default ClientProfile;
