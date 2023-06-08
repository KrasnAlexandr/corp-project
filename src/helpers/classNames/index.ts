type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods, additional: Array<string>): string {

  return [mainClass, ...additional, Object.entries(mods)
    .filter(([className, value]) => Boolean(value)).map(([className, value]) => className)].join(' ');
}
