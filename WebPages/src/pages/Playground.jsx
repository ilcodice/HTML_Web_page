import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage, setFontSize } from '../store/slices/workspaceSlice'
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';

export default function Playground() {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.workspace.language);
  const fontSize = useSelector((state) => state.workspace.fontSize);

  const [code, setCode] = useState('// Start coding...');
  const [output, setOutput] = useState('');

  const languageExtension = language === 'javascript' ? javascript() : python();

  const runCode = () => {
    if (language === 'javascript') {
      try {
        // eslint-disable-next-line no-new-func
        const result = new Function(code)();
        setOutput(String(result));
      } catch (err) {
        setOutput(err.message);
      }
    } else {
      setOutput('Python execution is not supported in this demo.');
    }
  };

  return (
    <div>
      <Split className="h-screen bg-gray-200" sizes={[60, 40]} minSize={100} gutterSize={5} direction="vertical">
        <div style={{ padding: 12, height: '450px' }}>
          <div style={{ marginBottom: 12 }}>
            <select value={language} onChange={(e) => dispatch(setLanguage(e.target.value))}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>

            <span style={{ marginLeft: 25 }}>Font size:</span>
            <select
              value={fontSize}
              onChange={(e) => dispatch(setFontSize(parseInt(e.target.value)))}
              style={{ marginLeft: 5 }}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={14}>14</option>
            </select>
          </div>

          <CodeMirror
            value={code}
            extensions={[languageExtension]}
            onChange={setCode}
            height="400px"
            theme={oneDark}
            style={{ fontSize }}
          />
        </div>

        <div
          style={{
            padding: 12,
            backgroundColor: '#C1C2C7',
            color: 'white',
            margin: '10px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            overflowY: 'auto',
            height: '100%',
          }}
        >
          <strong>Output:</strong>
          <pre>{output}</pre>
        </div>

        <button
          onClick={runCode}
          style={{ marginLeft: 20, padding: '4px 12px', cursor: 'pointer', border: 'solid' }}
        >
          Submit
        </button>
      </Split>
    </div>
  );
}
