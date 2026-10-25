import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Outline is the default; `default` is the filled coral pill. */
  variant?: "outline" | "default";
  /** default 36px · sm 32px · lg 44px (40px from md) · icon 36×36 */
  size?: "default" | "sm" | "lg" | "icon";
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Shown when `src` is missing or fails, e.g. initials. */
  fallback?: React.ReactNode;
  /** Diameter in px; 40 (avatar-sm) by default, 128 (avatar-lg) for the hero. */
  size?: number;
  className?: string;
}
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface LogoProps {
  /** px, default 40 */
  size?: number;
  className?: string;
  /** Hide from assistive tech when a parent link already names it. */
  decorative?: boolean;
  /** Accessible name, default "vitaly". */
  title?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}
export declare function NavLink(props: NavLinkProps): React.ReactElement;

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
export interface SocialMediaProps {
  /** Defaults to GitHub, Twitter, LinkedIn. */
  links?: SocialLink[];
  /** Mail icon target; defaults to the site's address. Pass false to hide it. */
  email?: string | false;
  className?: string;
}
export declare function SocialMedia(props: SocialMediaProps): React.ReactElement;

export interface NavItem {
  /** Section id to match against `active`; falls back to `label`. */
  id?: string;
  label: string;
  href: string;
}
export interface HeaderProps {
  /** Defaults to about · works · feedback. */
  items?: NavItem[];
  /** id (or label) of the section in view; defaults to the first item. */
  active?: string;
  /** Click handler for the logo and nav links (the site smooth-scrolls). */
  onNavigate?: React.MouseEventHandler<HTMLAnchorElement>;
  homeHref?: string;
  socialLinks?: SocialLink[];
  email?: string | false;
  /** Fixed and blurred from md; default true. */
  fixed?: boolean;
  className?: string;
}
export declare function Header(props: HeaderProps): React.ReactElement;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  /** Honeypot: must be empty. */
  csrf: string;
}
export type ContactFormResult = { sent: true } | { sent: false; error: string };
export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<ContactFormResult>;
  className?: string;
}
export declare function ContactForm(props: ContactFormProps): React.ReactElement;

export interface ClientFeedbackProps {
  avatar: string;
  name: string;
  /** "Company, Role" */
  company: string;
  /** Plain text; blank lines separate paragraphs. */
  feedback: string;
  className?: string;
}
export declare function ClientFeedback(props: ClientFeedbackProps): React.ReactElement;

export interface ShowcaseItemProps {
  href: string;
  /** The client's ground, e.g. "var(--showcase-amie)". */
  background: string;
  /** Text colour on that ground. */
  color: string;
  /** Square product image, ≥512px. */
  bgImage: string;
  /** Client logo <img> plus a short <p>. */
  children: React.ReactNode;
  className?: string;
}
export declare function ShowcaseItem(props: ShowcaseItemProps): React.ReactElement;

export interface WorkListItemProps {
  href: string;
  cover: string;
  title: string;
  className?: string;
}
export declare function WorkListItem(props: WorkListItemProps): React.ReactElement;

export interface AnimatedListProps {
  title: string;
  items: string[];
  /** Top rule: 4 → primary-500, 2 → primary-600, 1 → primary-700. */
  rule?: 4 | 2 | 1;
  /** Extra delay in seconds before the stagger starts. */
  baseDelay?: number;
  className?: string;
}
export declare function AnimatedList(props: AnimatedListProps): React.ReactElement;

type IconProps = { className?: string };
export declare function IconGitHub(props: IconProps): React.ReactElement;
export declare function IconTwitter(props: IconProps): React.ReactElement;
export declare function IconLinkedIn(props: IconProps): React.ReactElement;
export declare function IconMail(props: IconProps): React.ReactElement;
export declare function IconStar(props: IconProps): React.ReactElement;
export declare function IconCornerArrow(props: IconProps): React.ReactElement;
