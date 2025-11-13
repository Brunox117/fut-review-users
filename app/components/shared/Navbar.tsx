export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#333333]/30 px-4 py-2 mb-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1A1A1A] text-xl font-bold tracking-[-0.015em] font-display">
              MATCHDAY REVIEW
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-9">
            <a
              className="text-[#1A1A1A] text-sm font-medium leading-normal underline-offset-4 hover:underline"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#333333] text-sm font-medium leading-normal underline-offset-4 hover:underline"
              href="#"
            >
              Leagues
            </a>
            <a
              className="text-[#333333] text-sm font-medium leading-normal underline-offset-4 hover:underline"
              href="#"
            >
              Players
            </a>
            <a
              className="text-[#333333] text-sm font-medium leading-normal underline-offset-4 hover:underline"
              href="#"
            >
              My Profile
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#333333]/30"
            data-alt="User profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_OQFudjCCvlT1BqwNRVmCRtac1vyvk2US2fhdZngTHor-ej8K9GjPDPR_LUDsMkAMvfdIH-h_iG6ZZTLFp9L5z6PxMZ2LF0kpH_NpG6ASj6UGpySs1gjCU5TYLGkYvdTQ0I0_5hCLvTamMcyXAhQcV9sLlphtLE4UXfQ-vGjGRerOxtd9R5om3i-aWQ9TwMDA5jQ8CtLmgBsJSkoc3sTgUS3QieU-i5mwAfQn0zcNxsTurW8GThBzw5dT4KD8pyiY4sYEbvrm1w")',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
