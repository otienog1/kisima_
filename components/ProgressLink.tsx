"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { ComponentProps, MouseEvent } from "react";

type ProgressLinkProps = ComponentProps<typeof Link>;

export default function ProgressLink({ href, onClick, ...props }: ProgressLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if it exists
    if (onClick) {
      onClick(e);
    }

    // Don't start progress if default was prevented
    if (e.defaultPrevented) {
      return;
    }

    // Don't start progress for external links
    const targetUrl = href.toString();
    if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://') || targetUrl.startsWith('mailto:')) {
      return;
    }

    // Don't start progress if opening in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || (e.button && e.button !== 0)) {
      return;
    }

    // Start the progress bar
    e.preventDefault();
    NProgress.start();
    router.push(targetUrl);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
