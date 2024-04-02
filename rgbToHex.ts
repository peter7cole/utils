/**
 * Converts a rgb() color code string to an hex code string.
 *
 * @param {string} rgb - input string of rgb() code
 * @returns {string} - output string of hexcode including #
 * @throws - throws when there is no regex match
 */
export const rgbToHex = (rgb: string): string => {
  const regex = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
  const match = regex.exec(rgb) || [];

  if (match.length) {
    const [r, g, b] = [
      parseInt(match[1], 10),
      parseInt(match[2], 10),
      parseInt(match[3], 10),
    ];

    // eslint-disable-next-line no-bitwise
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  }

  throw new Error('rgbToHex(): no match');
};
