import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <>
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">Redefinir senha</h1>
          <p className="text-sm text-secondary-foreground">
            Já tem uma conta?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Entrar
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="voce@exemplo.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Redefinir senha
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
