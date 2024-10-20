import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4 mx-auto">
        <h1 className="text-2xl font-medium">Cadastrar</h1>
        <p className="text-sm text text-foreground">
          Já tem uma conta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Entrar
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="voce@exemplo.com" required />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Sua senha"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Cadastrando...">
            Cadastrar
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
