"use client";

import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Props {
  pdfUrl: string;
  triggerButtonText: string;
  modalTitle: string;
  modalDescription?: string;
}

export function PdfViewerModal({
  pdfUrl,
  triggerButtonText,
  modalTitle,
  modalDescription = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const finalPdfUrl = pdfUrl + "#toolbar=0&navpanes=0";
  console.log(finalPdfUrl);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs font-semibold" variant="outline">
          {triggerButtonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
          <DialogDescription>{modalDescription}</DialogDescription>
        </DialogHeader>
        <iframe className="block h-[50vh] w-full" src={finalPdfUrl} />
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
