import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });

  console.log(user);

  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        className="border"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default UserInfoWithUseState;
