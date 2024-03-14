import { ChangeEvent } from "react";

export default function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return <div className="mt-2">
    <div className="w-full mb-4">
      <div className="flex items-center justify-between border">
        <div className="my-2 bg-white rounded-b-lg w-full">
          <label className="sr-only">Publish Post</label>
          <textarea onChange={onChange} id='editor' rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
        </div>
      </div>
    </div>
  </div>
}
