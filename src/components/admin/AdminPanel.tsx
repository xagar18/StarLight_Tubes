import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { supabase } from "../../lib/supabase";
import type { Session } from "@supabase/supabase-js";

const ALLOWED_EMAILS = [
  "starlight.cloudinary@gmail.com",
  "krishikajain28@gmail.com",
];

type UploadState = "idle" | "uploading" | "done" | "error";
type Tab = "upload" | "records";

interface InvoiceResult {
  invoiceNumber: string;
  verificationId: string;
  verificationUrl: string;
}

interface InvoiceRow {
  id: string;
  invoice_number: string;
  company_name: string;
  verification_id: string;
  created_at: string;
}

// ─────────────────────────────────────────────────────────────
// Root — session gate
// ─────────────────────────────────────────────────────────────
export default function AdminPanel() {
  const [session, setSession] = useState<Session | null>(null);
  const [sessionLoading, setSessionLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const s = data.session;
      if (s && ALLOWED_EMAILS.includes(s.user.email ?? "")) {
        setSession(s);
      }
      setSessionLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      if (s && ALLOWED_EMAILS.includes(s.user.email ?? "")) {
        setSession(s);
      } else {
        setSession(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-slate-700 border-t-slate-300 rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return <LoginScreen onLogin={setSession} />;
  return <UploadScreen session={session} onSignOut={() => setSession(null)} />;
}

// ─────────────────────────────────────────────────────────────
// Login
// ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (session: Session) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        setError("Invalid email or password.");
        return;
      }

      if (!ALLOWED_EMAILS.includes(data.session.user.email ?? "")) {
        await supabase.auth.signOut();
        setError("You are not authorised to access this panel.");
        return;
      }

      onLogin(data.session);
      setEmail("");
      setPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Starlight Tubes</p>
          <h1 className="text-2xl font-semibold text-white">Admin Portal</h1>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="you@starlighttubes.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="••••••••"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors"
            />
          </div>
        </div>

        {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-5 w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              Signing in…
            </span>
          ) : (
            "Sign in"
          )}
        </button>

        <p className="mt-8 text-xs text-slate-600 text-center">
          Access restricted to authorised personnel only.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Upload + Records screen
// ─────────────────────────────────────────────────────────────
function UploadScreen({ session, onSignOut }: { session: Session; onSignOut: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("upload");

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Starlight Tubes</p>
            <h1 className="text-base font-semibold mt-0.5">Invoice Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 hidden sm:block">{session.user.email}</span>
            <button
              onClick={handleSignOut}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-slate-800 px-8">
        <div className="max-w-4xl mx-auto flex gap-6">
          {(["upload", "records"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-xs font-medium border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? "border-white text-white"
                  : "border-transparent text-slate-500 hover:text-slate-300"
              }`}
            >
              {tab === "upload" ? "Upload Invoice" : "Records"}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-8 py-10">
        {activeTab === "upload" ? (
          <UploadTab onUploadSuccess={() => setActiveTab("records")} />
        ) : (
          <RecordsTab />
        )}
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Upload tab
// ─────────────────────────────────────────────────────────────
function UploadTab({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<InvoiceResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setFile(null);
    setInvoiceNumber("");
    setCompanyName("");
    setResult(null);
    setUploadState("idle");
    setErrorMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (!file || !invoiceNumber.trim() || !companyName.trim()) {
      setErrorMessage("Please fill in all fields and select a PDF.");
      setUploadState("error");
      return;
    }

    setUploadState("uploading");
    setErrorMessage("");

    try {
      const sanitizedName = file.name.replace(/\s+/g, "_");
      const fileName = `${Date.now()}-${sanitizedName}`;

      const { data: storageData, error: storageError } = await supabase.storage
        .from("invoices")
        .upload(fileName, file);

      if (storageError) throw storageError;

      const verificationId = `ST-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

      const { error: dbError } = await supabase.from("invoices").insert([
        {
          invoice_number: invoiceNumber.trim(),
          company_name: companyName.trim(),
          verification_id: verificationId,
          invoice_file_name: file.name,
          file_path: storageData.fullPath ?? storageData.path,
        },
      ]);

      if (dbError) throw dbError;

      const verificationUrl = `${window.location.origin}/verify/${verificationId}`;
      setResult({ invoiceNumber: invoiceNumber.trim(), verificationId, verificationUrl });
      setUploadState("done");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Upload failed. Please try again.");
      setUploadState("error");
    }
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
  const isUploading = uploadState === "uploading";

  if (uploadState === "done" && result) {
    return (
      <div className="max-w-2xl space-y-4">
        <div className="flex items-start gap-3 px-4 py-3.5 bg-emerald-950/30 border border-emerald-800/40 rounded-lg">
          <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-emerald-300 font-medium">Invoice uploaded successfully</p>
            <p className="text-xs text-emerald-600 mt-0.5">The QR code below links directly to the original PDF.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-800">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Invoice details</p>
          </div>
          <div className="divide-y divide-slate-800">
            <Row label="Invoice number" value={result.invoiceNumber} onCopy={() => copyToClipboard(result.invoiceNumber)} />
            <Row label="Verification ID" value={result.verificationId} onCopy={() => copyToClipboard(result.verificationId)} />
            <Row label="Verification URL" value={result.verificationUrl} onCopy={() => copyToClipboard(result.verificationUrl)} link />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">QR Code</p>
            <p className="text-xs text-slate-600">Screenshot or print to attach to invoice</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg">
              <QRCode value={result.verificationUrl} size={180} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={reset}
            className="text-xs px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            Upload another
          </button>
          <button
            onClick={onUploadSuccess}
            className="text-xs px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            View all records
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-sm font-medium text-white">Upload invoice</h2>
        <p className="text-xs text-slate-500 mt-1">
          Fill in the details below and select the original PDF. A QR code will be generated on upload.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Invoice number</label>
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="e.g. INV-2026-001"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5">Company name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g. Tata Steel Ltd."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1.5">Invoice PDF</label>
        <label className="block cursor-pointer">
          <div className={`border border-dashed rounded-lg px-5 py-8 text-center transition-colors ${
            file ? "border-slate-600 bg-slate-900" : "border-slate-700 hover:border-slate-600 bg-slate-900/50"
          }`}>
            {file ? (
              <div>
                <p className="text-sm text-white font-medium">{file.name}</p>
                <p className="text-xs text-slate-500 mt-1">{(file.size / 1024).toFixed(0)} KB · PDF</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-slate-400">Click to select a PDF</p>
                <p className="text-xs text-slate-600 mt-1">PDF files only</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              const selected = e.target.files?.[0];
              if (selected) {
                setFile(selected);
                setUploadState("idle");
                setErrorMessage("");
              }
            }}
          />
        </label>
      </div>

      {uploadState === "error" && (
        <div className="px-4 py-3 bg-red-950/40 border border-red-800/60 rounded-lg text-red-400 text-xs">
          {errorMessage}
        </div>
      )}

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isUploading ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              Uploading…
            </span>
          ) : (
            "Upload invoice"
          )}
        </button>
        {(file || invoiceNumber || companyName) && !isUploading && (
          <button onClick={reset} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Records tab
// ─────────────────────────────────────────────────────────────
function RecordsTab() {
  const [records, setRecords] = useState<InvoiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase
        .from("invoices")
        .select("id, invoice_number, company_name, verification_id, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        setError("Failed to load records.");
      } else {
        setRecords(data ?? []);
      }
      setLoading(false);
    };

    fetchRecords();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-5 h-5 border-2 border-slate-700 border-t-slate-300 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-3 bg-red-950/40 border border-red-800/60 rounded-lg text-red-400 text-xs max-w-md">
        {error}
      </div>
    );
  }

  if (records.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500 text-sm">No invoices uploaded yet.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-sm font-medium text-white">Invoice records</h2>
          <p className="text-xs text-slate-500 mt-0.5">{records.length} invoice{records.length !== 1 ? "s" : ""} total</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        {/* Table head */}
        <div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] gap-4 px-4 py-2.5 border-b border-slate-800">
          {["Invoice No.", "Company", "Date", "Verify"].map((col) => (
            <p key={col} className="text-xs font-medium text-slate-500 uppercase tracking-wider">{col}</p>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-800">
          {records.map((row) => (
            <div key={row.id} className="grid grid-cols-[2fr_2fr_1.5fr_1fr] gap-4 px-4 py-3 items-center hover:bg-slate-800/40 transition-colors">
              <p className="text-sm text-white font-mono truncate">{row.invoice_number}</p>
              <p className="text-sm text-slate-300 truncate">{row.company_name ?? "—"}</p>
              <p className="text-xs text-slate-500">
                {new Date(row.created_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <a
                href={`/verify/${row.verification_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Open ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Row (copy row for details card)
// ─────────────────────────────────────────────────────────────
function Row({ label, value, onCopy, link }: {
  label: string;
  value: string;
  onCopy: () => void;
  link?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-slate-500 mb-0.5">{label}</p>
        {link ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 break-all transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-white font-mono">{value}</p>
        )}
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 text-xs px-2.5 py-1 rounded border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}