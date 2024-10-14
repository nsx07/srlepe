import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect, useParams } from "next/navigation";

export default async function inPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return redirect("/in/feed");
}
