export function getUserInfo() {
  const user = localStorage.getItem("userData");
  if (!user) return;
  return JSON.parse(user);
}

export function getAccessTokenInfo() {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) return;
  return accessToken;
}

export function getTheme() {
  const theme = localStorage.getItem("theme");
  if (!theme) return;
  return theme;
}

export function getRole() {
  const role = localStorage.getItem("role");
  if (!role) return;
  return role;
}

export const dateFormat = (date) => {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = months[d.getMonth()];
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  let filteredDay = da?.startsWith("0") ? da?.replace("0", "") : da;
  return `${filteredDay} ${mo} ${ye} г.`;
};

export const dateFormatNumber = (date) => {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("ru", { month: "2-digit" }).format(d);
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  return `${da}.${mo}.${ye}`;
};

export const dateFormatToday = () => {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let d = new Date();
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = months[d.getMonth()];
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  let filteredDay = da?.startsWith("0") ? da?.replace("0", "") : da;
  return `${filteredDay} ${mo} ${ye} г.`;
};

export const getDay = () => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  return dayName;
};

export const currentTime = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export const clearObject = (currentState, setState) => {
  const clearedState = Object.fromEntries(
    Object.keys(currentState).map((key) => [key, ""])
  );
  setState(clearedState);
};

export const removeObjectFromArray = (data, key, value) => {
  return data.filter((obj) => obj[key] !== value);
};

export const textEllipsis = (text) => {
  return text.length < 35 ? `${text}` : `${text.substring(0, 32)}...`;
};
export const textEllipsisKTP = (text) => {
  return text.length < 36 ? `${text}` : `${text.substring(0, 33)}...`;
};
export const textEllipsisLonger = (text) => {
  return text.length < 860 ? `${text}` : `${text.substring(0, 857)}...`;
};

export const textEllipsisNewsText = (text) => {
  return text.length < 403 ? `${text}` : `${text.substring(0, 400)}...`;
};
export const textEllipsisNewsTextShorter = (text) => {
  return text.length < 128 ? `${text}` : `${text.substring(0, 125)}...`;
};
export const textEllipsisNewsTitle = (text) => {
  return text.length < 56 ? `${text}` : `${text.substring(0, 53)}...`;
};
export const textEllipsisCustom = (text, length) => {
  return text.length < length
    ? `${text}`
    : `${text.substring(0, length - 3)}...`;
};

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

// to pascal case function
export function toPascalCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Get Current Time
export function getCurrentDate() {
  let separator = "";
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}
export const titleParams = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-").replace("#", "");
};

export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const yearList = [
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },

  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2018",
    label: "2018",
  },
];

export const monthList = [
  { value: "january", label: "Januari" },
  { value: "february", label: "Februari" },
  { value: "march", label: "Maret" },
  { value: "april", label: "April" },
  { value: "may", label: "Mei" },
  { value: "june", label: "Juni" },
  { value: "july", label: "Juli" },
  { value: "august", label: "Agustus" },
  { value: "september", label: "September" },
  { value: "october", label: "Oktober" },
  { value: "november", label: "November" },
  { value: "december", label: "Desember" },
];

export const timeType = [
  {
    value: "month",
    label: "Месяц",
  },
  {
    value: "year",
    label: "Год",
  },
];

export const skillOptions = [
  {
    label: "Hard Skill",
    value: true,
  },
  {
    label: "Soft Skill",
    value: false,
  },
];

export const getPercent = (x, y) => {
  return (x / y) * 100;
};

export const removeTags = (text) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const getPercentages = (data) => {
  return data?.map((e) => {
    const percent = e?.percentage;
    const percentPerDot = 20;
    const numDots = Math.ceil(percent / percentPerDot);
    let result = { ...e };
    for (let i = 1; i <= 5; i++) {
      result[`percent${i}`] = i <= numDots ? 100 : 0;
    }
    return result;
  });
};

// Function for forms validation
export const validationFunction = (fields) => {
  let noEmpty = true;
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      noEmpty = false;
    }
  });
  return noEmpty;
};

export const studyYearList = [
  {
    label: "1 курс",
    value: 1,
  },
  {
    label: "2 курс",
    value: 2,
  },
  {
    label: "3 курс",
    value: 3,
  },
  {
    label: "4 курс",
    value: 4,
  },
  {
    label: "5 курс",
    value: 5,
  },
];

export const convertDate = (selected) => {
  const day =
    selected?.getDate() >= 10 ? selected?.getDate() : `0${selected?.getDate()}`;
  const month =
    selected?.getMonth() >= 10
      ? selected?.getMonth() + 1
      : `0${selected?.getMonth() + 1}`;
  const year = selected?.getFullYear();

  return `${year}-${month}-${day}`;
};
