"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Entrance = () => {
  const [text, setText] = useState("");

  const handleSubmitText = () => {
    console.log(text);
  };

  return (
    <main className="min-h-screen bg-background px-4 pt-10">
      <form className="mx-auto flex min-h-[122px] w-full max-w-[730px] items-end gap-3 rounded-[22px] border border-[#dfe5ec] bg-white px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
        <Input
          onChange={(e) => setText(e.target.value)}
          aria-label="ai 对话框"
          placeholder="快来和我进行对话吧~"
          className="h-auto flex-1 self-start border-0 bg-transparent px-0 pt-1.5 text-sm text-slate-700 shadow-none placeholder:text-[#9aa3af] focus-visible:ring-0"
        />
        <Button
          onClick={handleSubmitText}
          type="submit"
          size="icon"
          aria-label="提交"
          className="size-9 rounded-xl bg-[#f3f4f6] text-[#a8afb8] hover:bg-[#e9ecf0] hover:text-[#7d8793]"
        >
          <ArrowUp className="size-5" />
        </Button>
      </form>
    </main>
  );
};

export default Entrance;
