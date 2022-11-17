import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);
    /*const datas = {
      name: userData.pseudo,
      userId: userData._id,
      file: document.getElementById("avatar").files[0],
    };*/
    console.log(file[0]);

    console.log(userData._id);
    dispatch(uploadPicture(data, userData._id));
  };

  return (
    <form
      action=""
      onSubmit={handlePicture}
      className="upload-pic"
      encType="multipart/form-data"
    >
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
