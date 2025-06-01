import { useState } from "react";
import { generateUniqueId, setUser } from "../../helper/helper";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    fullname: string;
    username: string;
  }>({
    fullname: "",
    username: "",
  });
  const [error, setError] = useState<boolean>(false);

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!data?.fullname || !data?.username) {
      setError(true);
      return;
    }
    setError(false);
    const body = JSON.stringify({
      ...data,
      id: generateUniqueId(),
    });

    setUser(body);
    navigate("/home");
  };
  return (
    <>
      <div className="container">
        <h1>Create Profile</h1>
        <div className="form-fields">
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                onChange={updateUser}
              />
              {error && !data?.fullname ? (
                <span>Full Name is required</span>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={updateUser}
              />
              {error && !data?.username ? (
                <span>Username is required</span>
              ) : null}
            </div>
            <div className="form-control">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
