import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const proseClassName = [
  "font-serif text-base leading-[1.55] text-[#5a544a]",
  "[&_p]:mb-4",
  "[&_strong]:font-semibold [&_strong]:text-[#1a1a1a]",
  "[&_em]:italic",
  "[&_a]:font-medium [&_a]:text-[#a8332a] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#8e2b24]",
  "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6",
  "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-6",
  "[&_li]:pl-1",
  "[&_code]:rounded [&_code]:bg-[rgba(0,0,0,0.05)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-[#1a1a1a]",
  "[&_pre]:whitespace-pre-wrap [&_pre]:break-words",
  "[&_blockquote]:my-5 [&_blockquote]:border-l-2 [&_blockquote]:border-[#a8332a]/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#5a544a]",
  "[&_hr]:my-8 [&_hr]:border-[rgba(0,0,0,0.08)]",
  "[&_table]:my-5 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
  "[&_thead]:border-b-2 [&_thead]:border-[#dcd2c3]",
  "[&_th]:py-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#1a1a1a]",
  "[&_td]:py-2.5 [&_td]:pr-4 [&_td]:border-b [&_td]:border-[rgba(0,0,0,0.06)] [&_td]:align-top",
].join(" ");

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className={proseClassName}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        a: ({ href, children }) => {
          if (!href) {
            return <span>{children}</span>;
          }

          if (href.startsWith("http")) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          }

          if (href.startsWith("mailto:")) {
            return <a href={href}>{children}</a>;
          }

          return <Link href={href}>{children}</Link>;
        },
        h2: ({ children }) => (
          <>
            <span
              aria-hidden
              className="mt-10 mb-3 block h-0.5 w-8 rounded-full bg-[#a8332a]"
            />
            <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:text-3xl">
              {children}
            </h2>
          </>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 mb-2 font-serif text-lg font-semibold text-[#1a1a1a] sm:text-xl">
            {children}
          </h3>
        ),
        img: ({ src, alt }) => {
          if (typeof src !== "string") {
            return null;
          }

          const isCard = src.includes("/images/cards/");
          const isLogo = src.includes("/images/platform/");
          const isHero = src.includes("/images/heroes/");
          const isDiagram = src.includes("/images/diagrams/");

          const className = isHero
            ? "mb-10 h-auto w-full max-w-full rounded-lg"
            : isDiagram
              ? "my-8 h-auto w-full max-w-full rounded-2xl"
              : isCard
                ? "mt-6 mb-8 h-auto w-full max-w-[320px] rounded-lg"
                : isLogo
                  ? "mt-4 mb-6 h-auto w-full max-w-[200px]"
                  : "my-8 h-auto max-w-full rounded-lg";

          // eslint-disable-next-line @next/next/no-img-element
          return <img src={src} alt={alt ?? ""} className={className} />;
        },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
