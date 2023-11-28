"use client";
import Feedback from "@/components/Pages/FeedbackPage/Feedback";
import { useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";

const PDFViewer = dynamic(() => import("@/components/PDFViewer/PDFViewer"), {
  ssr: false,
});

export default function Home({
  params: { name },
}: {
  params: { name: string };
}) {
  const searchParams = useSearchParams();
  const pdf = searchParams.get("pdf");
  return (
    <main>
      <PDFViewer file={`/pdfs/${pdf}.pdf`} />
    </main>
  );
}
