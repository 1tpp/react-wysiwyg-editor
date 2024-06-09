import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Checklist from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Link from "@editorjs/link";
import Marker from "@editorjs/marker";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import InlineCode from "@editorjs/inline-code";

const EditorTools = {
  header: {
    class: Header,
    inlineToolbar: true,
  },
  list: List,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "http://localhost:8000/uploadFile", // Update for your server
        byUrl: "http://localhost:8000/fetchUrl", // Update for your server
      },
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: Quote,
  checklist: Checklist,
  delimiter: Delimiter,
  embed: Embed,
  inlineCode: InlineCode,
  link: Link,
  marker: Marker,
  // raw: Raw,
  simpleImage: SimpleImage,
  table: Table,
  warning: Warning,
};

export default EditorTools;
