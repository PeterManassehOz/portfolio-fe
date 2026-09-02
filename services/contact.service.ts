import api from "./api";
import type { ContactFormData } from "@/types/contact";

interface ContactResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    name: string;
    email: string;
    message: string;
    status: "New" | "Read";
    createdAt: string;
    updatedAt: string;
  };
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  const response = await api.post<ContactResponse>("/contact", data);

  return response.data;
}