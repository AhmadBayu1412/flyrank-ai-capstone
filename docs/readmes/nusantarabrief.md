# 📰 NusantaraBrief AI — Autonomous Morning Intelligence Scout

**Assignment 8.1: Documentation & Demo (FL-09)**  
**Author:** Ahmad Bayu Samudera ([@AhmadBayu1412](https://github.com/AhmadBayu1412))  
**Track:** General AI Fluency  
**Demo Video:** [Tautkan Link Video Demo 3–5 Menit di sini (Loom / YouTube / Drive)]  

---

## 🌟 Tentang Produk (Product Overview)

NusantaraBrief AI adalah agen kurasi berita cerdas berbasis **n8n** yang dirancang untuk menganalisis feed berita nasional secara komprehensif dan efisien. Alur kerja ini mengekstraksi artikel terkini dari RSS resmi Antara News, membatasi dan menyusun data ke dalam payload terstruktur, menganalisis implikasi strategis menggunakan LangChain LLM Chain dengan model **Groq (`groq/compound-mini`)**, menyuntikkan inline styling HTML responsif melalui JavaScript, dan mendistribusikan buletin 3-Pilar (*Core Facts*, *Key Lessons*, *Next Steps*) langsung ke email pengguna via SMTP.

🎯 **Target Pengguna:**  
- **Eksekutif & Founder:** Membutuhkan intelijen bisnis makro dan kebijakan nasional tanpa terdistraksi oleh artikel clickbait atau gosip.
- **Analis Kebijakan & Strategi:** Memerlukan pemetaan fakta konkret, timeline, dan dampak regulasi secara terstruktur.
- **Profesional Sibuk:** Membutuhkan ringkasan berbobot tinggi (*high-signal morning briefing*) yang dapat dibaca dalam waktu kurang dari 3 menit setiap pagi.

---

## 📐 Arsitektur Alur Kerja (Architecture Workflow)

```text
[When clicking ‘Execute workflow’ (Manual Trigger)]
│
▼
┌────────────────────────┐
│     RSS Read Node      │ ◄── Antara News RSS (terkini.xml)
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│       Limit Node       │ ◄── Max 10 Items
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│   Code in JavaScript   │ ◄── Agregasi Judul, Link, Snippet -> `news_payload`
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│    Basic LLM Chain     │ ◄── LangChain Chain + Groq Chat Model (`groq/compound-mini`)
└───────────┬────────────┘     (Editorial 3-Pilar: Core Facts, Key Lessons, Next Steps)
            │
            ▼
┌────────────────────────┐
│  Code in JavaScript 1  │ ◄── HTML Regex Sanitizer & Inline CSS Styler
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│       HTML Node        │ ◄── Template Layout Kartu Responsif (720px max-width)
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│   Send an Email Node   │ ──► [Email Buletin HTML Terkirim ke Inbox Pribadi]
└────────────────────────┘     Subject: 📰 NusantaraBrief AI: Laporan Pagi Ini
```

---

## 🏛️ Struktur 3-Pilar Laporan Eksekutif & Contoh Output

Setiap berita terpilih dianalisis secara mendalam dalam Bahasa Indonesia formal dengan struktur:
1. 📌 **Core Facts (Fakta Utama)**: 1 paragraf utuh (3–4 kalimat) yang merinci konteks penuh, timeline, dan angka-angka krusial tanpa perlu pembaca membuka link asli.
2. 💡 **Key Lessons (Pelajaran yang Diambil)**: 2–3 kalimat analisis mendalam mengenai dampak strategis, tren industri makro, atau pola kebijakan.
3. 🚀 **Next Steps (Langkah Selanjutnya)**: 2 kalimat terukur mengenai tonggak capaian (*milestone*) berikutnya, implikasi aksi, atau sinyal yang harus dipantau.

### Contoh Tampilan Output (HTML Email Snippet):
```html
<div style="margin:32px 0 18px;padding:0 0 14px;border-bottom:1px solid #e5e7eb;">
  <h2 style="margin:0;font-size:20px;line-height:1.45;color:#101828;font-weight:700;">
    Pemerintah Resmikan Regulasi Insentif Pajak Sektor Manufaktur Hijau
  </h2>
</div>
<p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:#344054;">
  <strong style="font-weight:700;color:#101828;">📌 Fakta Utama:</strong> Kementerian Keuangan secara resmi mengumumkan kebijakan *tax allowance* terbaru hingga 30% bagi industri manufaktur yang mengadopsi energi terbarukan mulai kuartal IV.
</p>
<p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:#344054;">
  <strong style="font-weight:700;color:#101828;">💡 Pelajaran yang Diambil:</strong> Langkah ini mempercepat transisi industri domestik menuju standar ESG global, sekaligus meningkatkan daya tarik investasi asing di tengah persaingan dekarbonisasi kawasan ASEAN.
</p>
<p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:#344054;">
  <strong style="font-weight:700;color:#101828;">🚀 Langkah Selanjutnya:</strong> Perusahaan manufaktur perlu segera melakukan audit efisiensi energi internal sebelum pendaftaran insentif dibuka pada awal bulan depan.
</p>
```

---

## 🛠️ Panduan Instalasi & Eksekusi Mandiri (Stranger-Proof Setup)

Siapa pun dapat mereproduksi dan menjalankan alur kerja ini secara mandiri dengan langkah berikut:

1. **Jalankan n8n di Mesin Lokal (Docker):**
   ```bash
   docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
   ```

2. **Akses Dashboard n8n:**
   Buka browser dan navigasikan ke `http://localhost:5678`.

3. **Impor Workflow:**
   - Masuk ke menu **Workflows** > **Import from File**.
   - Pilih berkas [`workflows/NusantaraBrief.json`](./workflows/NusantaraBrief.json) dari repo ini.

4. **Konfigurasi Kredensial (Credentials Vault):**
   - **Groq API Key:** Daftarkan API Key Groq pada node `Groq Chat Model` (menggunakan model `groq/compound-mini`).
   - **SMTP Account:** Daftarkan akun SMTP / Gmail App Password pada node `Send an Email` (Host: `smtp.gmail.com`, Port: `465` / `587`).

5. **Eksekusi:**
   Klik tombol **Execute workflow** / **Test Workflow** untuk menjalankan pipeline secara end-to-end.

---

## 🎥 Panduan Rekaman Video Demo (Live Run 3–5 Menit)

Video demonstrasi capstone wajib mendemonstrasikan eksekusi nyata aplikasi tanpa menggunakan slide presentasi (*pitch deck*).

**Struktur Rekaman yang Disarankan:**
1. **Menit 0:00 - 0:45:** Perkenalan diri, tujuan *NusantaraBrief AI*, dan problem statement (kebisingan berita vs kebutuhan intelijen eksekutif).
2. **Menit 0:45 - 2:30 (Live End-to-End Run):** Klik tombol *Execute workflow* di canvas n8n, perlihatkan aliran data dari RSS Antara News $\rightarrow$ Limit $\rightarrow$ JavaScript Payload $\rightarrow$ LangChain Groq LLM $\rightarrow$ JS Styler $\rightarrow$ HTML Card Template $\rightarrow$ SMTP Node.
3. **Menit 2:30 - 3:30 (Hasil Email Nyata):** Buka inbox Gmail dan perlihatkan email masuk dengan layout kartu responsif 3-Pilar.
4. **Menit 3:30 - 4:30 (1 Keputusan Desain & 1 Keterbatasan):**
   - *1 Design Decision:* Menjelaskan mengapa menggunakan *Dual-Stage HTML Formatting* (JS regex sanitizer + HTML Card Template) untuk menjamin kompatibilitas cross-client email tanpa inline styling yang rusak.
   - *1 Real Limitation:* Ketergantungan pada kestabilan feed XML pihak ketiga (Antara News) dan penanganan fallback jika format feed berubah.

---

## 📊 Hasil Evaluasi (v2 Eval Results) & Limitasi Nyata

### Ringkasan Pengujian (Eval v2):
- **Akurasi Ekstraksi:** Berhasil menyaring 10 artikel RSS mentah dan memilah isu paling berdampak tanpa *hallucination*.
- **Waktu Eksekusi Rata-rata:** ~8–15 detik berkat inferensi ultra-cepat model Groq `compound-mini`.
- **Rendering Klien Email:** Format HTML kartu bersih teruji responsif pada Gmail Web, Gmail iOS, dan Gmail Android.

### Technical Decision & Real Limitation:
- **1 Design Decision (Dual-Stage HTML Formatting):** Menggunakan node JavaScript post-processor untuk menyuntikkan inline styling CSS (tipografi, spasi, heading) dan membersihkan code fences Markdown, kemudian membungkusnya ke dalam template kartu responsif n8n HTML Node. Hal ini menjamin email tampil elegan di semua email client tanpa ketergantungan pada CSS eksternal.
- **1 Real Limitation:** Pengambilan berita bergantung pada ketersediaan dan struktur XML dari RSS Antara News. Jika feed mengalami downtime atau perubahan format snippet, pipeline akan menggunakan teks fallback (`Tidak ada ringkasan`).

---

## 🤖 Catatan Transparansi AI (AI Transparency Diligence)

- **Komponen Dibantu AI (Claude):** Template prompt editorial 3-Pilar (*Core Facts*, *Key Lessons*, *Next Steps*) dan penyusunan struktur instruksi sistem.
- **Komponen Diverifikasi & Dikonfigurasi Manual:** Seluruh arsitektur node n8n, logika agregasi dan formatting JavaScript, penataan template HTML tabel email, integrasi kredensial SMTP Gmail, pengujian inferensi LangChain Groq, serta validasi rendering email cross-client.

---

### 👤 Kontak & Profil
- **GitHub:** [@AhmadBayu1412](https://github.com/AhmadBayu1412)
- **Portofolio:** [https://ahmadbayusamudera.flyrank.ai](https://ahmadbayusamudera.flyrank.ai)