"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import Header from "@components/Header"
import { EditorData } from '@data/dummyData';

function Editor(){
  const [editorContent, setEditorContent] = useState(EditorData);

  function handleEditorChange(content, delta, source, editor){
    setEditorContent(content); 
  };
  
  return(
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <ReactQuill 
        value={editorContent} 
        onChange={handleEditorChange}
        theme="snow"  
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }]
          ]
        }}
        style={{ height: '400px' }} 
      />
    </div>
  )
};
export default Editor;