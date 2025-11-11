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
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1A1A1A] text-xl font-bold tracking-[-0.015em] font-display">
              FUT REVIEW
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
