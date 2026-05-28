export function CairnNavIcon({
  className,
  width = 32,
  height = 36,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo/cairn-256.png"
      alt=""
      width={width}
      height={height}
      className={className}
      aria-hidden
    />
  );
}

export function CairnNavIconPlaceholder({
  className,
  width = 32,
  height = 36,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="16" cy="28" rx="13" ry="4" fill="#9b8e7a" />
      <ellipse cx="16" cy="20" rx="10" ry="3.5" fill="#b5a892" />
      <ellipse cx="16" cy="13" rx="7.5" ry="3" fill="#c9bea8" />
      <ellipse cx="16" cy="7.5" rx="5" ry="2.3" fill="#d9d0bd" />
      <path
        d="M16 2 L16.8 3.5 L18.5 3.2 L17.6 4.6 L18.6 6 L17 5.6 L16 7 L15 5.6 L13.4 6 L14.4 4.6 L13.5 3.2 L15.2 3.5 Z"
        fill="#a8332a"
      />
    </svg>
  );
}

export function MapleTrustIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2 L13.5 6 L17.5 5 L15.5 8.5 L18.5 11 L14 12 L15 16 L12 14 L9 16 L10 12 L5.5 11 L8.5 8.5 L6.5 5 L10.5 6 Z"
        fill="#a8332a"
      />
    </svg>
  );
}
