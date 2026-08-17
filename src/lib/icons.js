import { Github, Linkedin, Mail, Twitter, Globe, ExternalLink } from "lucide-react";

/**
 * ICON_MAP — maps a plain string key (as stored in siteConfig.js) to the
 * actual lucide-react icon component. Keeping this mapping in one place
 * means content authors (editing siteConfig.js) never need to import
 * icon components directly — they just write "github", "linkedin", etc.
 */
export const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  website: Globe,
  external: ExternalLink,
};

export function getIcon(name) {
  return ICON_MAP[name] ?? ExternalLink;
}
