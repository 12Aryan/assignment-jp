const SearchIcon = ({ fill = "#1C1C1C" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.35 14.3562C14.2566 14.4481 14.131 14.4998 14 14.5C13.8672 14.4994 13.7397 14.448 13.6437 14.3562L10.9437 11.65C9.80659 12.6051 8.34462 13.0844 6.86273 12.9878C5.38083 12.8912 3.99343 12.2263 2.98988 11.1316C1.98633 10.037 1.44412 8.59717 1.47633 7.11248C1.50855 5.62779 2.11269 4.21286 3.16277 3.16277C4.21286 2.11269 5.62779 1.50855 7.11248 1.47633C8.59717 1.44412 10.037 1.98633 11.1316 2.98988C12.2263 3.99343 12.8912 5.38083 12.9878 6.86273C13.0844 8.34462 12.6051 9.80659 11.65 10.9437L14.35 13.6437C14.3972 13.6903 14.4347 13.7457 14.4603 13.8069C14.486 13.868 14.4991 13.9337 14.4991 14C14.4991 14.0663 14.486 14.1319 14.4603 14.1931C14.4347 14.2542 14.3972 14.3097 14.35 14.3562ZM7.24997 12C8.18944 12 9.1078 11.7214 9.88893 11.1995C10.6701 10.6775 11.2789 9.93567 11.6384 9.06772C11.9979 8.19977 12.092 7.24471 11.9087 6.3233C11.7254 5.40189 11.273 4.55552 10.6087 3.89122C9.94443 3.22692 9.09806 2.77452 8.17665 2.59124C7.25524 2.40797 6.30018 2.50203 5.43223 2.86155C4.56428 3.22106 3.82243 3.82988 3.30049 4.61102C2.77856 5.39215 2.49997 6.31051 2.49997 7.24998C2.50163 8.50925 3.0026 9.71647 3.89304 10.6069C4.78348 11.4973 5.9907 11.9983 7.24997 12Z"
        fill={fill}
        fillOpacity="0.2"
      />
    </svg>
  );
};

export default SearchIcon;