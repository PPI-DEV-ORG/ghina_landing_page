"use client";

import React, { useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Palette,
  Undo,
  Redo,
  RemoveFormatting,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const COLOR_OPTIONS = [
  { label: "Hitam Default", value: "#111827" },
  { label: "Abu-Abu Gelap", value: "#4B5563" },
  { label: "Hijau Ghina (Primary)", value: "#145A43" },
  { label: "Hijau Emerald", value: "#059669" },
  { label: "Biru Samtek", value: "#0C6791" },
  { label: "Merah Samtek", value: "#B62C2C" },
  { label: "Oranye / Amber", value: "#D97706" },
  { label: "Ungu Indigo", value: "#4F46E5" },
];

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Tulis isi artikel di sini...",
  minHeight = "320px",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const isUpdatingRef = useRef(false);

  // Sync incoming value to contentEditable innerHTML only if changed externally
  useEffect(() => {
    if (editorRef.current && !isUpdatingRef.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "";
      }
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      isUpdatingRef.current = true;
      const html = editorRef.current.innerHTML;
      onChange(html);
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 0);
    }
  };

  const exec = (command: string, val: string | undefined = undefined) => {
    document.execCommand(command, false, val);
    if (editorRef.current) {
      editorRef.current.focus();
      handleInput();
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const color = e.target.value;
    if (color) {
      exec("foreColor", color);
      e.target.value = "";
    }
  };

  const handleHeading = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      exec("formatBlock", val);
      e.target.value = "";
    }
  };

  const handleInsertLink = () => {
    const url = prompt("Masukkan tautan URL (misal: https://example.com):");
    if (url) {
      exec("createLink", url);
    }
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white shadow-xs focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-[#F8FAFA] border-b border-border text-foreground">
        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => exec("undo")}
          title="Undo"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200 transition-colors"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("redo")}
          title="Redo"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200 transition-colors"
        >
          <Redo className="w-4 h-4" />
        </button>

        <div className="h-5 w-[1px] bg-border mx-1" />

        {/* Heading Dropdown */}
        <select
          onChange={handleHeading}
          defaultValue=""
          aria-label="Format Paragraf"
          className="text-xs h-7.5 px-2 py-1 rounded bg-white border border-border text-foreground hover:border-gray-400 font-medium focus:outline-none"
        >
          <option value="" disabled>Format Judul</option>
          <option value="<p>">Normal (Paragraf)</option>
          <option value="<h2>">Sub Judul Besar (H2)</option>
          <option value="<h3>">Sub Judul Sedang (H3)</option>
          <option value="<h4>">Sub Judul Kecil (H4)</option>
        </select>

        {/* Font Color Dropdown */}
        <div className="flex items-center gap-1 bg-white border border-border rounded px-1.5 py-0.5">
          <Palette className="w-3.5 h-3.5 text-secondary shrink-0" />
          <select
            onChange={handleColorChange}
            defaultValue=""
            aria-label="Warna Teks"
            className="text-xs h-6 bg-transparent text-foreground hover:border-gray-400 font-medium focus:outline-none cursor-pointer"
          >
            <option value="" disabled>Warna Font</option>
            {COLOR_OPTIONS.map((c) => (
              <option key={c.value} value={c.value} style={{ color: c.value }}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="h-5 w-[1px] bg-border mx-1" />

        {/* Basic formatting */}
        <button
          type="button"
          onClick={() => exec("bold")}
          title="Bold (Ctrl+B)"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200 font-bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("italic")}
          title="Italic (Ctrl+I)"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("underline")}
          title="Underline (Ctrl+U)"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <UnderlineIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("strikeThrough")}
          title="Strikethrough"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <div className="h-5 w-[1px] bg-border mx-1" />

        {/* Lists */}
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("insertUnorderedList");
          }}
          title="Bullet List"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("insertOrderedList");
          }}
          title="Numbered List"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("formatBlock", "<blockquote>");
          }}
          title="Kutipan / Blockquote"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <Quote className="w-4 h-4" />
        </button>

        <div className="h-5 w-[1px] bg-border mx-1" />

        {/* Alignment */}
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("justifyLeft");
          }}
          title="Rata Kiri"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("justifyCenter");
          }}
          title="Rata Tengah"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("justifyRight");
          }}
          title="Rata Kanan"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <AlignRight className="w-4 h-4" />
        </button>

        <div className="h-5 w-[1px] bg-border mx-1" />

        {/* Link & Clear */}
        <button
          type="button"
          onClick={handleInsertLink}
          title="Sisipkan Tautan Web (Link)"
          className="p-1.5 rounded hover:bg-white text-gray-700 hover:text-black border border-transparent hover:border-gray-200"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            exec("removeFormat");
          }}
          title="Hapus Format (Clear Formatting)"
          className="p-1.5 rounded hover:bg-white text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200"
        >
          <RemoveFormatting className="w-4 h-4" />
        </button>
      </div>

      {/* Editable Content Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        style={{ minHeight }}
        data-placeholder={placeholder}
        className="p-4 sm:p-5 outline-none text-foreground text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[500px] focus:outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2 [&_li]:my-1 [&_blockquote]:border-l-4 [&_blockquote]:border-secondary [&_blockquote]:pl-4 [&_blockquote]:py-1 [&_blockquote]:my-3 [&_blockquote]:italic [&_blockquote]:bg-secondary-bg/40 [&_blockquote]:rounded-r-lg [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-4 [&_h3]:mb-2 [&_a]:text-secondary [&_a]:underline"
      />
    </div>
  );
}

