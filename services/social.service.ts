import { socialLinks, type SocialLink } from "@/data/social-links";

export async function getSocialLinks(): Promise<SocialLink[]> {
  return socialLinks;
}