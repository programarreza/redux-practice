const UserInfoWithUseReducer = () => {



	
  return (
    <form>
      <input
        className="border"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        className="border"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
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

export default UserInfoWithUseReducer;
