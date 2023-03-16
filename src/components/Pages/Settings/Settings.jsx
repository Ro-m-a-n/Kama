import "./Settings.css";
import SettingsReduxForm from "./settingsForm";
import * as axios from "axios";

const Settings = (props) => {
  let url =
    "https://api.telegram.org/bot6066251537:AAE51nrOwnAo6dWx5fkg13RD-KQPhYxIa-A/sendMessage";
  let chatId = -1001989394281;

  const onSubmit = (DataFromForm) => {
    axios.post(url, { chat_id: chatId, text: DataFromForm.messageFromInput });
  };

  return (
    <div>
      <SettingsReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Settings;
