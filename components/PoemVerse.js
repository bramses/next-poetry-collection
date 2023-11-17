import styles from "../styles/PoemVerse.module.css"; // CSS module for styling
import Editor, { DiffEditor, useMonaco, loader, moanco } from "@monaco-editor/react";
import { useState } from "react";

const defaultVal = `summon(the_hero) // to the front
let him = "stick his courage to his chest"
if (he_falls) {
  while (fighting) {
    continue // to
  }
  summon(the_rest)
}`;

const PoemVerse = ({ stanza , files = [] }) => {

  const [currentFile, setCurrentFile] = useState(files[0] || 'file1.js');
  const [fileContent, setFileContent] = useState({
    'file1.js': `import { the_hero, summon, he_falls, the_rest, fighting } from './mappings.js'

// START_POEM

summon(the_hero) // to the front
let him = "stick his courage to his chest"
if (he_falls) {
  while (fighting) {
    continue // to
  }
  summon(the_rest)
}

// END_POEM`,
    'file2.js': `export const the_hero = "He who protects";
export const summon = console.log
export const he_falls = true
export const fighting = false
export const the_rest = "Those who are protected"`,
    // Add more files as needed
  });
 

  function handleEditorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  // {`button-tab ${currentFile === 'file1.js' ? 'button-tab-active' : ''}`}

  return (
    <>
      <button onClick={() => setCurrentFile('file1.js')} className={currentFile === 'file1.js' ? styles['button-tab-active'] : styles["button-tab"]}>file1.js</button>
      <button onClick={() => setCurrentFile('file2.js')} className={currentFile === 'file2.js' ? styles['button-tab-active'] : styles["button-tab"]}>file2.js</button>
      {/* <p>{stanza}</p> */}
      <Editor
        height="100%"
        onMount={handleEditorDidMount}
        width="100vw"
        defaultLanguage="javascript"
        defaultValue={defaultVal}
        options={{
          lineNumbers: "off",
          minimap: { enabled: false },
          showFoldingControls: "never",
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
          wordWrap: "on",
          readOnly: true,
        }}
        value={fileContent[currentFile]}
      />
    </>
  );
};

export default PoemVerse;
