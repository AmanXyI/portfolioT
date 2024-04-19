import { type ClassValue, clsx } from "clsx";
import { Message } from "postcss";
import { twMerge } from "tailwind-merge";
// import { FormData } from "../components/ContactMeForm";
// import { formSchema } from "@/components/ContactMeForm";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type emailTypes = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export function sendEmail(values: emailTypes) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
