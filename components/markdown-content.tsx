import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const proseClassName = [
  "text-base leading-relaxed text-[#5a544a]",
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-[#1a1a1a]",
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-[#1a1a1a]",
  "[&_p]:mb-5",
  "[&_strong]:font-semibold [&_strong]:text-[#1a1a1a]",
  "[&_em]:italic",
  "[&_a]:font-medium [&_a]:text-[#a8332a] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#8e2b24]",
  "[&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
  "[&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
  "[&_li]:pl-1",
  "[&_code]:rounded [&_code]:bg-[rgba(0,0,0,0.05)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-[#1a1a1a]",
  "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#a8332a]/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#5a544a]",
  "[&_hr]:my-10 [&_hr]:border-[rgba(0,0,0,0.08)]",
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

          const external = href.startsWith("http");

          if (external) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          }

          return <Link href={href}>{children}</Link>;
        },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
