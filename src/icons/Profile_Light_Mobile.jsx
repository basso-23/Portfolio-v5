const Profile_Light = () => {
  return (
    <svg
      className="gradient-fill_mobile"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="50px"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gradientFill_mobile"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="11.5%"
            style={{ stopColor: "rgba(119, 44, 232, 0.68)", stopOpacity: 1 }}
          />
          <stop
            offset="91.2%"
            style={{ stopColor: "rgb(119, 44, 232)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
    </svg>
  );
};

export default Profile_Light;
