"use client";
import { trackClick, trackPageView } from "../../analytics";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Feedback() {
    const router = useRouter();

    const [a1, setA1] = useState();
    const [a2, setA2] = useState();
    const [a3, setA3] = useState();
    const [a4, setA4] = useState();
    const [a5, setA5] = useState();
    const [a6, setA6] = useState();
    const [a7, setA7] = useState();
    const [a8, setA8] = useState();

    useEffect(() => {
        trackPageView();
    }, []);

    const handleSubmit = () => {
        trackClick({ a1, a2, a3, a4, a5, a6, a7, a8 });
        return router.push("/success");
    }

    return (
        <div className="w-screen h-screen bg-gray-100 md:p-10 flex justify-center">
            <div className="w-full md:w-[384px] md:rounded-x flex flex-col overflow-y-scroll gap-7 h-full bg-[#F9FAFB]">
                <header className="shrink-0 h-[80px] grid grid-cols-[30px_1fr_30px] items-center border-b-[1px] border-[#E5E7EB] px-5 bg-white">
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                        <g clip-path="url(#clip0_1153_169)">
                            <g clip-path="url(#clip1_1153_169)">
                                <path d="M0.330566 8.45547C-0.108887 8.89492 -0.108887 9.60859 0.330566 10.048L5.95557 15.673C6.39502 16.1125 7.10869 16.1125 7.54814 15.673C7.9876 15.2336 7.9876 14.5199 7.54814 14.0805L3.83916 10.375H14.6251C15.2474 10.375 15.7501 9.87227 15.7501 9.25C15.7501 8.62774 15.2474 8.125 14.6251 8.125H3.84268L7.54463 4.41953C7.98408 3.98008 7.98408 3.26641 7.54463 2.82695C7.10518 2.3875 6.3915 2.3875 5.95205 2.82695L0.327051 8.45195L0.330566 8.45547Z" fill="#4B5563" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1153_169">
                                <rect width="15.75" height="18" fill="white" transform="translate(0 0.25)" />
                            </clipPath>
                            <clipPath id="clip1_1153_169">
                                <path d="M0 0.25H15.75V18.25H0V0.25Z" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h6 className="font-semibold text-lg text-center">Post-Task Survey</h6>
                </header>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        1. How easy was it to read the paragraph on your mobile screen?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Very Difficult, 5 = Very Easy)
                    </p>
                    <div className="flex justify-between items-stretch">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA1(1)}>
                            <input type="radio" name="q1" checked={a1 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA1(2)}>
                            <input type="radio" name="q1" checked={a1 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA1(3)}>
                            <input type="radio" name="q1" checked={a1 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA1(4)}>
                            <input type="radio" name="q1" checked={a1 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA1(5)}>
                            <input type="radio" name="q1" checked={a1 === 5} />
                            <span className="font-medium text-sm text-[#000000]">5</span>
                        </div>
                    </div>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        2. How comfortable were you while performing the reading task?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Very Uncomfortable, 5 = Very Comfortable)
                    </p>
                    <div className="flex justify-between items-stretch">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA2(1)}>
                            <input type="radio" name="q2" checked={a2 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA2(2)}>
                            <input type="radio" name="q2" checked={a2 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA2(3)}>
                            <input type="radio" name="q2" checked={a2 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA2(4)}>
                            <input type="radio" name="q2" checked={a2 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA2(5)}>
                            <input type="radio" name="q2" checked={a2 === 5} />
                            <span className="font-medium text-sm text-[#000000]">5</span>
                        </div>
                    </div>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        3. How easy was it to locate and tap the highlighted keyword or answer the prompt?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Very Difficult, 5 = Very Easy)
                    </p>
                    <div className="flex justify-between items-stretch">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA3(1)}>
                            <input type="radio" name="q3" checked={a3 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA3(2)}>
                            <input type="radio" name="q3" checked={a3 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA3(3)}>
                            <input type="radio" name="q3" checked={a3 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA3(4)}>
                            <input type="radio" name="q3" checked={a3 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA3(5)}>
                            <input type="radio" name="q3" checked={a3 === 5} />
                            <span className="font-medium text-sm text-[#000000]">5</span>
                        </div>
                    </div>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        4. How would you rate the overall experience for each task (Reading and Tapping)?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Very Poor, 5 = Excellent)
                    </p>
                    <div className="flex justify-between items-stretch">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA4(1)}>
                            <input type="radio" name="q4" checked={a4 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA4(2)}>
                            <input type="radio" name="q4" checked={a4 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA4(3)}>
                            <input type="radio" name="q4" checked={a4 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA4(4)}>
                            <input type="radio" name="q4" checked={a4 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA4(5)}>
                            <input type="radio" name="q4" checked={a4 === 5} />
                            <span className="font-medium text-sm text-[#000000]">5</span>
                        </div>
                    </div>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        5. Did you face any distractions or difficulties while completing the tasks in your assigned condition (Seated/Walking)?
                    </h6>
                    <textarea value={a5} onChange={(e) => setA5(e.target.value)} className="border-[1px] border-[#D1D5DB] p-4 rounded-lg" placeholder="Please describe any distractions or difficulties you experienced..."></textarea>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        6. On a scale from 1 to 5, how confident were you that you selected the correct word during the tapping task?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Not Confident, 5 = Very Confident)
                    </p>
                    <div className="flex justify-between items-stretch">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA6(1)}>
                            <input type="radio" name="q6" checked={a6 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA6(2)}>
                            <input type="radio" name="q6" checked={a6 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA6(3)}>
                            <input type="radio" name="q6" checked={a6 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA6(4)}>
                            <input type="radio" name="q6" checked={a6 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA6(5)}>
                            <input type="radio" name="q6" checked={a6 === 5} />
                            <span className="font-medium text-sm text-[#000000]">5</span>
                        </div>
                    </div>
                </div>

                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        7. Did the condition (Seated/Walking) impact your performance in any way?
                    </h6>
                    <textarea value={a7} onChange={(e) => setA7(e.target.value)} className="border-[1px] border-[#D1D5DB] p-4 rounded-lg" placeholder="Please describe how the condition affected your performance..."></textarea>
                </div>
                <div className="border-[1px] border-[#F3F4F6] bg-white rounded-xl p-4 shadow mx-5 flex flex-col gap-3">
                    <h6 className="font-semibold text-[#111827]">
                        8. Overall, how would you rate the clarity of the task instructions?
                    </h6>
                    <p className="text-sm text-[#4B5563]">
                        (1 = Very Confusing, 5 = Very Clear)
                    </p>
                    <div className="flex gap-4">
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA8(1)}>
                            <input type="radio" name="q8" checked={a8 === 1} />
                            <span className="font-medium text-sm text-[#000000]">1</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA8(2)}>
                            <input type="radio" name="q8" checked={a8 === 2} />
                            <span className="font-medium text-sm text-[#000000]">2</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA8(3)}>
                            <input type="radio" name="q8" checked={a8 === 3} />
                            <span className="font-medium text-sm text-[#000000]">3</span>
                        </div>
                        <div className="border-[2px] border-[#E5E7EB] p-4 flex flex-col gap-2 items-center rounded-lg cursor-pointer" onClick={() => setA8(4)}>
                            <input type="radio" name="q8" checked={a8 === 4} />
                            <span className="font-medium text-sm text-[#000000]">4</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-white border-t-[1px] border-[#E5E7EB]">
                    <button onClick={handleSubmit} className="w-full h-[58px] rounded-xl bg-[#10B981] shrink-0 text-[#FFFFFF] font-semibold shadow-xl flex items-center justify-center">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
