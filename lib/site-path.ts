const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function sitePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export function currentSitePath(path: string) {
  if (basePath && path.startsWith(basePath)) {
    return path.slice(basePath.length) || "/";
  }
  return path;
}
