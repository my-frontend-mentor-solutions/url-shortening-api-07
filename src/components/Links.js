import React, { useState } from 'react'

export default function Links() {

    const [userInput, setUserInput] = useState("");
    const [shortenedURL, setShortenedURL] = useState('');
    const [errorText, setErrorText] = useState('');

    const urlShortener = () => {
        const apiLink = "https://api.shrtco.de/v2/shorten?url=";

        fetch(apiLink + userInput)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.result) {
                    setErrorText('');
                    setShortenedURL(data.result.short_link);
                } else {
                    setShortenedURL('');
                    setErrorText("Please enter a valid address");
                }
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(shortenedURL);
    };

    const [copyText, setCopyText] = useState("Copy");

    const copyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.position = "fixed";
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.opacity = 0;

        document.body.appendChild(textArea);
        textArea.select();

        try {
            const successful = document.execCommand("copy");
            
        } catch (err) {
            console.error("Copy to clipboard failed:", err);
        }

        document.body.removeChild(textArea);
    };

    const copyLink = () => {
        if (!shortenedURL) {
            return;
        }

        copyToClipboard(shortenedURL);
        setCopyText("Copied!");

        setTimeout(() => {
            setCopyText("Copy");
        }, 2000);
    };

    return (
        <div className='w-full my-10 flex flex-col justify-center items-center bg-slate-200 py-5'>

            <div className='w-[90%] md:w-[80%] bg-shorten-mobile md:bg-shorten-desktop bg-very-dark-blue rounded-xl bg-cover bg-center flex flex-col md:flex-row py-8 md:p-10 md:pb-4 items-center md:items-start'>

                <div className='w-[90%] md:flex-[17] md:mr-5'>
                    <input
                        type="text"
                        id="URLinput"
                        name="url"
                        placeholder='Enter your link here'
                        className='w-full rounded-xl h-fit py-3  px-5 outline-none focus:border-cyan border-2 border-solid'
                        onInput={(e) => setUserInput(e.target.value)}
                    />
                    <p className='text-red text-lg mt-1 ml-2 h-[18px]'>{errorText}</p>
                </div>
                <p className='w-fit text-white bg-cyan md:hover:bg-cyan-hover active:bg-cyan-hover hover:cursor-pointer rounded-xl text-center px-6 md:px-4 py-2 md:py-3 font-bold text-xl md:flex-[3] mt-5 md:m-0' onClick={urlShortener}>Shorten It!</p>

            </div>

            <div className='w-[90%] md:w-[80%] my-5 flex flex-col md:flex-row bg-white justify-center items-center rounded-xl py-5 md:px-10'>
                <div className='w-[90%] md:flex-[9] flex flex-col md:flex-row md:justify-between text-base md:text-lg'>
                    <p>{userInput ? userInput : "Your URL"}</p>
                    <p className='md:hidden border-solid border-[1px] border-[#00000017] w-full my-3'></p>
                    <p className='text-cyan'>{shortenedURL ? shortenedURL : "Shortened URL"}</p>
                </div>

                <p
                    className='w-fit md:flex-[1] text-white bg-cyan md:hover:bg-cyan-hover active:bg-cyan-hover hover:cursor-pointer rounded-xl text-center px-6 md:px-2 py-2 md:py-3 font-bold text-xl mt-5 md:m-0 md:ml-5'
                    onClick={copyLink}
                >{copyText}</p>
            </div>

        </div>
    )
}