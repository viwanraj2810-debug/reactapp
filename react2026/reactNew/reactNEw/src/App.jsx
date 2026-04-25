import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [range, setRange] = useState(8);
  const [includeNum, setIncludeNum] = useState(true);
  const [includeSyblols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const algo = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNum) str += "0123456789";

    if (includeSyblols) str += "()*&^%$#@!~`?/{}[]*+-/";
    for (let i = 0; i <= range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range, includeNum, includeSyblols, setPassword]);

  useEffect(() => {
    algo();
  }, [range, includeNum, includeSyblols, setPassword]);

  const passwordRef = useRef(null);
  return (
    <>
      <div className="bg-zinc-900 h-screen w-full flex flex-col items-center justify-start p-10">
        <div className="bg-zinc-400 w-full max-w-md h-10 flex">
          <input
            type="text"
            value={password}
            readOnly
            className="bg-amber-50 rounded-md w-full text-amber-900"
            ref={passwordRef}
          />
          <button className="bg-blue-600 w-30 h-10" onClick={()=>{
            passwordRef.current?.select
            window.navigator.clipboard.writeText(password)
          }}> Copy</button>
        </div>
        <div className=" flex gap-2.5">
          <label className="text-amber-200">Length: {range}</label>
          <input
            type="range"
            value={range}
            lable=""
            onChange={(e) => setRange(e.target.value)}
            className="cursor-pointer"
          />
          <label className="text-amber-200">Number:</label>
          <input
            type="checkbox"
            defaultChecked={includeNum}
            onChange={() => setIncludeNum((prev) => !prev)}
            className="cursor-pointer"
          />
          <label className="text-amber-200">Symbol</label>
          <input
            type="checkbox"
            defaultChecked={includeSyblols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default App;
