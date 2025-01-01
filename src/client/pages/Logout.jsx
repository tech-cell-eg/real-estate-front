import { useState } from "react";
import Dialog from "../components/Dialog";
import signOut from "../../assets/client/signOut.svg";
import { Button } from "flowbite-react";

const Logout = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogoutAccept = () => {
    console.log("Logged out");
    setIsDialogOpen(false);
  };

  const handleLogoutReject = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)} className="btn-logout bg-primary">
        Logout
      </Button>
      

      <Dialog
        isOpen={isDialogOpen}
        onAccept={handleLogoutAccept}
        onReject={handleLogoutReject}
        statement="هل انت متأكد من تسجيل الخروج ؟"
        image={signOut}
      />
    </div>
  );
};

export default Logout;
