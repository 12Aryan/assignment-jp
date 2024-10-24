import { useSelector } from "react-redux";

const ProgressIcon = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);
  return (
    <svg
      width="154"
      height="2"
      viewBox="0 0 154 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H153C153.552 0 154 0.447715 154 1C154 1.55228 153.552 2 153 2H1C0.447716 2 0 1.55228 0 1Z"
        fill="#A8C5DA"
      />
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H153C153.552 0 154 0.447715 154 1C154 1.55228 153.552 2 153 2H1C0.447716 2 0 1.55228 0 1Z"
        fill={mode === "dark" ? "#1C1C1C" : "#FFFFFF"}
        fillOpacity="0.4"
      />
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H153C153.552 0 154 0.447715 154 1C154 1.55228 153.552 2 153 2H1C0.447716 2 0 1.55228 0 1Z"
        fill={mode === "dark" ? "#1C1C1C" : "#FFFFFF"}
        fillOpacity="0.4"
      />
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H153C153.552 0 154 0.447715 154 1C154 1.55228 153.552 2 153 2H1C0.447716 2 0 1.55228 0 1Z"
        fill={mode === "dark" ? "#1C1C1C" : "#FFFFFF"}
        fillOpacity="0.2"
      />
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H113C113.552 0 114 0.447715 114 1C114 1.55228 113.552 2 113 2H1C0.447718 2 0 1.55228 0 1Z"
        fill="#A8C5DA"
      />
    </svg>
  );
};

export default ProgressIcon;
