# iHatePDF — Offline & Privacy-First PDF Toolkit

iHatePDF is a client-side, privacy-focused alternative to online PDF tools.  
It replicates the core features of iLovePDF — but no files are ever uploaded to a server. All PDF processing happens locally in the user’s browser using WebAssembly and JavaScript, so the app also works fully offline after loading.

------------------------------------------------------------

🚀 Key Highlights

• 100% offline — works without internet  
• Client-side only — no backend or server storage  
• Privacy-first — files never leave the device  
• Fast processing using WebAssembly & workers  
• Lightweight UI inspired by iLovePDF  
• Installable as a Progressive Web App (PWA)

“iHatePDF processes your files locally on your device.  
No files are uploaded or stored on any server.”

------------------------------------------------------------

🧩 Available Tools & Features

• Merge PDFs  
• Split PDF (by range / pages)  
• Compress PDF  
• Extract pages  
• Remove pages  
• Reorder pages  
• Rotate pages  
• Add watermark (text / image)  
• Add / Remove password (local encryption)  
• Edit metadata  
• Images → PDF  
• PDF → Images (JPG / PNG)

Modular architecture allows adding more tools later.

------------------------------------------------------------

🛠 Technology Stack

• React.js, Tailwind CSS  
• WebAssembly (WASM) utilities  
• pdf.js / pdf-lib  
• Web Workers for heavy tasks  
• PWA + Service Worker for offline mode

No server, no database, no cloud uploads.

------------------------------------------------------------



Each tool lives in its own independent module.

------------------------------------------------------------

🧑‍💻 Development Setup

1) Clone repository  
   git clone https://github.com/your-repo/ihatepdf

2) Install dependencies  
   npm install

3) Run locally  
   npm run dev   (or npm start)

4) Build static export  
   npm run build

Output can be hosted on any static hosting platform.

------------------------------------------------------------

💾 Offline Mode (PWA)

• Required assets cached locally  
• Can be installed to desktop/mobile  
• Tools continue working offline

Once loaded, internet connection is not required.

------------------------------------------------------------

🔐 Privacy & Security Policy

• No file upload  
• No tracking  
• No external APIs  
• All processing stays inside browser

Suitable for confidential & sensitive documents.

------------------------------------------------------------

🧭 Roadmap (Planned Upgrades)

• Offline OCR text extraction  
• PDF annotations  
• Page numbering  
• Local signature tool  
• Batch processing

------------------------------------------------------------

📝 License

Open-source — free to use and modify.  
Use responsibly and respect document privacy.

------------------------------------------------------------

❤️ Credits

Inspired by iLovePDF — recreated as a local-only, privacy-friendly alternative for users who don’t want to upload their PDFs to servers.
