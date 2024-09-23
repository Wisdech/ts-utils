export function stringBoolean(value?: string | null): boolean {
  return value === 'true';
}

export function stringEllipsis(value?: string | null, length: number = 20): string {
  if (value && value.length >= length) {
    return value.substring(0, length - 4) + '...';
  }
  return value ?? '';
}
