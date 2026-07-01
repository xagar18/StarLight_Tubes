import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../lib/supabase";

type LoadState = "loading" | "found" | "not-found" | "error";

interface InvoiceRecord {
  invoice_number: string;
  company_name: string;
  invoice_file_name: string;
  created_at: string;
}

export default function VerifyInvoice() {
  const { verificationId } = useParams<{ verificationId: string }>();

  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [pdfUrl, setPdfUrl] = useState("");
  const [invoice, setInvoice] = useState<InvoiceRecord | null>(null);

  useEffect(() => {
    if (!verificationId) {
      setLoadState("not-found");
      return;
    }

    const loadInvoice = async () => {
      try {
        const { data, error } = await supabase
          .from("invoices")
          .select("*")
          .eq("verification_id", verificationId)
          .single();

        if (error || !data) {
          setLoadState("not-found");
          return;
        }

        const filePath = data.file_path.replace(/^invoices\//, "");

        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from("invoices")
            .createSignedUrl(filePath, 60 * 60);

        if (signedUrlError || !signedUrlData?.signedUrl) {
          setLoadState("error");
          return;
        }

        setInvoice({
          invoice_number: data.invoice_number,
          company_name: data.company_name,
          invoice_file_name: data.invoice_file_name,
          created_at: data.created_at,
        });
        setPdfUrl(signedUrlData.signedUrl);
        setLoadState("found");
      } catch {
        setLoadState("error");
      }
    };

    loadInvoice();
  }, [verificationId]);

  if (loadState === "loading") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-3">
        <div className="w-5 h-5 border-2 border-slate-700 border-t-slate-300 rounded-full animate-spin" />
        <p className="text-slate-500 text-xs">Verifying invoice…</p>
      </div>
    );
  }

  if (loadState === "not-found") {
    return (
      <StatusScreen
        title="Invoice not found"
        description="This QR code doesn't match any invoice on record. It may have been removed or the link is incorrect."
      />
    );
  }

  if (loadState === "error") {
    return (
      <StatusScreen
        title="Unable to load invoice"
        description="The invoice could not be retrieved at this time. Please try again or contact Starlight Tubes directly."
      />
    );
  }

  const formattedDate = invoice?.created_at
    ? new Date(invoice.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-slate-800 px-6 py-4 flex-shrink-0">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">

          <div className="flex items-center gap-4 min-w-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/40 border border-emerald-800/50 rounded-full flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-emerald-400 text-xs font-medium">Verified</span>
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {invoice?.company_name ?? "—"}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {invoice?.invoice_number} · {formattedDate}
              </p>
            </div>
          </div>

          <a
            href={pdfUrl}
            download={invoice?.invoice_file_name}
            className="flex-shrink-0 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
        </div>
      </header>

      <iframe
        src={pdfUrl}
        title={invoice?.invoice_file_name ?? "Invoice"}
        className="flex-1 w-full"
        style={{ minHeight: "calc(100vh - 65px)" }}
      />
    </div>
  );
}

function StatusScreen({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xs">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Starlight Tubes</p>
        <h1 className="text-base font-semibold text-white mb-2">{title}</h1>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        <div className="mt-10 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-700">starlighttubes.com</p>
        </div>
      </div>
    </div>
  );
}