"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MailIcon, CopyIcon, CheckIcon, SendIcon } from "lucide-react";

interface ContactModalProps {
  email: string;
  children: React.ReactNode;
}

export function ContactModal({ email, children }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openMailClient = () => {
    window.location.href = `mailto:${email}?subject=Let's connect&body=Hi Gustavo,%0D%0A%0D%0AI found your CV and would like to get in touch.%0D%0A%0D%0A`;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md border-2 border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Let's Connect
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose how you'd like to reach out
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {/* Email display */}
          <div className="flex items-center gap-3 rounded-xl border-2 border-border bg-secondary/50 p-4">
            <MailIcon className="h-5 w-5 text-accent" />
            <span className="flex-1 font-mono text-sm">{email}</span>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-lg border-2 border-border bg-card px-3 py-1.5 text-xs font-medium transition-all hover:border-accent hover:text-accent"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-3.5 w-3.5 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={openMailClient}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-accent bg-accent px-4 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              <SendIcon className="h-4 w-4" />
              Open Email Client
            </button>
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-4 py-3 font-semibold transition-all hover:border-accent hover:text-accent"
            >
              <CopyIcon className="h-4 w-4" />
              Copy Email
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            I typically respond within 24-48 hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
