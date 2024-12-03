export const desktopOS = [
  {
    label: "India",
    value: 19.33,
  },
  {
    label: "Ethiopia",
    value: 7.17,
  },
  {
    label: "Nigeria",
    value: 7.05,
  },
  {
    label: "China",
    value: 6.82,
  },
  {
    label: "DRC",
    value: 5.55,
  },
  {
    label: "Indonesia",
    value: 3.20,
  },
  {
    label: "Tanzania",
    value: 3.16,
  },
  {
    label: "Uganda",
    value: 2.82,
  },
  {
    label: "Pakistan",
    value: 2.56,
  },
  {
    label: "Kenya",
    value: 2.27,
  },
  {
    label: "Rest of the world",
    value: 40.07,
  },
];

export const mobileOS = [
  {
    label: "Android",
    value: 70.48,
  },
  {
    label: "iOS",
    value: 28.8,
  },
  {
    label: "Other",
    value: 0.71,
  },
];

export const platforms = [
  {
    label: "Mobile",
    value: 59.12,
  },
  {
    label: "Desktop",
    value: 40.88,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other (Mobile)" : v.label,
    value: normalize(v.value, platforms[0].value),
  })),
  ...desktopOS.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other (Desktop)" : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

export const valueFormatter = (item) => `${item.value}%`;
