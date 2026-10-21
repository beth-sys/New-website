export default function ArticleBody({ body }: { body: string[] }) {
  return (
    <div className="max-w-2xl space-y-6">
      {body.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-display text-2xl text-ink pt-4">
              {block.replace("## ", "")}
            </h2>
          );
        }
        return (
          <p key={i} className="text-charcoal/85 leading-relaxed">
            {block}
          </p>
        );
      })}
    </div>
  );
}
