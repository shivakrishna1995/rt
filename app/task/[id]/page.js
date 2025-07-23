"use client";
import { trackClick, trackPageView } from "../../../analytics";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Task() {
    const router = useRouter();
    const { id } = useParams();

    const [selectedWord, setSelectedWord] = useState();

    const conditionDescription = id == "1" ? "Seated Condition: Read the paragraph carefully. Once you're done, tap the word that means 'increase'." : `Walking Condition: Read the paragraph carefully. Once you're done, tap the word that means  "interested to know"?`;

    const taskDescription = id == "1" ? `"Global warming is one of the most significant challenges facing the planet today. It refers to the long-term increase in Earth's average surface temperature due to human activities, especially the burning of fossil fuels. Rising temperatures lead to melting ice caps, sea-level rise, and extreme weather patterns."` : `“Lisa opened her book and started to read. The story was exciting, and she didn’t want to stop. Every page made her curious to know what would happen next. She finished the whole book in one afternoon.”`;

    const words = id == "1" ? ["Significant", "Rising", "Melting", "Burning"] : ["Read", "Finished", "Curious", "Afternoon "];

    const tapInstructions = id == "1" ? `Find and tap the word that means 'increase' in the paragraph above.` : `Find and tap the word that means 'interested to know' in the paragraph above.`;

    useEffect(() => {
        trackPageView();
    }, []);

    const handleSubmit = () => {
        trackClick({ word: selectedWord });
        if (id == 1) return router.push("/task/2");
        return router.push("/feedback");
    }

    return (
        <div className="w-screen bg-gray-100 md:p-10 flex justify-center">
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

                    <h6 className="font-semibold text-lg text-center">Task {id}</h6>
                </header>

                <div className="border-[1px] border-[#BFDBFE] mx-5 bg-[#EFF6FF] p-4 rounded-[8px] flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16562 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66562 7 9 7.33437 9 7.75V10.5H9.25C9.66562 10.5 10 10.8344 10 11.25C10 11.6656 9.66562 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4Z" fill="#2563EB" />
                        </svg>
                        <h6 className="font-medium text-sm text-[#1E40AF]">
                            Current Condition
                        </h6>
                    </div>
                    <p className="text-sm text-[#1D4ED8]">
                        {conditionDescription}
                    </p>
                </div>

                <div className="flex flex-col gap-1 px-5">
                    <h5 className="font-semibold text-lg text-[#111827]">
                        Reading Task
                    </h5>
                    <div className="border-[1px] border-[#E5E7EB] shadow-2xs rounded-[8px] p-4 bg-white">
                        <p className="text-lg text-[#000000]">
                            {taskDescription}
                        </p>
                    </div>
                </div>

                <div className="border-[1px] border-[#FDE68A] bg-[#FFFBEB] rounded-lg p-4 flex gap-2 mx-5">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1153_203)">
                            <g clip-path="url(#clip1_1153_203)">
                                <path d="M3.99995 1.25C3.99995 0.559375 4.55933 0 5.24995 0C5.94058 0 6.49995 0.559375 6.49995 1.25V5.88125C6.76558 5.64375 7.11558 5.5 7.49995 5.5C8.1437 5.5 8.6937 5.90625 8.9062 6.475C9.1812 6.18437 9.5687 6 9.99995 6C10.7906 6 11.4375 6.60938 11.4968 7.38438C11.7625 7.14375 12.1156 7 12.5 7C13.3281 7 14 7.67188 14 8.5V10V10.5V12C14 14.2094 12.2093 16 9.99995 16H9.49995H7.49995H7.49683H7.33433C7.17808 16 7.02495 15.9906 6.87495 15.9688C5.14683 15.7937 3.5562 14.9062 2.49995 13.5L0.249951 10.5C-0.165674 9.94687 -0.0531743 9.16562 0.499951 8.75C1.05308 8.33438 1.83433 8.44687 2.24995 9L3.99995 11.3344V1.25ZM7.49995 9.5C7.49995 9.225 7.27495 9 6.99995 9C6.72495 9 6.49995 9.225 6.49995 9.5V12.5C6.49995 12.775 6.72495 13 6.99995 13C7.27495 13 7.49995 12.775 7.49995 12.5V9.5ZM8.99995 9C8.72495 9 8.49995 9.225 8.49995 9.5V12.5C8.49995 12.775 8.72495 13 8.99995 13C9.27495 13 9.49995 12.775 9.49995 12.5V9.5C9.49995 9.225 9.27495 9 8.99995 9ZM11.5 9.5C11.5 9.225 11.275 9 11 9C10.725 9 10.5 9.225 10.5 9.5V12.5C10.5 12.775 10.725 13 11 13C11.275 13 11.5 12.775 11.5 12.5V9.5Z" fill="#D97706" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1153_203">
                                <rect width="14" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1153_203">
                                <path d="M0 0H14V16H0V0Z" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-medium text-[#92400E]">
                            Tap Instruction
                        </h6>
                        <p className="text-[#B45309] text-sm">
                            {tapInstructions}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 px-5">
                    <h5 className="font-medium text-[#374151]">
                        Other words from the text:
                    </h5>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        {words.map((word, index) => (
                            <button
                                key={index}
                                className={`${word === selectedWord ? 'bg-blue-400 text-white' : 'bg-[#FFFFFF] text-[#374151]'} border-[1px] border-[#D1D5DB] rounded-lg h-[50px] w-full flex items-center justify-center font-medium`}
                                onClick={() => setSelectedWord(word)}
                            >
                                {word}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-5 bg-white border-t-[1px] border-[#E5E7EB]">
                    <button onClick={handleSubmit} className="w-full h-[56px] rounded-xl bg-[#10B981] shrink-0 text-[#FFFFFF] font-semibold shadow-xl flex items-center justify-center">
                        Complete the task
                    </button>
                </div>
            </div>
        </div>
    );
}
