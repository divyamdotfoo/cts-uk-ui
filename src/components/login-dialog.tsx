import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export function LoginDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>something</DialogContent>
    </Dialog>
  );
}
