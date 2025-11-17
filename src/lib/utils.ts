import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth-scroll helper that supports offset, focus and temporary highlight
export function scrollToElement(
  id: string,
  opts?: {
    offset?: number;
    focus?: boolean;
    focusSelector?: string;
    highlightClass?: string;
    highlightDuration?: number;
  }
) {
  try {
    const el = document.getElementById(id);
    if (!el) {
      // fallback to hash change
      window.location.hash = id;
      return;
    }

    const scrollTop = window.scrollY || window.pageYOffset;
    const rect = el.getBoundingClientRect();

    // compute offset: prefer provided offset, else use nav height + padding when possible
    let offset = opts?.offset ?? 96;
    const nav = document.querySelector("nav");
    if (nav && nav instanceof HTMLElement) {
      const navRect = nav.getBoundingClientRect();
      // add a small margin
      offset = Math.max(offset, Math.ceil(navRect.height) + 12);
    }

    const target = Math.max(0, rect.top + scrollTop - offset);
    window.scrollTo({ top: target, behavior: "smooth" });

    // after scrolling, optionally focus a field inside the element
    if (opts?.focus) {
      setTimeout(() => {
        const focusEl = opts?.focusSelector
          ? el.querySelector(opts.focusSelector)
          : (el.querySelector(
              "input, textarea, button, select"
            ) as HTMLElement | null);
        if (focusEl && typeof (focusEl as HTMLElement).focus === "function") {
          (focusEl as HTMLElement).focus();
        }
      }, 400);
    }

    // apply temporary highlight class if requested
    if (opts?.highlightClass) {
      el.classList.add(opts.highlightClass);
      const dur = opts.highlightDuration ?? 1600;
      setTimeout(() => el.classList.remove(opts.highlightClass), dur);
    }
  } catch (err) {
    // ignore errors and fallback to hash
    window.location.hash = id;
  }
}
