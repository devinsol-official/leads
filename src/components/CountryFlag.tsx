export interface CountryInfo {
  code: string;
  name: string;
  flag?: string;
  flagUrl?: string;
}

interface CountryFlagProps {
  country?: CountryInfo;
  showCode?: boolean;
  className?: string;
  flagClassName?: string;
}

export function CountryFlag({
  country,
  showCode = true,
  className = "inline-flex items-center gap-1.5 rounded-md bg-zinc-950/80 px-2 py-1 text-[10px] font-semibold text-zinc-200 backdrop-blur-md border border-white/10 shadow-sm",
  flagClassName = "h-3 w-4.5 rounded-xs object-cover shadow-xs border border-white/10 shrink-0",
}: CountryFlagProps) {
  if (!country) return null;

  const flagSrc =
    country.flagUrl ||
    `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`;

  return (
    <span
      title={`Lead from ${country.name}`}
      className={className}
    >
      <img
        src={flagSrc}
        alt={country.name}
        className={flagClassName}
        width={18}
        height={13}
        loading="lazy"
      />
      {showCode && (
        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-300">
          {country.code}
        </span>
      )}
    </span>
  );
}
