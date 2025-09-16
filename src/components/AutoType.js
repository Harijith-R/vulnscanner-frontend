"use client";

import { useEffect, useState } from "react";

export default function AutoType({ words = [], speed = 80, pause = 1500, className = "" }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    const word = words[index % words.length];

    if (typing) {
      timer = setTimeout(() => {
        setText((t) => word.slice(0, t.length + 1));
        if (text.length + 1 === word.length) setTyping(false);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setTyping(true);
        setIndex((i) => i + 1);
      }, pause);
      // clear displayed text to start next short delay
      if (!typing) setText("");
    }
    return () => clearTimeout(timer);
  }, [text, typing, index, words, speed, pause]);

  return (
    <span className={className}>
      <span className="text-cyan-300">{text}</span>
      <span className="type-cursor" />
    </span>
  );
}
