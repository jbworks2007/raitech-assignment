import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function CKeditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "undo",
          "redo",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "link",
          "insertTable",
          "mediaEmbed",
          "|",
          "bulletedList",
          "numberedList",
          "indent",
          "outdent",
        ],
        plugins: [
          Bold,
          Essentials,
          Heading,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          Table,
          Undo,
        ],
        initialData: `<h1>Instructions:</h1>
        <ol>
          <li>The exam will consists of 20 questions (Technical + Aptitude).. Each question is of 1 mark(s).</li>
          <li>There is a negative marking (25%) for wrong answer.</li>
          <li>
The duration of the exam is 30 minutes. The exam will be automatically submitted once time is over.
          </li>
          <li>Arrange for stable Internet connectivity.</li>
          <li>Giving examination on Laptop or Desktop is highly recommended.</li>
          <li>Make sure laptop is fully charged. Make sure to arrange for uninterrupted power supply.</li>
          <li>Close all browsers/tabs before starting the online examination.</li>
          <li>Once the exam starts, do not switch to any other window/tab. On doing so, your attempt may be considered as malpractice and your exam may get terminated.</li>
          <li>
          Do not Pickup/Receive the Call during the exam. This also will be treated as malpractice.

          </li>
          <li>
Make sure to give permission to your browser to use your camera. Until camera is not enabled, you may not be able to start the exam.

          </li>
          <li>To avoid unwanted pop-ups, use of Ad Blocker is recommended.</li>
          <li>
          It is recommended to use Google Chrome web browser on a desktop/laptop/tab/smart phone.</li>
          <li>
Do not use the back button of keyboard or close button/icon to go back to previous page or to close the screen.

          </li>

        </ol>
        `,
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
}
