import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Style.css";


function App() {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  return (
    
            <>
      <Editor
        apiKey="cxr4ta9k13sy46lz4dm25e0ja0vl3w68gazv32jvxwrk92y8"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Online Document Editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins:
            "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave",
          toolbar:
            "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
          height: "700px",
          toolbar_sticky: true,
          icons: "thin",
          skin: "material-classic",
          icons: "material",
          content_style: `
          body {
              background: #fff;
          }

          @media (min-width: 840px) {
              html {
                  background: #eceef4;
                  min-height: 100%;
                  padding: 0 .5rem
               }

              body {
                  background-color: #fff;
                  box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                  box-sizing: border-box;
                  margin: 1rem auto 0;
                  max-width: 820px;
                  min-height: calc(100vh - 1rem);
                  padding:4rem 6rem 6rem 6rem
               }
           }
         `, 
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  
  );
}

export default App;
