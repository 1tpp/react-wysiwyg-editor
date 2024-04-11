import { useEffect, useRef } from "react";

import EditorJS from "@editorjs/editorjs";
import EditorTools from "./EditorTools";
import DEFAULT_INITIAL_DATA from "../constants/blog-data.json";

const RichTextEditor: React.FC = () => {
  const ejInstance = useRef<EditorJS | null>(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        if (editor) {
          ejInstance.current = editor;
        }
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      // onChange: async () => {
      //   if (ejInstance.current) {
      //     const content = await ejInstance.current.saver.save();
      //     console.log(content);
      //   }
      // },
      tools: EditorTools,
    });
  };

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  const saveData = async () => {
    if (ejInstance.current) {
      const content = await ejInstance.current.saver.save();
      console.log(content);
    }
  };

  return (
    <div>
      <div id="editorjs"></div>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={saveData}
      >
        Save Data
      </button>
    </div>
  );
};

export default RichTextEditor;
