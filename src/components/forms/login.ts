"use server";

import { signIn } from "@/auth";
import { LoginFormState } from "@/lib/validation";

export async function login(state: LoginFormState, formData: FormData) {
  return await signIn("credentials", formData);
}
