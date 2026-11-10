import type { ComponentPropsWithoutRef } from "react";

type ScrollLinkProps = ComponentPropsWithoutRef<"a"> & { href: `#${string}` };

export default function ScrollLink({ href, onClick, children, ...props }: ScrollLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        const section = document.getElementById(href.slice(1));
        if (!section) return;
        event.preventDefault();
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
        if (href === "#top") {
          window.scrollTo({ top: 0, behavior });
        } else {
          section.scrollIntoView({ behavior, block: "start" });
        }
      }}
    >
      {children}
    </a>
  );
}
