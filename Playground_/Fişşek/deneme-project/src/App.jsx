import React from "react";
import UserInput from "./assets/Components/UserInput";
import Elements from "./assets/Elements";

export default function App() {
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    eMail: "",
  });

  function handleClickEvent(event) {
    setUserData((oldUserData) => {
      return { ...oldUserData, [event.target.name]: event.target.value };
    });
  }

  //bunları map ile olusturmam gerek.
  ///FİŞEEEEEEEEEEEEEEEK FİŞŞŞŞŞŞŞŞŞŞEEEK!

  const DaElements = Elements.map((f) => (
    <UserInput
      key={f.id}
      name={f.name}
      placeHolder={f.placeHolder}
      value={f.name}
      handleClickEvent={handleClickEvent}
    />
  ));

  return (
    <>
      <form>
        <span>
          First Name: {userData.firstName}
          <br />
          Last Name: {userData.lastName}
          <br />
          E-Mail: {userData.eMail}
        </span>
        <br />
        {DaElements}
      </form>
    </>
  );
}
