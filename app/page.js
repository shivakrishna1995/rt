"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    localStorage.setItem("user_id", Date.now());
    router.push("/task/1");
  };

  return (
    <div className="w-screen h-screen bg-gray-100 md:p-10 flex justify-center">
      <div className="w-full md:w-[384px] md:rounded-x flex flex-col overflow-y-scroll gap-7 h-full pb-[50px] bg-[#F9FAFB]">
        <header className="shrink-0 h-[80px] flex justify-center items-center border-b-[1px] border-[#E5E7EB] bg-white">
          <h6 className="font-semibold text-xl">Experiment</h6>
        </header>
        <div className="flex flex-col items-center gap-3 mx-5">
          <h6 className="font-bold text-2xl text-center text-[#111827]">
            Reading and Tapping Task
          </h6>
          <span>
            Instructions
          </span>
        </div>

        <div className="flex flex-col gap-3 bg-[#EFF6FF] mx-5 rounded-2xl p-5">
          <h6 className="text-[18px] text-[#111827] font-semibold">Welcome to the experiment!</h6>
          <p className="text-[#374151]">
            You will perform two tasks: reading and tapping. Please follow the instructions below according to your condition.
          </p>
        </div>

        <div className="mx-5 flex flex-col gap-3">
          <span className="font-semibold text-[#Seated Condition]">
            Conditions:
          </span>
          <div className="border-[2px] border-[#E5E7EB] border-solid rounded-2xl p-5 flex gap-4 bg-white">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0Z" fill="#DCFCE7" />
              <path d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0Z" stroke="#E5E7EB" />
              <path d="M22.125 26H9.875V6H22.125V26Z" stroke="#E5E7EB" />
              <g clipPath="url(#clip0_1153_87)">
                <path d="M16.6563 10.0625V15.75H17.9688V10.3551C18.6223 10.7324 19.0626 11.4406 19.0626 12.25V15.75H20.3751V12.25C20.3751 10.3168 18.8083 8.75 16.8751 8.75H15.1251C13.1919 8.75 11.6251 10.3168 11.6251 12.25V15.75H12.9376V12.25C12.9376 11.4406 13.3778 10.7324 14.0313 10.3551V15.75H15.3438V10.0625H16.6563ZM11.1876 16.625C10.8567 16.625 10.5532 16.8109 10.4055 17.109L9.96804 17.984C9.83132 18.2547 9.84773 18.5773 10.0063 18.8344C10.1649 19.0914 10.4466 19.25 10.7501 19.25V21.875C10.7501 22.359 11.1411 22.75 11.6251 22.75C12.1091 22.75 12.5001 22.359 12.5001 21.875V19.25H19.5001V21.875C19.5001 22.359 19.8911 22.75 20.3751 22.75C20.8591 22.75 21.2501 22.359 21.2501 21.875V19.25C21.5536 19.25 21.8352 19.0941 21.9938 18.8344C22.1524 18.5746 22.1688 18.2547 22.0321 17.984L21.5946 17.109C21.4469 16.8109 21.1434 16.625 20.8126 16.625H11.1876Z" fill="#16A34A" />
              </g>
              <defs>
                <clipPath id="clip0_1153_87">
                  <path d="M9.875 8.75H22.125V22.75H9.875V8.75Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-semibold text-[#111827]">
                Seated Condition
              </h6>
              <p className="text-sm text-[#4B5563] leading-[23px]">
                In this task, you will read a short paragraph while seated. Once you finish reading, you'll tap on a highlighted keyword from the paragraph.
              </p>
            </div>
          </div>
        </div>

        <div className="border-[2px] border-[#E5E7EB] border-solid rounded-2xl p-5 flex gap-4 mx-5 bg-white">
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0.75C24.8366 0.75 32 7.91344 32 16.75C32 25.5866 24.8366 32.75 16 32.75C7.16344 32.75 0 25.5866 0 16.75C0 7.91344 7.16344 0.75 16 0.75Z" fill="#FFEDD5" />
            <path d="M16 0.75C24.8366 0.75 32 7.91344 32 16.75C32 25.5866 24.8366 32.75 16 32.75C7.16344 32.75 0 25.5866 0 16.75C0 7.91344 7.16344 0.75 16 0.75Z" stroke="#E5E7EB" />
            <path d="M20.375 26.75H11.625V6.75H20.375V26.75Z" stroke="#E5E7EB" />
            <g clip-path="url(#clip0_1153_89)">
              <path d="M16.0001 10.8125C16.0001 10.4644 16.1384 10.1306 16.3845 9.88442C16.6307 9.63828 16.9645 9.5 17.3126 9.5C17.6607 9.5 17.9945 9.63828 18.2407 9.88442C18.4868 10.1306 18.6251 10.4644 18.6251 10.8125C18.6251 11.1606 18.4868 11.4944 18.2407 11.7406C17.9945 11.9867 17.6607 12.125 17.3126 12.125C16.9645 12.125 16.6307 11.9867 16.3845 11.7406C16.1384 11.4944 16.0001 11.1606 16.0001 10.8125ZM15.0841 14.9496C15.0567 14.9605 15.0321 14.9715 15.0048 14.9824L14.786 15.0781C14.3376 15.2777 13.9931 15.6578 13.8372 16.1227L13.7661 16.3359C13.613 16.7953 13.1181 17.0414 12.6587 16.8883C12.1993 16.7352 11.9532 16.2402 12.1063 15.7809L12.1774 15.5676C12.4892 14.6352 13.1782 13.875 14.0751 13.4758L14.2938 13.3801C14.8626 13.1285 15.4778 12.9973 16.1013 12.9973C17.3208 12.9973 18.42 13.7301 18.8876 14.8539L19.3087 15.8629L19.8938 16.1555C20.3259 16.3715 20.5009 16.8965 20.2849 17.3285C20.0688 17.7605 19.5438 17.9355 19.1118 17.7195L18.379 17.3559C18.0974 17.2137 17.8759 16.9785 17.7556 16.6859L17.4931 16.057L16.9653 17.848L18.3188 19.3246C18.4665 19.4859 18.5704 19.6801 18.6251 19.8934L19.254 22.4117C19.3716 22.8793 19.0872 23.3551 18.6169 23.4727C18.1466 23.5902 17.6735 23.3059 17.556 22.8355L16.9544 20.4266L15.0212 18.3184C14.6165 17.8781 14.4661 17.2629 14.6192 16.6859L15.0813 14.9496H15.0841ZM13.5036 20.3828L14.1872 18.6766C14.2446 18.7586 14.3103 18.8352 14.3786 18.9117L15.4915 20.1258L15.095 21.1156C15.0294 21.2797 14.931 21.4301 14.8052 21.5559L13.1181 23.243C12.7763 23.5848 12.2212 23.5848 11.8794 23.243C11.5376 22.9012 11.5376 22.3461 11.8794 22.0043L13.5036 20.3828Z" fill="#EA580C" />
            </g>
            <defs>
              <clipPath id="clip0_1153_89">
                <path d="M11.625 9.5H20.375V23.5H11.625V9.5Z" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="flex flex-col gap-3 flex-1">
            <h6 className="font-semibold text-[#111827]">
              Walking Condition
            </h6>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#4B5563] leading-[23px]">
                In this task, you will read a short paragraph while walking. Once you finish reading, you'll tap on a highlighted keyword from the paragraph.
              </p>
              <div className="border-l-[4px] border-[#FACC15] p-4 bg-[#FEFCE8] rounded-[8px] font-medium text-xs text-[#854D0E]">
                ⚠️ Please make sure to stay aware of your surroundings while walking.
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 flex flex-col gap-4">
          <h6 className="font-semibold text-[#111827]">
            Task Steps:
          </h6>
          <div className="flex gap-3">
            <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-[#FFFFFF] bg-[#2563EB] text-xs">
              1
            </div>
            <p className="text-sm text-[#374151] leading-[20px]">
              Read the paragraph carefully
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-[#FFFFFF] bg-[#2563EB] text-xs">
              2
            </div>
            <p className="text-sm text-[#374151] leading-[20px]">
              Identify the highlighted keyword
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-[#FFFFFF] bg-[#2563EB] text-xs">
              3
            </div>
            <p className="text-sm text-[#374151] leading-[20px]">
              Tap on the keyword to proceed
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mx-5">
          <button onClick={handleStart} className="h-[56px] rounded-xl bg-[#10B981] shrink-0 text-[#FFFFFF] font-semibold shadow-xl flex items-center justify-center">
            Start Task
          </button>
          <p className="text-sm text-[#6B7280] text-center">
            Please select a condition to continue
          </p>
        </div>
      </div>
    </div>
  );
}
