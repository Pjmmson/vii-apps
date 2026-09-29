import { useAccountCreateForm } from "../../hooks/useAccountCreateForm";
import ButtonActions from "../../components/buttonActions";

const CreateViiAccount = () => {
  const {
    createAccData,
    MONTHS,
    handleChange,
    handleCreate,
    isLoading,
    error,
  } = useAccountCreateForm();
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2">
      <h2>{"create-your-vii-account"}</h2>
      <p>{"one-vii-account-is-all-you-need-to-access-all-vii-services."}</p>
      <div className="flex flex-col w-lg justify-center gap-2 p-1">
        <div className="flex flex-row justify-center gap-2">
          <input
            name="firstName"
            value={createAccData?.firstName || ""}
            className="w-64 onChange border border-gray-500 rounded-md items-center p-1"
            placeholder="first-name"
            onChange={handleChange}
          />
          <input
            name="lastName"
            value={createAccData?.lastName || ""}
            className="w-64 border border-gray-500 rounded-md items-center p-1"
            placeholder="last-name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-center gap-2">
          <input
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            className="w-64 border border-gray-500 rounded-md"
            name="birthDate"
            placeholder="date-of-birth"
            value={createAccData?.birthDate || ""}
            onChange={handleChange}
          />
          <input
            name="career"
            value={createAccData?.career || ""}
            className="w-64 border border-gray-500 rounded-md items-center p-1"
            placeholder="career"
            onChange={handleChange}
          />
        </div>
        <input
          name="address"
          value={createAccData?.address || ""}
          className="w-full border border-gray-500 rounded-md items-center p-1"
          placeholder="address"
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          value={createAccData?.phoneNumber || ""}
          className="w-full border border-gray-500 rounded-md items-center p-1"
          placeholder="phone-number"
          onChange={handleChange}
        />
        <input
          name="email"
          value={createAccData?.email || ""}
          className="w-full border border-gray-500 rounded-md items-center p-1"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={createAccData?.password || ""}
          className="w-full border border-gray-500 rounded-md items-center p-1"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          value={createAccData?.confirmPassword || ""}
          className="w-full border border-gray-500 rounded-md items-center p-1"
          placeholder="confirmed-password"
          onChange={handleChange}
        />
      </div>
      <ButtonActions name={"continue"} handleActions={handleCreate} />
    </div>
  );
};
export default CreateViiAccount;
