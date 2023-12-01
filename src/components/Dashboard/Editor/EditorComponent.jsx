import styles from "./EditorComponent.module.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorComponent = ({ data, setData }) => {
  return (
    <ReactQuill
      className={`${styles.quill} font-poppins w-10/12`}
        theme="snow" // Puedes cambiar el tema según tus preferencias
        value={data.text}
        onChange={(value) => setData({...data, text:value})}
      />
  );
};

export default EditorComponent;
