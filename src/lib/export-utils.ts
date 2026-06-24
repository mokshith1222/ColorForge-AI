export type ExportFormat = 'css' | 'tailwind' | 'json' | 'scss';

export const exportPalette = (paletteName: string, colors: string[], format: ExportFormat): string => {
  switch (format) {
    case 'css':
      return `:root {\n${colors.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`;
    case 'scss':
      return colors.map((c, i) => `$color-${i + 1}: ${c};`).join('\n');
    case 'tailwind':
      return `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        '${paletteName}': {\n${colors.map((c, i) => `          '${(i + 1) * 100}': '${c}',`).join('\n')}\n        }\n      }\n    }\n  }\n}`;
    case 'json':
      return JSON.stringify(
        {
          [paletteName]: colors.reduce((acc, c, i) => {
            acc[(i + 1) * 100] = c;
            return acc;
          }, {} as Record<string, string>),
        },
        null,
        2
      );
    default:
      return colors.join(', ');
  }
};

export const downloadTextFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy!', err);
    return false;
  }
};
