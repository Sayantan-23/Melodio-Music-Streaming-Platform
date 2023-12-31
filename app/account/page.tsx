import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

// export const metadata = {
//   title: "Melodio",
//   description: "Indulge in Melody",
// };

const Account = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="form-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Profile</h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
