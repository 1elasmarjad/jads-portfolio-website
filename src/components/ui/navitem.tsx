export default function NavItem({
  activated,
  text,
  fn,
}: {
  activated: boolean;
  text: string;
  fn: () => void;
}) {
  const width = activated ? "w-[4.6rem]" : "w-10 group-hover:w-[4.6rem]";
  const textColor = activated
    ? "text-foreground"
    : "text-foreground/20 group-hover:text-foreground";
  const bgColor = activated
    ? "bg-foreground"
    : "bg-foreground/20 group-hover:bg-foreground";

  return (
    <button
      className="w- group flex items-center gap-4 hover:cursor-pointer"
      onClick={fn}
    >
      <span
        className={`h-[0.05rem] w-10 ${bgColor} ${width} transition-all`}
      ></span>
      <p
        className={`${textColor} text-sm font-extrabold uppercase transition-all`}
      >
        {text}
      </p>
    </button>
  );
}
