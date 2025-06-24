


"use client"

import { useState } from "react";
import { motion } from "motion/react"




export default function Home() {

  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");



  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [duration, setDuration] = useState(null);

  const [isTrans, setIsTrans] = useState(false);
  const handleTrans = () => {
    setIsTrans(prevState => !prevState);
  }
  const languages = [
    { code: "en", label: "English" },
    { code: "ur", label: "Urdu" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "zh", label: "Chinese" },
    { code: "ar", label: "Arabic" },
    { code: "de", label: "German" },
    { code: "hi", label: "Hindi" },
  ];
  const [isSumm, setIsSumm] = useState(false);
  const handleSumm = () => {
    setIsSumm(prevState => !prevState);
  }



  const [isTitle, setIsTitle] = useState(false);
  const handleTitle = () => {
    setIsTitle(prevState => !prevState);
  }

  const [isTags, setIsTags] = useState(false);
  const handleTags = () => {
    setIsTags(prevState => !prevState);
  }

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFileName(file.name);
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(file);
      videoElement.onloadedmetadata = () => {
        setDuration(videoElement.duration);
      };
    }
  };
  function copyContent(a) {
    console.log(a)
    // Get the element by its ID
    var content = document.getElementById(a);

    // Create a temporary text area element to hold the text
    var textarea = document.createElement('textarea');

    // Set the value of the text area to the content of the div
    textarea.value = content.textContent || content.innerText;

    // Append the textarea to the body (it needs to be in the DOM to work)
    document.body.appendChild(textarea);

    // Select the content of the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Execute the "copy" command
    document.execCommand('copy');

    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);

    // Optionally, alert the user that the content has been copied
    alert('Content copied to clipboard!');
  }

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const formatDuration = (time) => {
    if (!time) return null;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(videoFile);
  };

  return (
    <div className="w-full font-semibold text-custom-50px font-sans">
      <div className="mt-[17%]"></div>
      <form onSubmit={handleSubmit} className="mt-[17%] clearfixflex text-custom-30px">
        <div className="w-full flex h-[4rem] justify-between">
          <div className={`parentdiv relative left-[2.5%] h-[4rem] w-[80%] ${isOn ? "hidden" : ""}`}>
            <input type="text" id="fname" placeholder="  Paste your video link here" className="text-blue-500 bg-gradient-to-r from-[#ffffff] to-[#6474FF] w-full h-full" name="fname" />
          </div>

          <div className={`parentdiv relative left-[2.5%] h-[4rem] w-[80%] ${isOn ? "" : "hidden"}`}>

            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="flex justify-center items-center bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-white h-full w-full cursor-pointer hover:bg-blue-600 transition"
            >
              <h1>Choose Video</h1>
            </label>
          </div>
          <div className="relative right-[2.5%] w-[20%] h-full">



















            <div className="flex items-center space-x-4">


              <div
                className={`relative w-full h-[4rem] cursor-pointer rounded-full  transition-colors duration-300 ${isOn ? " bg-gradient-to-r from-[#7e6bbc] to-[#ffffff]" : "  bg-gradient-to-r from-[#6474FF] to-[#7e6bbc]"}`}
                onClick={handleToggle}>
                <div className="flex w-full h-full ">
                  <div className={`flex justify-center text-grey items-center text-center ${isOn ? "" : "hidden"}`}>Upload Video</div>

                  <div className={`ml-[10rem] text-grey flex justify-center items-center text-center ${isOn ? "hidden" : ""}`}>Url</div>
                </div>

                <div
                  className={`ml-[0.225rem] absolute top-1 w-[3.5rem] h-[3.5rem]  bg-blue-500 rounded-full shadow-md transition-transform duration-300 transform ${isOn ? " bg-blue-500 translate-x-[12.125rem]" : "bg-white translate-x-0"}`}
                >
                  <img src={isOn ? "/icon/upload-video.svg" : "/icon/url.svg"} alt="Dynamic Image" />

                </div>
              </div>
            </div>
          </div>
        </div>


      </form>

      <div className={`mt-[5%] flex w-[100%] h-[28.5rem] transition ${previewUrl ? '' : 'hidden'}`}>
        <div className="left-[2.5%] h-full w-[50%]">
          <div className="flex h-[4rem] w-full" onClick={handleTrans}>
            <div className="flex justify-center items-center bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-white w-[90%] cursor-pointer left-[2.5%] hover:bg-blue-600 transition">
              <h1 className="text-custom-30px">Video Translation</h1>
            </div>
            <div className="relative Upload-Video w-[20%] h-full flex justify-center items-center text-custom-20px right-[4.5%] bg-gradient-to-r from-[#7e6bbc] to-[#ffffff] rounded-[6rem]">
              <img
                src="/icon/yes.svg"
                alt="My Icon"
                className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem] ${isTrans ? 'hidden' : ''}`}
              />
              <img
                src="/icon/cross.svg"
                alt="My Icon"
                className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem] ${isTrans ? '' : 'hidden'}`}
              />
            </div>

          </div>


          <div className="flex justify-around text-[1rem] h-[3rem] mt-[0.5rem]">
            {/* Source Language Dropdown */}
            <div className="relative w-[40%]">
              <select
                className="w-full h-full rounded-2xl bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-black px-3 appearance-none cursor-pointer"
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
              >
                <option value="" disabled>
                  Source Language
                </option>
                {languages
                  .filter((lang) => lang.code !== targetLang)
                  .map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
              </select>
              <img
                src="/icon/dropdowns.svg"
                alt="Dropdown Icon"
                className={`absolute right-2 top-2 h-[70%] ${isSumm ? "hidden" : ""}`}
              />
            </div>

            {/* Target Language Dropdown */}
            <div className="relative w-[40%]">
              <select
                className="w-full h-full rounded-2xl bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-black px-3 appearance-none cursor-pointer"
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
              >
                <option value="" disabled>
                  Target Language
                </option>
                {languages
                  .filter((lang) => lang.code !== sourceLang)
                  .map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
              </select>
              <img
                src="/icon/dropdowns.svg"
                alt="Dropdown Icon"
                className={`absolute right-2 top-2 h-[70%] ${isSumm ? "hidden" : ""}`}
              />
            </div>
          </div>



          {/* Other buttons for summary, title, tags */}
          <div className="flex flex-col w-full mt-[2%]">
            {/* Video Summary Button */}
            <div className="flex h-[4rem] w-full" onClick={handleSumm}>
              <div className="flex justify-center items-center bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-white w-[90%] cursor-pointer left-[2.5%] hover:bg-blue-600 transition">
                <h1 className="text-custom-30px">Video Summary</h1>
              </div>
              <div className="relative Upload-Video w-[20%] h-full flex justify-center items-center text-custom-20px right-[4.5%] bg-gradient-to-r from-[#7e6bbc] to-[#ffffff] rounded-[6rem]">
                <img
                  src="/icon/yes.svg"
                  alt="Yes Icon"
                  className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem] ${isSumm ? 'hidden' : ''}`}
                />
                <img
                  src="/icon/cross.svg"
                  alt="Cross Icon"
                  className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem] ${isSumm ? '' : 'hidden'}`}
                />
              </div>
            </div>

            {/* Max & Min Length Inputs */}
            <div className="flex justify-around h-[3.5rem] mt-2 items-center  w-full">
              <div className="flex flex-col h-full w-[45%]">
                
                <input
                  id="minLength"
                  type="number"
                  min="0"
                  className="rounded-xl px-3 py-2 bg-gradient-to-r h-[100%]  from-[#6474FF] to-[#7e6bbc] placeholder:text-white text-base  focus:outline-none"
                  placeholder="Enter min length"
                />
              </div>
              <div className="flex flex-col h-full w-[45%]">
                
                <input
                  id="maxLength"
                  type="number"
                  min="0"
                  className="rounded-xl px-3 py-2 bg-gradient-to-r h-[100%]  from-[#6474FF] to-[#7e6bbc] placeholder:text-white text-base  focus:outline-none"
                  placeholder="Enter max length"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-[2%] h-[4rem] w-full" onClick={handleSumm}>
            <div className="flex justify-center items-center bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-white w-[90%] cursor-pointer left-[2.5%] hover:bg-blue-600 transition">
              <h1 className="text-custom-30px">Tags And Title</h1>
            </div>
            <div className="relative Upload-Video w-[20%] h-full flex justify-center items-center text-custom-20px right-[4.5%] bg-gradient-to-r from-[#7e6bbc] to-[#ffffff] rounded-[6rem]">
              <img
                src="/icon/yes.svg"
                alt="My Icon"

                className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem]  ${isSumm ? 'hidden' : ''}`}
              />
              <img
                src="/icon/cross.svg"
                alt="My Icon"
                className={`opacity-1118 svg-black w-[4.5rem] h-[4.5rem] ${isSumm ? '' : 'hidden'}`}
              />
            </div>
          </div>
          <div className="flex mt-[2%] h-[4rem] rounded-xl w-full" onClick={handleSumm}>
            <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-white w-[90%] cursor-pointer left-[2.5%] hover:bg-blue-600 transition">
              <h1 className="text-custom-30px">Continue</h1>
            </div>

          </div>

          {/* Add Title and Tags here, similar to the above structure */}
        </div>

        <div className="w-[45%] h-full">
          <div className="w-full h-[70%]">
            {previewUrl && (
              <video controls src={previewUrl} className="w-full h-full rounded" />
            )}
          </div>
          <div className="w-[99%] h-[30%]">
            {fileName && (
              <div className="text-gray-700 mt-2">
                <p className="truncate ... text-custom-30px"><strong>File Name:</strong> {fileName}</p>
                {duration !== null && (
                  <p className="text-custom-30px"><strong>Duration:</strong> {formatDuration(duration)}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="h-[5rem] flex justify-between">
            <h4 className=" bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[3rem] font-extrabold"  >Video Title</h4>
            <div onClick={() => copyContent('title')} className="hover:cursor-pointer w-auto flex justify-center items-center bg-gradient-to-r from-[#e5e6ec] to-[#94909e] rounded-full mr-[1rem] ">
              <img
                src="/icon/copy.svg"
                className="w-[30%] h-[30%] mr-[3px]"
                alt="My Icon" /> <h4 className="bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[2rem] font-extrabold"> Copy </h4></div>
          </div>
          <p id="title" className="bg-gradient-to-r from-[#c8cdf4] to-[#ffffff] text-[1.5rem]">The Transformative Power of Technology: Past, Present, and Future</p>
        </div>
        <div> <div className="h-[5rem] flex justify-between">
          <h4 className=" bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[3rem] font-extrabold"  >Video Tags</h4>
          <div onClick={() => copyContent('tags')} className="hover:cursor-pointer w-auto flex justify-center items-center bg-gradient-to-r from-[#e5e6ec] to-[#94909e] rounded-full mr-[1rem] ">
            <img
              src="/icon/copy.svg"
              className="w-[30%] h-[30%] mr-[3px]"
              alt="My Icon" /> <h4 className=" bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[2rem] font-extrabold"> Copy </h4></div>
        </div>
          <p id="tags" className="bg-gradient-to-r from-[#c8cdf4] to-[#ffffff] text-[1.5rem]">General/Topical Tags:
            #TechnologyEvolution

            #DigitalTransformation

            #FutureOfTechnology

            #TechAndSociety

            #AIandRobotics

            #Biotechnology

            #InternetRevolution

            #SocialMediaImpact

            #IndustrialRevolution

            #Innovation

            Academic/Educational Tags:
            #HistoryOfTechnology

            #TechnologicalAdvancements

            #ScienceAndTechnology

            #EthicsInTech

            #DigitalSociety

            #STEMEducation

            More Niche/Specific Tags:
            #ArtificialIntelligence

            #Automation

            #SmartTechnology

            #GeneEditing

            #CRISPR

            #MachineLearning

            #TechEthics

            #Urbanization

            #JobDisplacement </p>
        </div>
        <div >
          <div className="h-[5rem] flex justify-between">
            <h4 className=" bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[3rem] font-extrabold"  >Video Summary</h4>
            <div onClick={() => copyContent('contentToCopy')} className="hover:cursor-pointer w-auto flex justify-center items-center bg-gradient-to-r from-[#e5e6ec] to-[#94909e] rounded-full mr-[1rem] ">
              <img
                src="/icon/copy.svg"
                className="w-[30%] h-[30%] mr-[3px]"
                alt="My Icon" /> <h4 className="bg-gradient-to-r from-[#6474FF] to-[#7e6bbc] text-transparent bg-clip-text text-[2rem] font-extrabold"> Copy </h4></div>
          </div>
          <p id="contentToCopy" className="bg-gradient-to-r from-[#c8cdf4] to-[#ffffff] text-[1.5rem]">The evolution of technology over the past century has dramatically reshaped the way human beings interact with the world and with each other. From the early days of the industrial revolution to the rise of the internet and the modern digital age, technological advancements have been a constant driving force in shaping societies, economies, and cultures around the globe. Each new innovation brings with it both opportunities and challenges, pushing the boundaries of what is possible while simultaneously raising ethical, social, and environmental concerns. The rapid pace of technological development has transformed how we live, work, and communicate, creating a world that is increasingly interconnected yet paradoxically more individualized. As technology continues to advance at an unprecedented rate, it is essential to understand the ways in which it has both improved and complicated our lives, offering insights into the future trajectory of our global society.

            The first major wave of technological change occurred during the industrial revolution, which began in the late 18th century and lasted well into the 19th century. This period saw the widespread adoption of mechanized production methods, the rise of steam power, and the development of new machinery that greatly increased efficiency in industries like textiles, coal mining, and transportation. As factories replaced traditional handcrafts and manual labor, economies of scale were realized, and the concept of mass production emerged. This revolution laid the groundwork for the modern capitalist economies that dominate the world today, changing the face of work and society forever. The industrial revolution also sparked a shift in demographics, as people moved from rural areas to urban centers in search of employment, leading to the growth of cities and the rise of the working class. However, the benefits of industrialization were not universally shared, and many workers faced long hours, low wages, and unsafe working conditions.

            In the 20th century, the world witnessed another transformative period of technological growth, with the advent of the computer and the internet. The invention of the computer, first in the form of large, room-sized machines used for military and scientific purposes, eventually gave way to personal computers that became household staples. The rise of microprocessors and software development paved the way for the digital revolution, and by the 1990s, the internet began to emerge as a global communication tool that would fundamentally change the way people accessed information, conducted business, and interacted with one another. The advent of the World Wide Web in the mid-1990s made the internet more accessible and user-friendly, leading to the rapid expansion of online services, social media platforms, and e-commerce websites. The internet created a new form of global connectivity, breaking down geographic barriers and allowing people to share information and ideas in real time across vast distances.

            With the internet came the rise of social media, which has become a dominant force in modern society. Platforms like Facebook, Twitter, Instagram, and TikTok have revolutionized the way people communicate, share their lives, and consume information. Social media has not only made it easier to stay connected with friends and family but has also created new avenues for businesses to engage with consumers, shaping marketing and advertising strategies in profound ways. However, social media has also raised concerns about privacy, mental health, and the spread of misinformation. The prevalence of curated, idealized representations of people's lives on social media can contribute to feelings of inadequacy and anxiety, especially among young people. Additionally, the algorithms that power these platforms have been criticized for creating echo chambers, where individuals are exposed only to content that reinforces their existing beliefs and opinions, rather than fostering open dialogue and diverse perspectives.

            In addition to the rise of the internet and social media, technological advancements in fields like artificial intelligence (AI), robotics, and biotechnology are rapidly transforming industries and reshaping the future of work. AI has become an increasingly important tool in a variety of sectors, from healthcare and finance to manufacturing and entertainment. Machine learning algorithms, which allow computers to learn from data and make predictions or decisions without explicit programming, are powering innovations like self-driving cars, personalized medical treatments, and smart home devices. These advancements have the potential to improve efficiency, accuracy, and convenience in many aspects of life, but they also raise concerns about job displacement, privacy, and the ethical implications of AI decision-making. As AI becomes more sophisticated, questions about its role in society and its potential impact on human autonomy and agency become increasingly important.

            Robotics is another field that has seen tremendous growth in recent years, with robots being used in a wide range of applications, from manufacturing and logistics to healthcare and space exploration. The development of robots that can perform complex tasks with precision and dexterity has the potential to revolutionize industries, making production processes more efficient and reducing the need for human labor in dangerous or repetitive tasks. However, the widespread adoption of robots also raises concerns about job losses and the potential for increased inequality. As machines become more capable, there is a growing debate about how to ensure that the benefits of automation are shared fairly and that workers who are displaced by robots are given opportunities for retraining and reskilling.

            In the realm of biotechnology, advances in genetic engineering and gene editing have opened up new possibilities for medicine and agriculture. Techniques like CRISPR have made it possible to edit genes with unprecedented precision, offering the potential to cure genetic disorders, create disease-resistant crops, and even extend human lifespan. While these technologies hold great promise, they also raise ethical questions about the potential for "designer babies" and the manipulation of the human genome. The ability to alter genes could have unintended consequences, both for individuals and for society as a whole, and it is crucial that these advancements are carefully regulated to ensure that they are used responsibly.

            As technology continues to evolve, it is clear that its impact on society will only grow more profound. While technological innovations have the potential to bring about positive change, they also create new challenges and risks that must be addressed. The rapid pace of change can make it difficult for individuals, businesses, and governments to keep up, and the ethical, social, and economic implications of new technologies must be carefully considered. In many ways, technology has the power to either enhance or disrupt society, depending on how it is used. As we move further into the 21st century, it is essential to balance the benefits of technological progress with a thoughtful consideration of its potential consequences, ensuring that the future of technology serves the greater good of humanity.

            This is just one possible direction for the 1000-word text. Let me know if you'd like to explore a different topic or need any adjustments! </p>
        </div>
      </div>
    </div>
  );
}

